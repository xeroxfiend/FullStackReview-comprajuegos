const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const {name, email, password} = req.body;
    //check if user has already registered

    const user = await db.find_email(email);

    if (user[0]) {
      return res.status(200).send("Email already in use");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userId = await db.add_user({name, email});
    db.add_hash({userId: userId[0].user_id, hash}).catch(err => res.sendStatus(503));

    req.session.user = {email, name, userId: userId[0].user_id, isAdmin: false}

    res.status(201).send({message: 'Logged in', user: req.session.user, loggedIn: true})
  }

  // login: async ()
};
