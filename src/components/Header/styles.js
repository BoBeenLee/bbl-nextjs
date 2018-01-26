import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";
import "./headroom.css";

const HeaderBox = ({ children, isOpenHeader, ...props }) => {
  const styles = Object.assign({}, { backgroundColor: "#b2b2b2" });
  return (
    <Headroom
      className={isOpenHeader && "headroom-transform-none"}
      style={styles}
      {...props}
    >
      {children}
    </Headroom>
  );
};

export { HeaderBox };
