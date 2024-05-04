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

const getSpecialiteParId = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("Specialite")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: "Specialite non trouvée" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération de la Specialite" });
  }
};

module.exports = { getAllSpecialites, getSpecialiteParId };
