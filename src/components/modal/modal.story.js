import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./index";

export default { title: "Modal", component: Modal };

const Container = styled.div`
  width: 400px;
  height: 400px;
  background: yellow;
`;
const Body = styled.div`
  width: 60vw;
  height: 60vh;
`;
export const Primary = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Body>
      <button type="button" onClick={() => setVisible(true)}>
        show
      </button>
      <Modal visible={visible} layerClick={() => setVisible(false)}>
        <Container>
          <button type="button" onClick={() => setVisible(false)}>
            hide
          </button>
        </Container>
      </Modal>
    </Body>
  );
};
