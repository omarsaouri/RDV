const supabase = require("../../models/supabase");

const deleteAdministrateurUnite = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase
      .from("AdministrateurUnite")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Administrateur d'Unité supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de la suppression de l'Administrateur d'Unité" });
  }
};

module.exports = {deleteAdministrateurUnite};
