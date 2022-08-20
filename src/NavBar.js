import './NavBar.css';
import React from 'react';

export default function Nav() {

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
                <p>Please enter the percentages as stated in the syllabus</p>
            </div>

        </div>


    );
}



