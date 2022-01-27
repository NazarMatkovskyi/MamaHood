import React from 'react';
import logo from './Logo.png'
import btnApp from './btn-app.png';
import btnMarket from './btn-market.png';
import imgInstagram from './brand-instagram.png';
import imgFacebook from './brand-facebook.png';
import imgTwitter from './brand-twitter.png';
import imgYouTube from './brand-youtube.png';
import imgWorld from './world.png'



import {
  Box,
  RowInner,
  HeadingLast,
  FooterLinkInfo,
  Container,
  Row,
  BoxInner,
  Column,
  FooterLink,
  Heading,
  FooterBlock,
  ColumnFirst,
  HeadingFirs,
  FooterLinkImg,
  FooterBlockLast,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterBlock>
      <Box>
        <Container>
          <img width={76} height={40} src={logo} alt="logo" />

          <Row>
            <Column>
              <Heading>Project</Heading>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Tools</FooterLink>
            </Column>
            <Column>
              <Heading>Contact</Heading>
              <FooterLink href="#">movadex@gmail.com</FooterLink>
              <FooterLink href="#">verik@gmail.com</FooterLink>
            </Column>
            <Column>
              <Heading>Global</Heading>
              <FooterLink href="#">License</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Privacy Police</FooterLink>
            </Column>
            <Column>
              <Heading>Get the App</Heading>
              <FooterLink href="#">
                <img width={158} height={48} src={btnApp} alt="logo" />
              </FooterLink>
              <FooterLink href="#">
                <img width={158} height={48} src={btnMarket} alt="logo" />
              </FooterLink>
              <FooterLinkInfo>
                '
                <FooterLinkImg>
                  <img width={24} height={24} src={imgInstagram} alt="logo" />
                </FooterLinkImg>
                <FooterLinkImg>
                  <img width={24} height={24} src={imgFacebook} alt="logo" />
                </FooterLinkImg>
                <FooterLinkImg>
                  <img width={24} height={24} src={imgTwitter} alt="logo" />
                </FooterLinkImg>
                <FooterLinkImg>
                  <img width={24} height={24} src={imgYouTube} alt="logo" />
                </FooterLinkImg>
              </FooterLinkInfo>
            </Column>
          </Row>
        </Container>
      </Box>
      {/* Кінець footer */}
      <>
        <FooterBlockLast>
          <BoxInner>
            <Container>
              <RowInner>
                <ColumnFirst>
                  <HeadingFirs>© 2021 MamaHood. All rights reserved</HeadingFirs>
                </ColumnFirst>
                <ColumnFirst>
                  <HeadingLast>
                    <img width={24} height={24} src={imgWorld} alt="logo" />
                    English
                  </HeadingLast>
                </ColumnFirst>
              </RowInner>
            </Container>
          </BoxInner>
        </FooterBlockLast>
      </>
    </FooterBlock>
  );
};
export default Footer;
