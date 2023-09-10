const express = require('express');
const router = express.Router();
const packageInfo = require('../../../package.json');

// Route to display application info from package.json
router.get('/', (req, res) => {
    res.json({
        name: packageInfo.name,
        version: packageInfo.version,
        description: packageInfo.description,
        author: packageInfo.author
    });
});

module.exports = router;
