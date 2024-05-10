const supabase = require("../../models/supabase");
const { hashPassword } = require("../../helpers/hash");

const updateAdministrateurUnite = async (req, res) => {
  const { id } = req.params;
  const { nomComplet, email, password, idUnite } = req.body;

  try {
    let hashedPassword = password;
    if (password) {
      hashedPassword = await hashPassword(password);
    }

    const { data, error } = await supabase
      .from("AdministrateurUnite")
      .update({ nomComplet, email, password: hashedPassword, idUnite })
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    res.json({
      message: "Administrateur d'Unité mis à jour avec succès",
      data,
    });
  } catch (error) {
    console.error("Error updating Administrateur d'Unité:", error.message);
    res.status(500).json({
      error: "Échec de la mise à jour de l'Administrateur d'Unité",
    });
  }
};

module.exports = updateAdministrateurUnite;
