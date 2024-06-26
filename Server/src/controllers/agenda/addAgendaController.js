const supabase = require("../../models/supabase");

const addAgenda = async (req, res) => {
  const { nomAgenda, quotaMax, idSpecialite } = req.body;

  try {
    const { error } = await supabase
      .from("Agenda")
      .insert([{ nomAgenda, quotaMax, idSpecialite }])
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Agenda ajouté avec succès"});
  } catch (error) {
    res.status(500).json({ error: "Échec de l'ajout de l'Agenda" });
  }
};

module.exports = addAgenda;
