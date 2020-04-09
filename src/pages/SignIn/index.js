import React from "react";
import * as ControllerUser from "../../controller/user";
import logo from "../../assets/saturn.svg";
import { Form, Input } from "@rocketseat/unform";

export default function SignIn(data) {
  function handleSubmit(data) {
    ControllerUser.SingIn(data);
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Seu login" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
