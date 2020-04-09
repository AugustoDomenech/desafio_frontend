import React from "react";

import { Container, ItemList } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <ul>
        <ItemList>
          <strong>Augusto Domenech</strong>
          <span>(61) 9 8346-6445 / augustodomenech@gmail.com</span>
        </ItemList>
        <ItemList>
          <strong>Thaina Chavarry</strong>
          <span>(61) 9 9626-7898 - (61) 3383-1661 / chavarry@gmail.com</span>
        </ItemList>
        <ItemList>
          <strong>Ana Morais</strong>
          <span>(61) 3383-4495 / morais@gmail.com</span>
        </ItemList>
      </ul>
    </Container>
  );
}
