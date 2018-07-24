const conn = require('./connection')

const messageBaseCols = [
    'requests.id as id',
    'gear_id',
    'requester_id',
    'requests.owner_id as owner_id',
    'created_at',
    'message',
    'gear.name as gear_name'
]

function getRequests(id, testDb) {
    const db = testDb || conn
    let requests = {}

    return Promise.all([
        getReceivedRequestsWithUsername(id),
        getSentRequestsWithUsername(id)
    ])
        .then(([received, sent]) => {
            requests.received = received
            requests.sent = sent
            return requests
        })
}

function getReceivedRequestsWithUsername(id, testDb) {
    const db = testDb || conn
    return db('requests').where({ 'owner_id': id })
        .join('users', 'requests.requester_id', 'users.id')
        .join('gear', 'requests.gear_id', 'gear.id')
        .select(
            ...messageBaseCols,
            'user_name as requester_user_name'
        )
}

function getSentRequestsWithUsername(id, testDb) {
    const db = testDb || conn
    return db('requests').where({ 'requester_id': id })
        .join('users', 'requests.owner_id', 'users.id')
        .join('gear', 'requests.gear_id', 'gear.id')
        .select(
            ...messageBaseCols,
            'user_name as owner_user_name'
        )
}

function insertRequest(request, isSender, testDb) {
    const db = testDb || conn

    const otherUserString = isSender
        ? 'owner'
        : 'requester'


    return db.insert([request], 'id')
        .into('requests')
        .then(ids => {
            const id = ids[0]
            return db('users').where('id', request[otherUserString + '_id'])
                .first()
                .select('user_name')
                .then(user => ({
                        id,
                        [otherUserString + '_user_name']: user.user_name
                    })
                )
        })
}

function updateRequest(id, requestUpdate, testDb) {
    const db = testDb || conn
    return db('requests')
        .where({ id })
        .update(requestUpdate)
}

function deleteRequest(id, testDb) {
    const db = testDb || conn
    return db('requests')
        .where({ id })
        .del()
        .then(numdeletes => {
            if (numdeletes) return numdeletes
            else throw new Error('request not found in DB')
        })
}

module.exports = {
    getRequests,
    getReceivedRequestsWithUsername,
    getSentRequestsWithUsername,
    insertRequest,
    updateRequest,
    deleteRequest
}