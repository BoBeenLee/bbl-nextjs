import React, { Component, PureComponent } from "react";
import { GoOctoface as OctofaceIcon } from "react-icons/go";
import { MdContactMail as ContactMailIcon } from "react-icons/md";
import styled from "styled-components";

import { media } from "../../utils/media";
import theme from "src/constants/theme";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${theme.lineColor};
  height: 300px;
  ${media.mobile`
        height: 200px;
    `};
`;

const CopyrightBox = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  color: #999;
  font-size: 12px;
`;

const ContactBox = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 40px;
`;

const ContactItemBox = styled.a`
  color: ${theme.primary};
  padding: 0 0;
  &:hover {
    color: ${theme.secondary};
  }
`;

class Footer extends PureComponent {
  public static defaultProps = {};
  public render() {
    return (
      <Root>
        <CopyrightBox>@ 2018</CopyrightBox>
        <ContactBox>
          {/* <ContactItemBox
            href="https://bobinlee.github.io/bbl/"
            target="_blank"
          >
            <GoBookIcon size={20} />
          </ContactItemBox> */}
          <ContactItemBox href="https://github.com/BoBinLee" target="_blank">
            <OctofaceIcon size={20} />
          </ContactItemBox>
          <ContactItemBox href="mailto:globaldev@naver.com" target="_blank">
            <ContactMailIcon size={20} />
          </ContactItemBox>
        </ContactBox>
      </Root>
    );
  }
}

export default Footer;
