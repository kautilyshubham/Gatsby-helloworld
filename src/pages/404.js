import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/Layout";
import Head from '../components/Head';

const NotFound = (props) => {
    return (
        <Layout>
            <Head title="Page not found" />
            <h1>Page not found</h1>
            <Link to="/">Go to home</Link>

        </Layout>
    )
}

export default NotFound;