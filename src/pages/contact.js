import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';


const Contact = (props) => {
    return (
        <Layout>
            <Head title="Contact us" />
            <h2>Contact</h2>
            <p className="big_para">The best way to contact me for any future development project <a href="mailto: awebxpert@gmail.com">Mail Me</a> or <a href="tel: 
            +91 9111112293">Call me</a></p>
        </Layout>
    )
}

export default Contact;