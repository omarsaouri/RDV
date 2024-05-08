const supabase = require("../../models/supabase");

const addAdministrateurUnite = async (req, res) => {
  const { nomComplet, email, password, idUnite } = req.body;

  try {
    const { data, error } = await supabase
      .from("AdministrateurUnite")
      .insert([{ nomComplet, email, password, idUnite }])
      .select("*");

    if (error) {
      throw error;
    }

    res
      .status(201)
      .json({ message: "Administrateur d'Unité ajouté avec succès", data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de l'ajout de l'Administrateur d'Unité" });
  }
};

module.exports = {addAdministrateurUnite};
