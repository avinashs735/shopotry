import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = new HttpLink({ uri: 'https://avi-shop-easy-shopping.myshopify.com/api/graphql',fetch: fetch });

const authMiddleware  = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-Shopify-Storefront-Access-Token': 'c5a309acd174a3624e7f50eebee41b3b'
    }
  });

  return forward(operation);
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});




// styled components
const Container = styled.div`
  margin: 4rem;
  height: 100%;
`

const InnerContainer = styled.div`
  height: 100%:
`

const TitleLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderContainer = styled.div`

`


// components
function Header () {
  return (
    <HeaderContainer>
      <TitleLink to="/">
          <h1>Shopify</h1>
      </TitleLink>
    </HeaderContainer>
  )
}


// page component
const TemplateWrapper = ({ children }) => (
  <Container >
    <Helmet
      title="Red carpet e-commerce"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header />


    <ApolloProvider client={client}>
      {children()}
    </ApolloProvider>

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper



