const mongoose = require('mongoose');

const ExpressionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    emotion: {
        type: String,
        required: true
    },
    confidence: {
        type: Number,
        default: 0
    },
    blendshapeScores: {
        type: Object,
        default: {}
    },
    scannedAt: {
        type: Date,
        default: Date.now
    }
});

const expressionModule = mongoose.model('expression', ExpressionSchema);
module.exports = expressionModule;
