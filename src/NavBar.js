import './NavBar.css';
import React from 'react';

export default function Nav(props) {

    return (
        <div>
            <div class='navigation'>
                <div class="icon">
                    <img src="./icon.png" alt="" />
                </div>
                <div class="brand">
                    <h3>Grade Calculator</h3>
                </div>

            </div>
            <div class="instruction">
                <p>{props.np}</p>
                
            </div>

        </div>


    );
}



