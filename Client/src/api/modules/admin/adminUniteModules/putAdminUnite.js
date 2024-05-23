import adminAxios from "../../../configs/adminAxios";
const putAdminUnite = (id, nomComplet, email, password, idUnite) => {
  return adminAxios.put(`/adminUnite/${id}`, {
    nomComplet,
    email,
    password,
    idUnite,
  });
};

export default putAdminUnite;
