const conn = require('./connection')

function getRequests(id, testDb) {
    const db = testDb || conn
    let requests = {}

    return Promise.all([
        db('requests').where({ 'owner_id': id }), 
        db('requests').where({ 'requester_id': id })
    ])
    .then(([received, sent]) => {
        requests.received = received
        requests.sent = sent
        return requests
    })
}

function insertRequest(request, testDb) {
    const db = testDb || conn
    return db.insert([request], 'id')
        .into('requests')
}

function updateRequest(id, requestUpdate, testDb) {
    const db = testDb || conn
    return db('requests')
        .where({id})
        .update(requestUpdate)
}

function deleteRequest(id, testDb) {
    const db = testDb || conn
    return db('requests')
        .where({id})
        .del()
        .then(numdeletes => {
            if (numdeletes) return numdeletes
            else throw new Error ('request not found in DB')
        })
}

module.exports = {
    getRequests,
    insertRequest,
    updateRequest,
    deleteRequest
}