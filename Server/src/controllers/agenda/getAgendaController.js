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

const getAgendaParId = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("Agenda")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: "Agenda non trouvé" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération de l'Agenda" });
  }
};

module.exports = { getAllAgendas, getAgendaParId };
