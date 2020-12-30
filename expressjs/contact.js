var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var {email, message} = req.body;
    var validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    var validMessage = message.length > 30;
    if (validEmail && validMessage) {
        res.status(200).send({
            message: 'Your message has been sent!'
        });
    } else {
        var errors = [];

        if (!validEmail) {
            errors.push('E-mail is not valid!');
        }

        if (!validMessage) {
            errors.push('Message must be longer than 30 characters!');
        }

        res.status(422).send({
            errors 
        });
    }
});

module.exports = router;