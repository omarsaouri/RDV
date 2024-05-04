import customAxios from "../../configs/customAxios";

const loginAdmin = async (email, password) => {
  return customAxios.post("auth/admin", {
    email: email,
    password: password,
  });
};

export default loginAdmin;
