import express from 'express';
import cors from 'cors';
import responseTime from 'response-time';
import config from './config';
import routers from './routes/index';

const app = express();
const port = config.server_port;


app.use(express.json());
app.use(cors());
app.use(responseTime());

app.use('/api', routers);

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': "Server is working!!" });
})


app.listen(port, () => console.log(`app listening on port ${port}!`));