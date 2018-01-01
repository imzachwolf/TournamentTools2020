import React from 'react';
import {FrontPageJumbo} from './frontPageJumbo';
import {FrontPageSubArea} from './frontPageSubArea';
import {FrontPageImage} from './frontPageImage';
import {Header} from '../header';

export const FrontPage = (props) => {
    return (
        <div className="FrontPage container body-content">
            <Header />
            <FrontPageJumbo eventName="The 300th Annual" 
                            tournamentName="KC Classic" 
                            tournamentDescription="This is a brief description of the KC Classic" 
                            eventDescription="Here is some detail about this specific tournament event" />
            <FrontPageImage urlSrc={"/resources/" + props.tournamentId + "/frontPageImage.jpg"} altText="Front Page Image" />
            <FrontPageSubArea />
        </div>
    );
}
