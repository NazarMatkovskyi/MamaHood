import styled from 'styled-components';

export const FooterBlock = styled.div`
  max-width: 100%;
  margin: 0 auto;
  background: #f7f9fc;
`;

export const Box = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 160px;

  height: 490px;
  bottom: 0;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 50px;
`;

export const Column = styled.div`
  display: flex;
  margin-left: 0px;
  margin-top: 50px;

  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 180px;
`;

export const FooterLink = styled.a`
  color: #8f9bb3;
  margin-bottom: 15px;

  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #bdecf3;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  color: #2e3a59;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const FooterBlockLast = styled.div`
max-width: 100%;
margin: 0 auto;
background: #f7f9fc;
`;
export const BoxInner = styled.div`
max-width: 1440px;
margin: 0 auto;
`;
export const RowInner = styled.div`
display: flex;
 
  margin-top: -38px;
  margin-left: 150px;
  margin-bottom: 50px;
  
  
`;
export const ColumnFirst = styled.div``;
export const FooterLinkInfo = styled.div`
display: flex;
margin-top: 90px;
margin-right: 26px;
justify-content: space-between

`;
export const HeadingFirs = styled.div`
padding-left: 10px;
color: #2E3A59;
font-weight: 500;
font-size: 16px;
line-height: 140%;
`;
export const FooterLinkImg = styled.div``;
export const HeadingLast = styled.div`
 padding-left: 90px;
 display:flex;
 color: #2E3A59;
 font-size: 16px;
 font-weight: 500;
 line-height: 140%;
`;


