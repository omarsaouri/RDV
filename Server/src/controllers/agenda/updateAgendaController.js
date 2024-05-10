const supabase = require("../../models/supabase");

const updateAgenda = async (req, res) => {
  const { id } = req.params;
  const { nomAgenda, quotaMax, idSpecialite } = req.body;

  try {
    const { data, error } = await supabase
      .from("Agenda")
      .update({ nomAgenda, quotaMax, idSpecialite })
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    res.json({ message: "Agenda mis à jour avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de la mise à jour de l'Agenda" });
  }
};

module.exports = updateAgenda;
