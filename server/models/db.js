const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLengh: 30,
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLengh: 100,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TODO = mongoose.model('TODO', todoSchema);

module.exports = TODO;
