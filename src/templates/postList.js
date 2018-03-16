import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styles from '../components/css/styles.module.css';

// import './blog.css'

const Post = ({ node }) => (
  // <li>
  //   <Link to={node.node.frontmatter.slug}>{node.node.frontmatter.title}</Link>
  //    <p>{node.node.frontmatter.author}</p>
     // </li>
     
         
                <li className={ styles[`post-list`]}>
                <div className={ styles.blogContainer} style={{backgroundImage: "url(" + "/redcarpetcom"+node.node.frontmatter.image + ")"}}  >
                  <div className={ styles.blogDetails}>
                      <h3><Link className="post-link" to={node.node.frontmatter.slug}>{node.node.frontmatter.title}</Link></h3>
                      <p className="post-meta">
                        <time className="date-published">
                          {node.node.frontmatter.date}
                           </time>
                           <Link to={node.node.frontmatter.author}>by • {node.node.frontmatter.author}</Link>        
                        </p>   
                    </div>
                  </div>
                  </li>
                
         
);

const BlogPagedIndex = ({ pathContext }) => {
  const { group, index, first, last } = pathContext;
  return (
    <div>
      <Helmet>
        <title>The RC Blog</title>
      </Helmet>  
      <section className="banner">
      <div className="bg-grad-header Center-Container"> <h1 className="text-center text-white">The RC BLog</h1> <p className="text-center text-white" style={{fontSize:`20px`}}>Ideas from RedCarpet about building credit,<br/>inspiring financial know-how and things that will make student life easier . 
      <i class="fa fa-paper-plane-o" style={{fontSize:`28px`,color:`#27B59C`}}></i></p>
       </div>

      <div className="container-fluid">
         <section className = {styles[`section-posts`]}> 
         <ul className="post-list list-unstyled">
     
        {group.map((node, key) => <Post key={key} node={node} />)}
            </ul>
         </section>
        </div>
      <div className={styles.nextBlog} >
        {!first && (
          <Link
            className={styles[`arrow`]} style={{textDecoration:`none`,background:`#27B59C`,color:`white`}}
            to={`/blog/${index > 2 ? index - 1 : ''}`}
          >
            <i
              style={{ position: `relative`, top: `2px`, right: `8px` }}
              className="fa fa-chevron-left"
              aria-hidden="true"
            />{' '}
            Newer posts
          </Link>
        )}
        {!last && (
          <Link className={styles[`arrow`]} to={`/blog/${index + 1}`} style={{textDecoration:`none`,background:`#27B59C`,color:`white`}}>
            Older posts{' '}
            <i
              style={{ position: `relative`, top: `1px`, left: `8px` }}
              className="fa fa-chevron-right"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
      </section>
    </div>
  );
};

export default BlogPagedIndex;
