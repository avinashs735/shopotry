import React from 'react';
import Link from 'gatsby-link';
import dateFormat from 'dateformat';
import slugify from '../util/slugify';
import styles from './css/styles.module.css';

const Tag = ({ tag }) => (
  <li className={styles[`post-tag`]}>
    <Link
      title={`Click here to see all posts about ${tag.toLowerCase()}`}
      to={`/tags/${slugify(tag)}`}
    >
      #{tag}
    </Link>
  </li>
);

const PostMeta = ({ post }) => (
  <section className={styles[`post-meta`]}>
    <time className="" dateTime={post.frontmatter.date}>
     <h2 style={{marginTop:`20px`,float:`left`}}> {dateFormat(post.frontmatter.date, `fullDate`)}&nbsp;&nbsp;
       <i class="fa fa-pencil" style={{fontSize:`48px`,color:`#27B59C`}}></i></h2> 
     
    </time>
    
  </section>
);

export default PostMeta;
