const { MongoClient } = require('mongodb');
require('dotenv').config();


const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = process.env.MONGO_URL;

let db = null;

const connection = async () => db ? 
  Promise.resolve(db) :
  MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('ebytr');
      return db;
    });

module.exports = connection;