import React from 'react';


export const FrontPageJumbo = (props) => {
    return (
        <div class="jumbotron">
            <h3>{props.eventName}</h3>
            <h1>{props.tournamentName}</h1>
            <p class="lead">{props.tournamentDescription} <br />
                {props.eventDescription}
            </p>
        </div>
    );
}
