import React, { useEffect, useRef, Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";
import useOnClickOutside from "../../common/UseOnClickOutside";
const modalBackgroundPoses = {
    open: {
      background: "rgba(0, 0, 0, 0.2)",
      applyAtStart: {
        display: "block",
      },
    },
    closed: {
      background: "rgba(0, 0, 0, 0)",
      applyAtEnd: {
        display: "none",
      },
    },
  };
  const modalPoses = {
    open: {
      opacity: 1,
      transition: {
        opacity: {
          type: "tween",
          duration: 200,
        },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        opacity: {
          type: "tween",
          duration: 200,
        },
      },
    },
  };
const CalendarModalBackground = styled(posed.div(modalBackgroundPoses))``;
const Modal = styled(posed.div(modalPoses))`
  position: fixed;
  background: white;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
`;

const CalendarModal = ({ isOpen, toggle, children }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => toggle(false));

  return (
    <CalendarModalBackground
      initialPose="closed"
      pose={isOpen ? "open" : "closed"}
    >
      <Modal ref={ref}>{children}</Modal>
    </CalendarModalBackground>
  );
};
export default CalendarModal;
