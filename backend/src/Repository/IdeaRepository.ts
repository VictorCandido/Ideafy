import { IIdea } from './../Interfaces/IIdea';
import IdeaController from "../Controllers/IdeaController";

async function _createIdea (req: any, res: any, next: any) {
    try {
        const { title, description, logo, list } = req.body;

        if (title) {
            const idea: IIdea = { title, description, logo, list }
    
            const newIdea = await IdeaController.store(idea);
    
            if (newIdea) {
                res.status(201).json(newIdea);
            } else {
                res.status(500).json({ message: 'Fail at create new idea.' });
            }
        } else {
            res.status(500).json({ message: 'title cannot be empty.' });
        }
    } catch (error) {
        next(error);
    }
}

async function _getIdea (req: any, res: any, next: any) {
    try {
        const { id } = req.params;

        if (id) {
            const idea = await IdeaController.findOne(id);
        
            if (idea) {
                res.status(200).json(idea);
            } else {
                res.status(500).json({ message: 'Fail at getting choosed idea.' });
            }
        } else {
            res.status(404).json({ message: 'Param id cannot be null.' });
        }
    } catch (error) {
        next(error);
    }
}

async function _getAll (req: any, res: any, next: any) {
    try {
        const listIdeas = await IdeaController.findAll();

        if (listIdeas) {
            res.status(200).json(listIdeas);
        } else {
            res.status(500).json({ message: 'Fail at getting list of ideas.' });
        }
    } catch (error) {
        next(error);
    }
}

async function _updateIdea (req: any, res: any, next: any) {
    try {
        const { title, description, logo, list } = req.body;
        const { id } = req.params;

        if (!title) {
            res.status(500).json({ message: 'title cannot be empty.' });
        } else if (!id) {
            res.status(404).json({ message: 'Param id cannot be null.' });
        } else {
            const findIdea = await IdeaController.findOne(id);

            if (!findIdea) {
                res.status(404).json({  message: 'There\'s no idea with id ' + id });
            }

            const idea: IIdea = { _id: id, title, description, logo, list };
            const updatedIdea = await IdeaController.update(idea);

            if (updatedIdea) {
                res.status(200).json(updatedIdea);
            } else {
                res.status(500).json({ message: 'Fail at updating idea.' });
            }
        }
    } catch (error) {
        next(error);
    }
}

async function _deleteIdea (req: any, res: any, next: any) {
    const { id } = req.params;

    if (id) {
        const findIdea = await IdeaController.findOne(id);

        if (!findIdea) {
            res.status(404).json({  message: 'There\'s no idea with id ' + id });
        }
        
        const deleted = await IdeaController.remove(id);
        res.status(200).json(deleted);
        
    } else {
        res.status(404).json({ message: 'Param id cannot be null.' });
    }
}

export default {
    createIdea: _createIdea,
    getIdea: _getIdea,
    getAll: _getAll,
    updateIdea: _updateIdea,
    deleteIdea: _deleteIdea
}