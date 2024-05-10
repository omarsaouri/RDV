const supabase = require("../../models/supabase");
const { hashPassword } = require("../../helpers/hash");

const addAdministrateurUnite = async (req, res) => {
  const { nomComplet, email, password, idUnite } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const { error } = await supabase
      .from("AdministrateurUnite")
      .insert([{ nomComplet, email, password: hashedPassword, idUnite }])
      .single();

    if (error) {
      throw error;
    }

    res.status(201).json({
      message: "Administrateur d'Unité ajouté avec succès",
    });
  } catch (error) {
    console.error("Error adding Administrateur d'Unité:", error.message);
    res.status(500).json({
      error: "Échec de l'ajout de l'Administrateur d'Unité",
    });
  }
};

module.exports = addAdministrateurUnite;
