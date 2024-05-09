const supabase = require("../../models/supabase");

const supprimerUnite = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from("Unite").delete().eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Unite supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Échec de la suppression de l'Unite" });
  }
};

module.exports = supprimerUnite;
