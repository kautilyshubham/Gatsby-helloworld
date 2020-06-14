import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';



const index = (props) => {
  return (
    <Layout>
      <h2>Hello.</h2>
      <br /><br />
      <h3>I'm Shubham, a Web and Mobile app developer, having good knowledge in Javascript.</h3>
      <br />
      <p className="big_para">Need a developer <Link to="/contact">@Contact me</Link></p>
    </Layout>
  )
}

export default index;