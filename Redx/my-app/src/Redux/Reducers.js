import { useState } from "react";

const intialState = {count : 0, name : 'Devesh'}


const CounterReducer = (state = intialState, action) =>{
        switch(action.type){
            case "Increment":
                return {...state , count : state.count + 1}
            case "Decrement":
                return {...state , count : state.count - 1}
                default:
                return state;
        }
}

const NameReducer = (state = intialState, action) =>{
        switch(action.type){
            case "ChangeName":
                return {...state , name : state.name == 'Devesh' ? 'Devya' : 'Devesh'}
            default:
                return state;
        }
}

export {CounterReducer, NameReducer}

