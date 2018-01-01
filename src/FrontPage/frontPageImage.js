import React from 'react';


export const FrontPageImage = (props) => {
    return (
        <div class="col-md-12">
            <img src={props.urlSrc} alt={props.altText} class="img-responsive center-block" />
        </div>
    );
}
