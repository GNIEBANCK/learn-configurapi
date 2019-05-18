import * as lowdb from 'lowdb';

const db = lowdb('db/db.json');

export default db;