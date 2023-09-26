const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
})

app.get('/', (req, res) => {
    res.send('helo');
});