import React from 'react';
import Topbar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

        <Topbar/>
        <ContentRowTop/>
        <Footer/>

        </div>
    );
}

export default ContentWrapper;
