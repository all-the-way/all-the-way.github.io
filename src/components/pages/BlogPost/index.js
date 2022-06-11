import React from "react";
import parse from "html-react-parser";
import Layout from "../../layout";
import Content from "../../Layout/Content";
import Seo from "../../seo";
import * as styles from "./blogPost.module.css";

const BlogPost = ({ post, image }) => {
  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <Content className={styles.post}>
        <article>
          <header>
            <h1>{parse(post.title)}</h1>

            <p>{post.date}</p>
            {image?.url && <img src={image.url} alt={image.alt} />}
          </header>

          {!!post.content && <section>{parse(post.content)}</section>}
        </article>
      </Content>
    </Layout>
  );
};

export default BlogPost;
