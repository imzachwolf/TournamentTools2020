import React from 'react';
import {FrontPageSub} from './frontPageSub';


export const FrontPageSubArea = (props) => {
    return (
        <div class="row">
            <FrontPageSub title="Visit Kansas City" description="KC is a fun place to visit. This is a bunch of text talking about what a fun place KC is. We could go on forever talking about KC." detailPage="/Home/KansasCity" detailText="Learn more" />
            <FrontPageSub title="Your Hosts" description="Masters Oren and Terry Gautreax host The KC Classic with the assistance of great referees, coaches and athletes from all over the Midwest." detailPage="/Home/Hosts" detailText="Learn more" />
            <FrontPageSub title="The ACTS Series" description="The KC Classic is part of this thing called the ACTS Series. It is a few schools that recognize top performers at a series of tournaments." detailPage="/Home/ACTS" detailText="Learn more" />
       </div>
    );
}

