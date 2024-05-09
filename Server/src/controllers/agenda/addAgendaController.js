const supabase = require("../../models/supabase");

const ajouterAgenda = async (req, res) => {
  const { nomAgenda, quotaMax, idSpecialite } = req.body;

  try {
    const { data, error } = await supabase
      .from("Agenda")
      .insert([{ nomAgenda, quotaMax, idSpecialite }]);

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Agenda ajouté avec succès", data });
  } catch (error) {
    res.status(500).json({ error: "Échec de l'ajout de l'Agenda" });
  }
};

module.exports = ajouterAgenda;
