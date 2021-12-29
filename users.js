var express = require('express');
var router = express.Router();
// { username, ip, port, outgoing challenges, incoming challenges }
var users = [{username: "fatcow", ip: "127.0.0.1"}];

module.exports = router;
router.get('/', (req, res) => res.json(users));

