// todo-creator
const cote = require('cote');

const requester = new cote.Requester({name: 'todo creator', key: 'todo'})

setInterval(() => {
    const req = {
        type: 'create todo',
        name: 'clean the room',
        time: new Date().toLocaleTimeString(),
    };

    requester.send(req, (msg) => {
        console.log(`todo '${req.name}' was created at ${req.time}`);
    });
}, 5000);
