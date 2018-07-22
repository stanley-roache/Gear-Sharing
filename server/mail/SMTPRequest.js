const send = require('sendmail')()

const adminEmail = 'toolerino1@gmail.com'

function sendMail(item, owner, requester) {
  return new Promise((resolve, reject) => {
    send({
    from: 'toolerino1@gmail.com',
    to: 'stan.roache@gmail.com',
    subject: 'toolrequest',
    html: 'mail body'
    }, (err, reply) => {
      console.log(err && reject(err));
      console.log(reply && resolve(reply));
    })
  })
}

