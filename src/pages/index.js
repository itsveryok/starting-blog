import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.file.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        Tag="header"
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "50vh" }}
      />
    </Layout>
  )
}

export default IndexPage
