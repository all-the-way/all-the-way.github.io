import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../components/pages/BlogPost"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const image = {
    url:
      post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
        ?.images?.fallback?.src,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return <BlogPost image={image} post={post}></BlogPost>
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "YYYY-MM-DD")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
