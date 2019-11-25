
import React from 'react';

import './Main.css';
import rud from './rud.jpg';
import rud2 from './rud2.jpg';
import rud3jpg from './rud3jpg.jpg';


function Main() {
  return (
    <div className="Main">
<div>
    <h1>Anxiety</h1>
    <a href="http://thinksimplenow.com/calmness/overcoming-social-anxiety/">open</a>
    <p>Date:11/18/2015</p>
    <p>
        Summary:</p>
        <div class ="card">
    <img src={rud} alt="rud"/>
    <div class ="container">
        <p>The episode was laughed off by those in attendance, put down to my shyness and my youth. But as I grew older, with hair growing where it once didn’t and muscles starting to show up, inside I was still this shy, scared boy of nine.</p>
        </div>
    </div>
     </div>
     <div>
     <h1>Failures</h1>
    <a href="http://thinksimplenow.com/motivation/success-after-failure/">open</a>
    <p>Date:10/15/2015</p>
    <p>
        Summary:</p>
        <div class ="card">
    <img src={rud2} alt="rud2"/>
    <div class ="container">
        <p>Pretty much every famous person you know of has failed at some point in their career.


            So check your expectations. Unmet expectations can actually cause us distress (they affect the chemicals in our brain).</p>        </div>
    </div>
     </div>
     <h1>Negative Emotions</h1>
    <a href="http://thinksimplenow.com/happiness/negative-emotions/">open</a>
    <p>Date:02/21/2012</p>
    <p>
        Summary:</p>
        <div class ="card">
    <img src={rud3jpg} alt="rud3jpg"/>
    <div class ="container">
        <p>
        All emotions are pure which gather you and lift you up; that emotion is impure which seizes only one side of your being and so distorts you.
        </p>
    </div>
</div>
     </div>

    

  );
}

export default Main;