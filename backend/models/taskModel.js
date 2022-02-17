const connection = require('./connection')
const { ObjectID } = require("mongodb");

const getAll = () => connection().then(db => db.collection('tasks').find({}).toArray());

const statusAlter = (id,status) => connection().then(db => db.collection('tasks')
  .updateOne(
    { _id: ObjectID(id) },
    { status },
));

const getById = (id) => connection().then(db => db.collection('tasks')
.findOne({ _id: ObjectID(id) }));

module.exports = { 
  getAll,
  statusAlter,
  getById
}