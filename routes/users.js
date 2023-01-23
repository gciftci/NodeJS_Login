const express = require('express');
const router = express.Router();

//POST-handle
router.post("/auth/register", (req, res)  => {    
  const { email, password, password_confirm } = req.body
  pool.getConnection()
  .then(conn => {
      conn.query('SELECT email FROM user_login WHERE email = ?', [email])
      .then((succ) => {
          bcrypt.hash(password, 8, (err, hashedPassword) => {
              if(err) {
                  return res.render('register', {
                      message: "HashError: " + err,
                      type: "alert-danger"
                  })
              }
              conn.query('INSERT INTO user_login VALUES (NULL, ?, ?)', [email, hashedPassword])
              .then((succ) => {
                  return res.render('register', {
                      message: 'Account created!',
                      type: "alert-success"
                  })
              }).catch (err => {
                  return res.render('register', {
                      message: "?!: " + err,
                      type: "alert-danger"
                  })
              })
          })

      }).catch(err => {
          return res.render('register', {
              message: "E-Mail already existing!",
              type: "alert-danger"
          })
      });
  }).catch(err => {
      return res.render('register', {
          message: "4: " + err,
          type: "alert-danger"
      })
  });
});

// POST
router.post("/auth/login", (req, res)  => {    
    const {email, password} = req.body
    console.log(email, password);
    pool.getConnection()
    .then(conn => {
        conn.query('SELECT email FROM user_login WHERE email = ?', [email])
        .then((req, res) => {
            console.log('yapp: ' + req,)
            return res.render('login', {
                message: "yapp: " + req,
                type: "alert-danger"
            })
        }).catch(err => {
            console.log(email, password);
            console.log("Cant Select: " + err);
            return res.render('login', {
                message: "Cant Select: " + err,
                type: "alert-danger"
            })
        })
    }).catch(err => {
        console.log("NoConnection: " + err)
        return res.render('login', {
            message: "NoConnection: " + err,
            type: "alert-danger"
        })
    })
});

module.exports  = router;