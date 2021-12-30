var express = require('express');
var router = express.Router();
// { username, ip, port, outgoing challenges, incoming challenges }
var users = [{username: "fatcow", ip: "127.0.0.1", port: 8001, outChallenges: [], inChallenges:[]}];

module.exports = router;
router.get('/', (req, res) => res.json(users));
router.get('/:username', (req, res) => {
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].username == req.params.username){
            res.json(users[i]);
        }
    }
    // if we didn't find a user with that username
    res.status(404);
    res.json({message: "Not Found"});
    
});
