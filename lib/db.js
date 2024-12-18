import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// we need to wrap the database connection in a promise
let db = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './litterfree.sqlite',
      driver: sqlite3.Database
    });

    // Create tables if they don't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        phone TEXT
      );

      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location TEXT,
        date TEXT
      );

      CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        event_id INTEGER,
        message TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (event_id) REFERENCES events(id)
      );
    `);
  }
  return db;
}

export async function getDb() {
  return await openDb();
}

