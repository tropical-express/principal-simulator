import {loadYaml}

from "./loader.js";

import {state}

from "./state.js";

import {performAction}

from "./actions.js";

function render(){

document

.getElementById("day")

.textContent=

`Day ${state.data.day}`;

document

.getElementById("stats")

.innerHTML=`

Budget:

$${state.data.stats.budget}

<br>

Reputation:

${state.data.stats.reputation}

<br>

Student Happiness:

${state.data.stats.student_happiness}

<br>

Teacher Morale:

${state.data.stats.teacher_morale}

`;

document

.getElementById("event")

.textContent=

`Today's Event:

${state.currentEvent}`;

}

function randomEvent(){

const events=

state.data.events;

state.currentEvent=

events[

Math.floor(

Math.random()

*events.length

)

];

}

function buildButtons(){

const div=

document

.getElementById("actions");

div.innerHTML="";

state.data.actions

.forEach(action=>{

const button=

document

.createElement("button");

button.textContent=

action;

button.onclick=()=>{

performAction(

state,

action

);

render();

};

div.appendChild(button);

});

}

async function start(){

state.data=

await loadYaml(

"../data/school.yaml"

);

randomEvent();

buildButtons();

render();

}

document

.getElementById("endDay")

.onclick=()=>{

state.data.day++;

randomEvent();

render();

};

start();