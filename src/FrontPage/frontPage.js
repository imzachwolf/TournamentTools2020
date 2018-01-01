import React from 'react';
import {FrontPageJumbo} from './frontPageJumbo';
import {FrontPageSubArea} from './frontPageSubArea';
import {FrontPageImage} from './frontPageImage';
import {Header} from '../header';

export const FrontPage = (props) => {
    return (
        <div className="FrontPage container body-content">
            <Header />
            <FrontPageJumbo />
            <FrontPageImage urlSrc="/Images/trophyheads.jpg" altText="trophyheads" />
            <FrontPageSubArea />
        </div>
    );
}
