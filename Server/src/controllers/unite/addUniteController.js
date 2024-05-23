const supabase = require("../../models/supabase");

const addUnite = async (req, res) => {
  const { nomUnite, specialites } = req.body;

  try {
    // Insert the Unite with nomUnite
    const { data: uniteData, error: uniteError } = await supabase
      .from("Unite")
      .insert([{ nomUnite, estAffecter: false, specialites }])
      .select("*")
      .single();

    if (uniteError) {
      throw uniteError;
    }

    const uniteId = uniteData.id; // Get the ID of the newly inserted Unite

    res.status(201).json({
      message: "Unite ajoutée avec succès",
      uniteId,
      uniteData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Échec de l'ajout de l'Unite", details: error.message });
  }
};

module.exports = addUnite;
