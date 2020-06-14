import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from "gatsby";
import Head from '../components/Head';

const Blog = (props) => {
  // file data
  // ********************
  // const data = useStaticQuery(graphql`
  //   query{
  //       allMarkdownRemark{
  //       edges{
  //         node{
  //           frontmatter{
  //             title,
  //             date
  //           }
  //           timeToRead
  //           fields{
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `)

  // contentful data
  // ********************
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlog (
      sort:{
        fields: date,
        order: ASC
      }
    ){
      edges{
        node{
          title
          slug
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }`)

  console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <h2>Blogs</h2>
      {
        data.allContentfulBlog.edges.map(item => {
          return (
            <div className="blog_list">
              <h2><Link to={`blog/${item.node.slug}`}>{item.node.title}</Link></h2><br />
              <p>{item.node.date} | </p>

            </div>
          )
        })
      }
    </Layout>
  )
}

export default Blog;