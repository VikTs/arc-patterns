// todo-publisher
const cote = require('cote');

const subscriber = new cote.Subscriber({ name: 'todo subscriber' });

subscriber.on('publish todo', (data) => {
    console.log(`publish todo ${data.name}`);
});
