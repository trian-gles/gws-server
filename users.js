var express = require('express');
var router = express.Router();
// { username, ip, port, outgoing challenges, incoming challenges }
var users = [{username: "fatcow", ip: "127.0.0.1", port: 8001, isOnline: false, outChallenges: [], inChallenges:[]}];

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


router.post('/', (req, res) =>{
    var username = req.body.username;

    // first check if a user exists with this name
    for (let i = 0; i < users.length; i++){
        if (users[i].username == username){
            res.status(400);
            res.json({message: `Username ${username} is already taken`});
            return;
        }
    }

    users.push(
        {
            username: username,
            ip: req.ip,
            port: req.body.port,
            isOnline: true,
            outChallenges: [],
            inChallenges: []
        });

    res.json({message: `New user ${username} created`});
});

router.delete('/:username', (req, res) => {
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].username == req.params.username){
            users.splice(i, 1);
            res.json({message: `Successfully deleted user ${req.params.username}`});
            
            return;
        }
    }
    // if we didn't find a user with that username
    res.status(404);
    res.json({message: "Not Found"});
    
});