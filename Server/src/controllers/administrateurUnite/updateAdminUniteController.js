const supabase = require("../../models/supabase");

const updateAdministrateurUnite = async (req, res) => {
  const { id } = req.params;
  const { nomComplet, email, password, idUnite } = req.body;

  try {
    const { data, error } = await supabase
      .from("AdministrateurUnite")
      .update({ nomComplet, email, password, idUnite })
      .eq("id", id);

    if (error) {
      throw error;
    }

    res.json({
      message: "Administrateur d'Unité mis à jour avec succès",
      data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de la mise à jour de l'Administrateur d'Unité" });
  }
};

module.exports = updateAdministrateurUnite;
