import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const ItemList = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
