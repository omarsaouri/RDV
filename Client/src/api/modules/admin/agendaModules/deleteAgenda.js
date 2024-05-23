import adminAxios from "../../../configs/adminAxios";

const deleteAgenda = () => {
  return adminAxios.delete(`/agenda/${idAgenda}`);
};

export default deleteAgenda;
