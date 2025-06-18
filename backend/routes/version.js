var express = require('express');
var router = express.Router();

router.get('/', function (req, res, _) {
    res.json({ version: '1' })
});

module.exports = router;