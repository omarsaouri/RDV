const { comparePassword } = require("../../helpers/hash");
const supabase = require("../../models/supabase");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: foundAdmin, error } = await supabase
      .from("Administrateur")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      throw error;
    }

    if (!foundAdmin) {
      return res.status(400).json("Wrong email");
    }

    const match = await comparePassword(password, foundAdmin.password);
    if (!match) {
      return res.status(400).json("Wrong password");
    }

    const adminPayload = {
      id: foundAdmin.email,
    };
    const access_token = jwt.sign(adminPayload, process.env.JWT_SECRET);

    res.status(200).json({ admin: foundAdmin, access_token: access_token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = loginAdmin;
