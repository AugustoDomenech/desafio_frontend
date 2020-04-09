import React from "react";

import { Container } from "./style";
import { Form, Input } from "@rocketseat/unform";
import history from "../../services/history";

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome" />
        <Input name="bornDate" placeholder="Data nascimento" />
        <Input name="document" placeholder="Documento" />

        <hr />

        <Input name="nameMother" placeholder="Nome do mãe" />
        <Input name="nameFather" placeholder="Nome do pai" />

        <hr />

        <select>
          <option value="1">Fisica</option>
          <option value="2">Juridica</option>
        </select>

        <hr />
        <button type="submit">Salvar</button>
      </Form>

      <button onClick={() => history.push("/dashboard")}>Cancelar</button>
    </Container>
  );
}
