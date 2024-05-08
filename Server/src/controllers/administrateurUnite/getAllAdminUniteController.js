const supabase = require("../../models/supabase");

const getAllAdministrateurUnite = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("AdministrateurUnite")
      .select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de la récupération des Administrateurs d'Unité" });
  }
};

module.exports = { getAllAdministrateurUnite};
