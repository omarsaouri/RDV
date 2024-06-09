import adminAxios from "../../../configs/adminAxios";

const deleteAgenda = (agendaId) => {
  return adminAxios.delete(`/agenda/${agendaId}`);
};

export default deleteAgenda;
