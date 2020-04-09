import React from "react";
import { Form } from "@unform/web";
import * as Controller from "../../controller/user";
import img from "../../assets/add-user.svg";

export default function SignUp() {
  return (
    <>
      {(Controller.User.type = 1 ? <img src={img} alt="logo" /> : null)}

      <Form>
        <input name="nome" type="text" placeholder="Nome" />

        <input name="email" type="email" placeholder="login" />
        <input name="password" type="password" placeholder="Senha secreta" />

        <select>
          <option value="Gerente">Gerente</option>
          <option value="Analista">Analista</option>
        </select>

        <button type="submit">Cadastrar</button>
      </Form>
    </>
  );
}
