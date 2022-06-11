import React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";
import Layout from "../../layout";
import Content from "../../Layout/Content";
import Seo from "../../seo";
import * as styles from "./blogPostArchive.module.css";
import Button from "../../common/Button";

const BlogPostArchive = ({ posts, previousPagePath, nextPagePath }) => {
  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Alla inlägg" />
        <Content>
          <p>Det finns ännu inga bloggposter.</p>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title="Alla inlägg" />

      <Content>
        <h1>Våra blogginlägg</h1>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const image =
              post.featuredImage?.node?.localFile?.childImageSharp
                ?.gatsbyImageData?.images?.fallback?.src;
            return (
              <li key={post.uri}>
                <Link to={post.uri}>
                  <article className={styles.post}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <div className={styles.content}>
                      <header>
                        <h2>
                          <span>{parse(post.title)}</span>
                        </h2>
                      </header>
                      <section>{parse(post.excerpt)}</section>
                      <Button style={{ alignSelf: "center", marginTop: 30 }}>
                        Läs mer
                      </Button>
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className={styles.buttons}>
          {previousPagePath && (
            <Button light link={previousPagePath}>
              Föregående sida
            </Button>
          )}
          {nextPagePath && (
            <Button light link={nextPagePath}>
              Nästa sida
            </Button>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default BlogPostArchive;
