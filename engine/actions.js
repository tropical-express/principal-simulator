export function performAction(

state,

action

){

if(

action==="Inspect Cafeteria"

){

state.data.stats.student_happiness+=2;

}

if(

action==="Repair Facilities"

){

state.data.stats.budget-=5000;

state.data.stats.reputation+=2;

}

if(

action==="Meet Parents"

){

state.data.stats.reputation+=3;

}

}