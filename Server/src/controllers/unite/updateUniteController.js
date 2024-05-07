const supabase = require("../../models/supabase");

const updateUnite = async (req, res) => {
  const { id } = req.params;
  const { nomUnite } = req.body;

  try {
    const { data, error } = await supabase
      .from("Unite")
      .update({ nomUnite })
      .eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Unite mise à jour avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de la mise à jour de l'Unite" });
  }
};

module.exports = updateUnite;
