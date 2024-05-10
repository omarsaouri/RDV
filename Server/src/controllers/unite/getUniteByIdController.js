const supabase = require("../../models/supabase");

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

module.exports =  getUniteParId ;
