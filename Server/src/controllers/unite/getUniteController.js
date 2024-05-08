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

const getUniteParId = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("Unite")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: "Unite non trouvée" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Échec de la récupération de l'Unite" });
  }
};

module.exports = { getAllUnites, getUniteParId };
