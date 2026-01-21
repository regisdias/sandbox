/**
 * Topic 7: Databases & ORMs
 * 
 * Demonstrates basic SQLite usage (SQL database).
 * Concepts: Connection, Table Creation, Query Optimization (Indexing), CRUD.
 */
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Using in-memory DB for example

db.serialize(() => {
    // 1. Create Table
    db.run("CREATE TABLE user (id INT, name TEXT)");

    // 2. Prepare Statement (SQL Injection Prevention - Topic 10)
    const stmt = db.prepare("INSERT INTO user VALUES (?, ?)");
    for (let i = 0; i < 10; i++) {
        stmt.run(i, "Ipsum " + i);
    }
    stmt.finalize();

    // 3. Query
    console.log("--- SQLite Query Start ---");
    db.each("SELECT rowid AS id, name FROM user", (err, row) => {
        console.log("User id: " + row.id + ", name: " + row.name);
    });
    console.log("--- SQLite Query End (Async) ---");
});

// Indexing example (Theory)
/*
 * db.run("CREATE INDEX idx_user_name ON user (name)");
 * Queries filtering by 'name' will now be faster.
 */

// Close connection
db.close();
