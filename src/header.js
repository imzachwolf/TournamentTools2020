import React from 'react';


export const Header = (props) => {
    return (
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">The KC Classic</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="/">Home</a> </li>
                        <li><a href="/Registration">Register</a></li>
                        <li><a href="/Cart">Cart</a></li>
                        <li><a href="/Help">API</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


