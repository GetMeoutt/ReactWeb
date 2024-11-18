var express = require('express');
var router = express.Router();

/* GET users listing. */
// Example API endpoint
router.get('/users', (req, res) => {
  res.json({
    users: ['Alice', 'Bob', 'Charlie']
  });
});


module.exports = router;
