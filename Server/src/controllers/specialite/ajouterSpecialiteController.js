const supabase = require("../../models/supabase");

const ajouterSpecialite = async (req, res) => {
  const { nomSpecialite, idUnite } = req.body;

  try {
    const { data, error } = await supabase
      .from("Specialite")
      .insert([{ nomSpecialite, idUnite }])
      .select("*");

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Specialite ajoutée avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de l'ajout de la Specialite" });
    console.log(error);
  }
};

module.exports = { ajouterSpecialite };
