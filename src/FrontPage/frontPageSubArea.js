import React from 'react';
import {FrontPageSub} from './frontPageSub';


export const FrontPageSubArea = (props) => {
    return (
        <div class="row">
            <FrontPageSub title="Visit Kansas City" description="KC is a fun place to visit. This is a bunch of text talking about what a fun place KC is. We could go on forever talking about KC." detailPage="/Home/KansasCity" detailText="Learn more" />
            <FrontPageSub title="Visit Kansas 1" description="KC is a fun place to visit. This is a bunch of text talking about what a fun place KC is. We could go on forever talking about KC." detailPage="/Home/KansasCity" detailText="Learn more" />
            <FrontPageSub title="Visit Kansas 2" description="KC is a fun place to visit. This is a bunch of text talking about what a fun place KC is. We could go on forever talking about KC." detailPage="/Home/KansasCity" detailText="Learn more" />
       </div>
    );
}
