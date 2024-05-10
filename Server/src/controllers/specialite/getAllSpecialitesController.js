const supabase = require("../../models/supabase");

const getAllSpecialites = async (req, res) => {
  try {
    const { data, error } = await supabase.from("Specialite").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération des Specialites" });
  }
};

module.exports = getAllSpecialites;
