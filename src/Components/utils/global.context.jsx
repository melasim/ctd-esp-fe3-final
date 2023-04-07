import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";


const ContextGlobal = createContext();

const themes = {
  dark:{
    theme: false,
    clase: 'dark'
  },
  light:{
    theme:true,
    clase: 'light'
  }
}
const initialThemeState = themes.light

const themeReducer = (state, action) => {
    switch(action.type){
        case 'SWITCH_DARK':
            return themes.dark
        case 'SWITCH_LIGHT':
            return themes.light
        default: 
            throw new Error
    }
}

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}

const initialApiState = {dentistList: [], dentistDetail: {}}

const apiReducer = (state, action) => {
    switch(action.type){
        case 'DENTIST LIST':
            return {dentistList: action.payload, dentistDetail: state.dentistDetail}
        case 'DENTIST':
            return {dentistDetail: action.payload, dentistList: state.dentistList}
        default:
            throw new Error
    }
}

const Context = ({ children }) => {
  
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [favState, favDispatch] = useReducer(favReducer, initialFavState)
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  

  useEffect(() => {   
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => apiDispatch({type: 'DENTIST LIST', payload: data}))
  }, [])

  const getDentist  = (id) => {
    let url = 'https://jsonplaceholder.typicode.com/users/' + id
    axios(url)
    .then(res => apiDispatch({type: 'DENTIST', payload: res.data}))
  }
  
  return (
    <ContextGlobal.Provider value={{apiState, apiDispatch, themeState, themeDispatch, favState, favDispatch, getDentist}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context
export const useContextGlobal = () => useContext(ContextGlobal)
