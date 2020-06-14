import React from 'react';
import Layout from '../components/Layout';
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from '../components/Head';

// export const query = graphql`
//  query($slug: String!){
//     markdownRemark (fields:{slug:{eq: $slug}}){
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
query($slug: String!){
  contentfulBlog(slug: {eq: $slug}){
    title
    date(formatString: "MMMM Do, YYYY")
    body{
      json
    }
  }
}`


const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img src={url} alt={alt} style={{ maxWidth: '100%' }} />
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlog.title} />

      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.date}</p>

      {documentToReactComponents(props.data.contentfulBlog.body.json, options)}
    </Layout>
  )
}

export default Blog;