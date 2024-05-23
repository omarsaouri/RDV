const supabase = require("../../models/supabase");

const addUnite = async (req, res) => {
  const { nomUnite, specialites } = req.body;

  try {
    // Insert the Unite with nomUnite
    const { data: uniteData, error: uniteError } = await supabase
      .from("Unite")
      .insert([{ nomUnite }])
      .select("*")
      .single();

    if (uniteError) {
      throw uniteError;
    }

    const uniteId = uniteData.id; // Get the ID of the newly inserted Unite

    console.log("Inserted Unite ID:", uniteId);

    // Prepare the specialites array to insert with Unite ID
    const specialitesData = specialites.map((specialite) => ({
      nomSpecialite: specialite.nomSpecialite,
      idUnite: uniteId // Associate each specialite with the newly created Unite
    }));

    // Insert the Specialites associated with the Unite
    const { data: specialitesInsertData, error: specialitesInsertError } = await supabase
      .from("Specialite")
      .insert(specialitesData)
      .select("*");

    if (specialitesInsertError) {
      throw specialitesInsertError;
    }

    // Update the Unite record to include specialites
    const { data: updatedUniteData, error: updateUniteError } = await supabase
      .from("Unite")
      .update({ specialites: specialitesInsertData })
      .eq("id", uniteId)
      .select("*")
      .single();

    if (updateUniteError) {
      throw updateUniteError;
    }

    res.status(201).json({ message: "Unite ajoutée avec succès", uniteId, uniteData: updatedUniteData, specialitesInsertData });
  } catch (error) {
    res.status(500).json({ error: "Échec de l'ajout de l'Unite", details: error.message });
  }
};

module.exports = addUnite;
