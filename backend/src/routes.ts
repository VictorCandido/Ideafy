import express from 'express';
import IdeaRepository from './Repository/IdeaRepository';

const routes = express.Router();

routes.get('/ping', (req, res, next) => {
    return res.json({ pong: true });
});

routes.post('/idea/store', IdeaRepository.createIdea);
routes.get('/idea/find/:id', IdeaRepository.getIdea);
routes.get('/idea/findAll', IdeaRepository.getAll);
routes.put('/idea/update/:id', IdeaRepository.updateIdea);
routes.delete('/idea/delete/:id', IdeaRepository.deleteIdea);

export default routes;
