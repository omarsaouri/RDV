const supabase = require("../../models/supabase");

const deleteAgenda = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from("Agenda").delete().eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Agenda supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Échec de la suppression de l'Agenda" });
  }
};

module.exports = deleteAgenda;
