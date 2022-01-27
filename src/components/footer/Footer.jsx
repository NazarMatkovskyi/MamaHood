import React from 'react';

import { Box,RowInner,HeadingLast,FooterLinkInfo, Container, Row,BoxInner, Column, FooterLink, Heading,FooterBlock,ColumnFirst,HeadingFirs,FooterLinkImg,FooterBlockLast } from './FooterStyles';

const Footer = () => {
  return (
     <FooterBlock>
    <Box>
      <Container>
        
          <img width={76} height={40} src="/img/Logo.png" alt="logo" />
      
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
            <FooterLink href="#"><img width={158} height={48} src="/img/btn-app.png" alt="logo" /></FooterLink>
            <FooterLink href="#"><img width={158} height={48} src="/img/btn-market.png" alt="logo" /></FooterLink>
            <FooterLinkInfo>'
            <FooterLinkImg><img width={24} height={24} src="/img/brand-instagram.png" alt="logo" /></FooterLinkImg>
            <FooterLinkImg><img width={24} height={24} src="/img/brand-facebook.png" alt="logo" /></FooterLinkImg>
            <FooterLinkImg><img width={24} height={24} src="/img/brand-twitter.png" alt="logo" /></FooterLinkImg>
            <FooterLinkImg><img width={24} height={24} src="/img/brand-youtube.png" alt="logo" /></FooterLinkImg>
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
          <img width={24} height={24} src="/img/world.png" alt="logo" />
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
