import React, { useState, useEffect } from "react";

import { Container } from "./style";
import { Form, Input, Select, Option } from "@rocketseat/unform";
import * as Controller from "../../controller/user";
import history from "../../services/history";

export default function Profile() {
  const [user, setUser] = useState({
    name: Controller.User.name,
    login: Controller.User.login,
    password: Controller.User.password,
    type: Controller.User.type,
  });

  function handleSubmit(data) {
    Controller.Save(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nome"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />
        <hr />
        <Input
          name="login"
          placeholder="Login"
          onChange={(e) => setUser({ ...user, login: e.target.value })}
          value={user.login}
        />
        <Input
          name="senha"
          type="password"
          placeholder="Senha"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <hr />
        <select
          value={user.type}
          onChange={(e) => setUser({ ...user, type: e.target.value })}
        >
          <option value="1">Administrador</option>
          <option value="2">Gerente</option>
          <option value="3">Analista</option>
        </select>
        <hr />
        <button type="submit">Salvar</button>
      </Form>

      <button onClick={() => history.push("/dashboard")}>Cancelar</button>
    </Container>
  );
}
