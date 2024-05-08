const supabase = require("../../models/supabase");

const modifierSpecialite = async (req, res) => {
  const { id } = req.params;
  const { nomSpecialite, idUnite } = req.body;

  try {
    const { data, error } = await supabase
      .from("Specialite")
      .update({ nomSpecialite, idUnite })
      .eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Specialite mise à jour avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de la mise à jour de la Specialite" });
  }
};

module.exports = { modifierSpecialite };
