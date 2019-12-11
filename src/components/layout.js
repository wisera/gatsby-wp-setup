import React from "react"
import {graphql, StaticQuery} from 'gatsby';
import { Helmet } from "react-helmet"

import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';



import MainMenu from "./MainMenu"

import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');

body{
  font-family: 'Open Sans', sans-serif;
  margin: 0 !important;
  padding: 0 !important;
}
`

const LayoutWrapper = styled.div`
max-width: 960px;
margin: 0 auto;

`

const Layout = ({ children }) => (
  <>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <GlobalStyle />
    <MainMenu />
    <LayoutWrapper>
    <Button>PLAY</Button>
      {children}
    </LayoutWrapper>
  </>
);

export default Layout;
