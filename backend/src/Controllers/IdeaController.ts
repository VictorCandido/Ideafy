import { Types } from 'mongoose';

import { IIdea } from './../Interfaces/IIdea';
import IdeaModel from "../Models/IdeaModel"


async function _store (idea: IIdea) {
    const newIdea = await IdeaModel.create(idea);
    return newIdea;
}

async function _findOne (id: Types.ObjectId) {
    const idea = await IdeaModel.findById(id);
    return idea;
}

async function _findAll () {
    const listIdea = await IdeaModel.find();
    return listIdea;
}

async function _remove (id: Types.ObjectId) {
    const response = await IdeaModel.deleteOne({ _id: id });
    return response;
}

async function _update (idea: IIdea) {
    const updatedIdea = await IdeaModel.updateOne({ _id: idea['_id'] }, idea);
    return updatedIdea;
}

export default {
    store: _store,
    findOne: _findOne,
    findAll: _findAll,
    remove: _remove,
    update: _update
}