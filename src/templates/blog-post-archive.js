import React from "react"
import { graphql } from "gatsby"
import BlogPostArchive from "../components/pages/BlogPostArchive"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  return (
    <BlogPostArchive
      posts={posts}
      nextPagePath={nextPagePath}
      previousPagePath={previousPagePath}
    ></BlogPostArchive>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`
