import React, { useState, useEffect } from "react";
import styled from "styled-components";
// @ts-ignore
import window from "global/window";
// @ts-ignore
import document from "global/document";

const Layer = styled.div<ModalProps>`
  ${prop => !prop.visible && "display:none;"};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div<{ hasBgAttr: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  ${props => !props.hasBgAttr && `background-color: white;`}
`;

const Modal: React.FC<ModalProps> = ({
  children,
  layerClick,
  visible = false
}) => {
  const hasBgAttr = children.type.componentStyle.rules.some(
    (rule: string) =>
      rule.includes("background:") || rule.includes("background-color:")
  );

  const [width] = useState(document.body.style);

  useEffect(() => {
    if (visible) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.overflowY = "scroll";
      document.body.style.width = "100%";
      return;
    }

    const scrollY = document.body.style.top;
    document.body.style.position = null;
    document.body.style.top = null;
    document.body.style.width = width;
    document.body.style.overflowY = null;
    window.scrollTo(0, parseInt(scrollY, 10) * -1);
  }, [visible, width]);

  return (
    <Layer visible={visible} onClick={layerClick}>
      <Container
        as={children.type}
        {...children.props}
        onClick={e => e.stopPropagation()}
        hasBgAttr={hasBgAttr}
      />
    </Layer>
  );
};

export interface ModalProps {
  children: JSX.Element;
  layerClick?: React.MouseEventHandler<HTMLElement>;
  visible?: boolean;
}

export default Modal;
