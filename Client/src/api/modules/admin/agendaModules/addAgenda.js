import adminAxios from "../../../configs/adminAxios";

const addAgenda = (nomAgenda, quotaMax, idSpecialite) => {
  return adminAxios.post("/agenda", {
    nomAgenda,
    quotaMax,
    idSpecialite,
  });
};

export default addAgenda;
