const supabase = require("../../models/supabase");

const ajouterUnite = async (req, res) => {
  const { nomUnite } = req.body;

  try {
    const { data, error } = await supabase.from("Unite").insert([{ nomUnite }]);

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Unite ajoutée avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de l'ajout de l'Unite" });
  }
};

module.exports = { ajouterUnite };
