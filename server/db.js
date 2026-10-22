const { DatabaseSync } = require('node:sqlite');
const { mkdirSync } = require('node:fs');
const path = require('node:path');
const dir = process.env.DATA_DIR || path.join(__dirname, '../data');
mkdirSync(dir, { recursive: true });
const db = new DatabaseSync(path.join(dir, 'academy.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'student', created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, user_id INTEGER REFERENCES users(id), expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL, price INTEGER NOT NULL CHECK(price>=0), question_count INTEGER NOT NULL, active INTEGER DEFAULT 1);
CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), product_id INTEGER REFERENCES products(id), amount INTEGER NOT NULL, status TEXT DEFAULT 'pending', created_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id,product_id));
CREATE TABLE IF NOT EXISTS attempts(id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), product_id INTEGER REFERENCES products(id), questions TEXT NOT NULL, answers TEXT, score INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
`);
if (!db.prepare('SELECT id FROM products LIMIT 1').get()) {
 const insert = db.prepare('INSERT INTO products(title,description,price,question_count) VALUES(?,?,?,?)');
 insert.run('Luyện đề nền tảng','Củng cố kiến thức với đề luyện 35 câu từ ngân hàng hiện có.',49000,35);
 insert.run('Luyện đề chuyên sâu','Luyện tập với đề 70 câu ngẫu nhiên, chấm điểm và xem lại đáp án.',99000,70);
 insert.run('Ôn tập toàn diện','Hệ thống hóa kiến thức với đề 100 câu và lưu lịch sử kết quả.',149000,100);
}
module.exports = db;
