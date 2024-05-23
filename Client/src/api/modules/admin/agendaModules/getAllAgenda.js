import adminAxios from "../../../configs/adminAxios";

const getAllAgenda = () => {
  return adminAxios.get("/agenda");
};

export default getAllAgenda;
