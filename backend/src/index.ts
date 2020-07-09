import { IIdea } from './Interfaces/IIdea';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';
import IdeaController from './Controllers/IdeaController';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://integrador:root@candido-cluster-y9wuq.mongodb.net/Ideafy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => console.log('Falha ao conectar ao mongoose'))
mongoose.connection.on('open', () => console.log('Conectado ao mongoose com sucesso'))

app.use('/api', routes);

app.use((err: any, req: any, res: any, next: any) => {
    console.log('Erro', err.stack);
    res.status(500).json(err);
})

app.listen(3333);
