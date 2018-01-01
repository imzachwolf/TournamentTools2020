import React from 'react';


export const FrontPageSub = (props) => {
    return (
        <div class="col-md-4">
            <h2>{props.title}</h2>
            <p>
               {props.description}
            </p>
            <p><a class="btn btn-default" href={props.detailPage}>{props.detailText}</a></p>
        </div>
    );
}
