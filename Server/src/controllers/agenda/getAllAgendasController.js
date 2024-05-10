const supabase = require("../../models/supabase");

const getAllAgendas = async (req, res) => {
  try {
    const { data, error } = await supabase.from("Agenda").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération des Agendas" });
  }
};

module.exports = getAllAgendas;
