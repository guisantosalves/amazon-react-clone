//setup data layer
//we need the context and reducer
//the context is to give the access in the component tree
//we need the reducer to do the pull and dispatch into the data layer
import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, inititalState, children}) => (
    <StateContext.Provider value={useReducer(reducer, inititalState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);