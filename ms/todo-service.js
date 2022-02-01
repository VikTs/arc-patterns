// todo-service
const cote = require('cote');

const responder = new cote.Responder({ name: 'todo API', key: 'todo' });
const publisher = new cote.Publisher({ name: 'todo publisher' });

responder.on('create todo', (req, cb) => {
    console.log(`creating new todo ${req.name}`);
    cb('OK!');

    publisher.publish('publish todo', req);
});
