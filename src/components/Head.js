import React from 'react';
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = (props) => {
    const { title } = props;
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} | {data.site.siteMetadata.title} </title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    )
}

export default Head;