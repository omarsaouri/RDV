import adminAxios from "../../../configs/adminAxios";
const putAdminUnite = async (id, nomComplet, email, password, idUnite) => {
  return adminAxios.put(`/adminUnite/${id}`, {
    nomComplet,
    email,
    password,
    idUnite,
  });
};

export default putAdminUnite;
