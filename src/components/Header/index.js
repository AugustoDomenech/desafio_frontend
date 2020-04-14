import React from "react";
import * as Controller from "../../controller/user";

import { Link } from "react-router-dom";
import { Container, Content, Profile } from "./styles";
import logo from "../../assets/saturn-purple.svg";

export default function components() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <string>{Controller.User.name}</string>
              <Link to="/profileUser">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="avatar"
            ></img>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
