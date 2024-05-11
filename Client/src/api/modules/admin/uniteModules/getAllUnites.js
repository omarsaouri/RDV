import adminAxios from "../../../configs/adminAxios";

const getAllUnites = () => {
  return adminAxios.get("/unite");
};

export default getAllUnites;
