import adminAxios from "../../../configs/adminAxios";

const getAllAdminUnite = () => {
  return adminAxios.get("/adminUnite");
};

export default getAllAdminUnite;
