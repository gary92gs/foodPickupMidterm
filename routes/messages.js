const express = require('express');
const router = express.Router();
const twilioClient = require('.././public/javascript/twiltioClient');


router.post('/send', (req, res) => {
  const { body , from, to } = req.body;

  twilioClient.messages
        .create({
            body: body,
            from: from,
            to: to
        })
        .then(message => {
            res.send({ success: true, messageSid: message.sid });
        })
        .catch(err => {
            res.status(500).send({ success: false, error: err.message });
        });
})

module.exports = router;
