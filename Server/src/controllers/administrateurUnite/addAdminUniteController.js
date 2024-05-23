const supabase = require("../../models/supabase");
const { hashPassword } = require("../../helpers/hash");

const addAdministrateurUnite = async (req, res) => {
  const { nomComplet, email, password, idUnite } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const { error: insertError } = await supabase
      .from("AdministrateurUnite")
      .insert([{ nomComplet, email, password: hashedPassword, idUnite }])
      .single();

    if (insertError) {
      throw insertError;
    }

    const { data, error: updateAffectedError } = await supabase
      .from("Unite")
      .update({ estAffecter: true })
      .eq("id", idUnite);

    res.status(201).json({
      message: "Administrateur d'Unité ajouté avec succès",
    });
  } catch (updateAffectedError) {
    console.error("Error adding Administrateur d'Unité:", updateAffectedError);
    res.status(500).json({
      error: "Échec de l'ajout de l'Administrateur d'Unité",
    });
  }
};

module.exports = addAdministrateurUnite;
