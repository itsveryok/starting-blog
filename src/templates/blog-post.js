import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout.js"
import Header from "../components/header.js"

export const data = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Header />
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Author: {data.mdx.frontmatter.author} </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default BlogPost
