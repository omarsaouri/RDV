const supabase = require("../../models/supabase");

const supprimerSpecialite = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from("Specialite").delete().eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Specialite supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Échec de la suppression de la Specialite" });
  }
};

module.exports = supprimerSpecialite;
