import React, { Component, PureComponent } from "react";
import styled from "styled-components";
import OctofaceIcon from "react-icons/lib/go/octoface";
import ContactMailIcon from "react-icons/lib/md/contact-mail";

import { media } from "../../utils/StyleUtils";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${props => props.theme.lineColor};
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
  color: ${props => props.theme.primary};
  padding: 0 0;
  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

class Footer extends PureComponent {
  static defaultProps = {};
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
