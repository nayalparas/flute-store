const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/config.env' });

app.listen(process.env.PORT, () => {
    console.log('server started');
})

app.get('/', (req, res) => {
    res.send('helo');
});