const supabase = require("../../models/supabase");

const getAllUnites = async (req, res) => {
  try {
    const { data, error } = await supabase.from("Unite").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération des Unites" });
  }
};

module.exports = getAllUnites;
