import adminAxios from "../../../configs/adminAxios";

const getSpecialite = (id) => {
  return adminAxios.get(`/specialite/${id}`);
};

export default getSpecialite;
