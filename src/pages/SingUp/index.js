import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import * as Controller from "../../controller/user";
import img from "../../assets/add-user.svg";

export default function SignUp() {
  const [user, setUser] = useState([
    {
      name: Controller.User.name,
      login: Controller.User.login,
      password: Controller.User.password,
      type: 1,
    },
  ]);

  useEffect(() => {}, []);

  return (
    <>
      {(Controller.User.type = 1 ? <img src={img} alt="logo" /> : null)}

      <Form>
        <input name="nome" type="text" placeholder="Nome" value={user.name} />

        <input
          name="email"
          type="email"
          placeholder="login"
          value={user.login}
        />
        <input
          name="password"
          type="password"
          placeholder="Senha secreta"
          value={user.password}
        />

        <select>
          <option value="Gerente">Gerente</option>
          <option value="Analista">Analista</option>
        </select>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
}
