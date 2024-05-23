import adminAxios from "../../../configs/adminAxios";

const getAllSpecialite = () => {
  return adminAxios.get("/specialite");
};

export default getAllSpecialite;
