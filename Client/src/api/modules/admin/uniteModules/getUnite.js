import adminAxios from "../../../configs/adminAxios";

const getUnite = (id) => {
  return adminAxios.get(`/unite/${id}`);
};

export default getUnite;
