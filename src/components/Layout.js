import React from 'react';
import "../../styles/main.scss";
import Header from './Header';
import { graphql, useStaticQuery } from "gatsby";

const Layout = (props) => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata{
                    title,
                    author
                }
            }
        }
    `)

    const { title, author } = data.site.siteMetadata;

    return (
        <div className="container">
            <h1 className="main_heading">{title}</h1>
            <Header />
            <div className="content_box">
                {props.children}
            </div>
            <footer>
                <p>Proposed and created by {author} &copy; 2020</p>
            </footer>
        </div>
    )
}


export default Layout;