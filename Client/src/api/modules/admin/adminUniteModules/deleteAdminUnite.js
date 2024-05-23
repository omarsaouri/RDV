import adminAxios from "../../../configs/adminAxios";
const deleteAdminUnite = (id) => {
  return adminAxios.delete(`/adminUnite/${id}`);
};

export default deleteAdminUnite;
