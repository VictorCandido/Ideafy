import { Schema, model } from 'mongoose';

const IdeaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    logo: String,
    list: []
});

export default model('IdeaRegisters', IdeaSchema);