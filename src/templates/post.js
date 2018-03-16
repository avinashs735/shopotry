import React from 'react';
import Helmet from 'react-helmet';
import PostMeta from '../components/PostMeta';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 shrink-to-fit=no"
        />
        <title>{post.frontmatter.title} | Kalin Chernev</title>
      </Helmet>
      
      <PostMeta post={post} />
      <h1 style={{textAlign:`center`}}>{post.frontmatter.title}</h1>
      <h3 style={{textAlign:`center`}}>by . {post.frontmatter.author}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
        style={{marginLeft:`10%`,marginRight:`10%`,marginBottom:`5%`,marginTop:`2%`,fontFamily: `medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
    fontWeight: 400,
    fontStyle: `normal`,
    textRendering:`optimizeLegibility`,fontSize:`15px`}}
      />
      
    </div>
  );
};

export const query = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image
        author
      }
      html
    }
  }
`;

export default Post;
