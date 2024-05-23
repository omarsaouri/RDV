import adminAxios from "../../../configs/adminAxios";

const putAgenda = (nomAgenda, quotaMax, idSpecialite) => {
  return adminAxios.put(`/agenda/${idAgenda}`, {
    nomAgenda,
    quotaMax,
    idSpecialite,
  });
};

export default putAgenda;
