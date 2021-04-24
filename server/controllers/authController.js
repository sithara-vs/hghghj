const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");

    try {
      let [existingUser] = await db.auth.check_for_user({ email });

      if (existingUser) {
        res.status(400).send("Email already exists.");
        return;
      }

      const salt = bcrypt.genSaltSync(5);
      const hash = bcrypt.hashSync(password, salt);

      let [newUser] = await db.auth.register_user({ email, hash });

      if (newUser) {
        delete newUser.hash;
        req.session.user = { ...newUser };
        res.status(201).send(newUser);
        return;
      }
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    res.sendStatus(500);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");

    try {
      let [existingUser] = await db.auth.check_for_user({ email });

      if (!existingUser) {
        res.status(400).send("User does not exist");
        return;
      }

      const authenticated = bcrypt.compareSync(password, existingUser.hash);

      if (authenticated) {
        delete existingUser.hash;
        req.session.user = { ...existingUser };
        res.status(200).send(req.session.user);
        return;
      }

      res.status(400).send("Incorrect email or password");
      return;
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  logout: async (req, res) => {
    if (req.session.user) {
      req.session.destroy();
    }
    res.sendStatus(200);
  },
  delete: async (req, res) => {
    const { password } = req.body;
    const db = req.app.get("db");
    if (req.session.user) {
      const { email, user_id } = req.session.user;

      try {
        let [existingUser] = await db.auth.check_for_user({ email });

        if (!existingUser) {
          res.status(404).send("Account not found");
          return;
        }

        const authenticated = bcrypt.compareSync(password, existingUser.hash);

        if (authenticated) {
          await db.auth.delete_user({ user_id });
          res.sendStatus(200);
        }

        res.status(400).send("Incorrect password.");
        return;
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
    }

    res
      .status(400)
      .send("You must be logged in to delete an account. Please log in.");
  },

  reset_password: async (req, res) => {
    const { password } = req.body;
    const db = req.app.get("db");
    if (req.session.user) {
      const { email, user_id } = req.session.user;

      // try {
      //     let [ existingUser ] = await db.auth.check_for_user({ email });

      //     if (!existingUser) {
      //         res.status(404).send('Account not found');
      //         return;
      //     }

      // const authenticated = bcrypt.compareSync(password, existingUser.hash);

      const salt = bcrypt.genSaltSync(5);
      const hash = bcrypt.hashSync(password, salt);

      await db.auth.reset_password({ user_id , hash});
     
      return res.sendStatus(200);

      // } catch(err) {
      //     console.log(err);
      //     res.sendStatus(500);
      // }
    }
    return res.sendStatus(401);
  },
};
