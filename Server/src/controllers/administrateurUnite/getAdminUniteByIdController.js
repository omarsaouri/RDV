const supabase = require("../../models/supabase");

const getAdministrateurUniteById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("AdministrateurUnite")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res
        .status(404)
        .json({ error: "Administrateur d'Unité non trouvé" });
    }

    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de la récupération de l'Administrateur d'Unité" });
  }
};

module.exports = getAdministrateurUniteById;
