const express = require('express');
const router  = express.Router();

//GET
router.get('/register', (req, res)=>{
    res.render('register')
  });

// GET
router.get("/", (req, res) => {
    res.render('login')
});

// GET
router.get("/dashboard", (req, res) => {
    res.render('dashboard')
});

module.exports = router; 