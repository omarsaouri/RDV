import adminAxios from "../../../configs/adminAxios";

const addAdminUnite = async (nomComplet, email, password, idUnite) => {
  return adminAxios.post("/adminUnite", {
    nomComplet,
    email,
    password,
    idUnite,
  });
};

export default addAdminUnite;
