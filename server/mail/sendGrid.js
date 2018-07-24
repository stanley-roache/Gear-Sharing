// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const adminEmail = 'toolerino1@gmail.com'
const requestSubject = 'new request for gear use'

function sendRequest(details) {
  const {item, requester, messageBody} = details
  const requestBodyHTML = `
  Hey ${item.user_name},
  <br><br>
  ${requester.user_name} wants to use your ${item.name}.
  <br><br>
  Their message: ${messageBody}
  <br><br>
  It'd be awesome if you could touch base with them at ${requester.email_address} ASAP.
  <br><br>
  Thanks for getting involved!
  <br><br>
  Have an awesome day!`

  return new Promise((resolve, reject) => {
    const msg = {
      to: item.email_address,
      from: adminEmail,
      subject: requestSubject,
      html: requestBodyHTML,
      generateTextFromHTML: true
    };
    sgMail.send(msg, (err, result) => {
      if (err) reject(err)
      else resolve(result)
    });
  })
}

module.exports = {
  sendRequest
}
