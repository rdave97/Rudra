import React from 'react';

import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <div class="column">
        <h3>Navigation</h3>
    
                              <li><a href="home.html">Home</a></li>
                              <li><a href="aboutme.html">About Me</a></li>
                              <li><a href="contactme.html">Contact Me</a></li>
                            
                        


        </div>
        <h2>The XMLHttpRequest Date</h2>

<button type="button" onclick="loadDoc()">Request data</button>

<p id="demo"></p>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </div>
  );
}

export default Nav;
