import types from '../actions/types';

const DEFAULT_STATE = {//all caps mean don't change this, it's a constant. It's an old school best practice thing
    currentTime: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    color: 'green',
};

const clockReducer = (state = DEFAULT_STATE, action)=>{//in case the state is null or undefined, give it a default to fall back on. This only happens when the app first runs
    // console.log('action :', action);
    switch(action.type){
        case types.UPDATE_TIME: //same as case'update_time' but you do it this way to avoid typo
            return {...state, currentTime: new Date().toLocaleTimeString(), color: randomColor()}//this is where the new timem is updated, only currenTime is udpdated
        case types.INCREASE_DATE:
        console.log('action payload :', action.payload);
            return {...state, date: new Date(new Date(state.date).getTime() + action.payload).toLocaleDateString()};
        default://if nothing matches
            return state; //return state unchanged
    }
}

function randomColor() {
    return `rgb(${randRGBNumber()}, ${randRGBNumber()}, ${randRGBNumber()})`;
}

function randRGBNumber() {
    return Math.floor(Math.random() * (255 + 1) );
}

export default clockReducer;