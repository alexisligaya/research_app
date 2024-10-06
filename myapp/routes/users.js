var express = require('express');
var router = express.Router();
const db = require('../db');  // Import the database connection

/* GET users listing from the database. */
router.get('/', function(req, res, next) {
    const sql = 'SELECT * FROM users';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Database error');
            return;
        }
        res.json(results);  // Return the database results as JSON
    });
});

module.exports = router;
