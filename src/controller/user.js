import api from "../services/api";
import history from "../services/history";

export const User = {
  id: -1,
  name: "ADMINISTRADOR",
  login: "",
  password: "",
  type: 1,
  signed: false,
  token: "",
};

export async function SingIn(data) {
  const { email, password } = data;
  try {
    const response = await api.get(`/user/authLogin/${email}/${password}`);

    User.id = response.data.id;
    User.login = response.data.login;
    User.password = response.data.password;
    User.name = response.data.name;
    User.type = response.data.type;
    User.token = response.data.token;
    User.signed = true;

    history.push("/dashboard");
  } catch (err) {
    alert("Usuário não encontrado.");
    User.id = "";
    User.login = "";
    User.password = "";
    User.name = "";
    User.type = "";
    User.signed = false;
    history.push("/");
  }
}

export async function Save(data) {
  try {
    const response = await api.post(`/user/save`, data, {
      headers: [
        { "Content-Type": "application/json" },
        { "Access-Control-Allow-Origin": "*" },
        { "Bearer ": User.token },
      ],
    });
  } catch (err) {
    alert("Usuário não registrado na base de dados.");
  }
}
