/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/LZH-logo.png/" }) {
        childImageSharp {
          fixed(quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  // const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {/* {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            marginTop: "-15px",
            objectFit: "contain",
          }}
        />
      )} */}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong>
          <br></br>
          <q> {author?.summary || null}</q>
          {` `}
          <br></br>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            If you have questions or want to tell me I screwed up let me know on
            Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
