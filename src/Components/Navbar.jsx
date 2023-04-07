import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate()
  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type: 'SWITCH_LIGHT'})
    }
  }

  return (
    <nav className={themeState.clase}>
      <button onClick={() => navigate(-1)}>↩</button>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/contact'><h3>Contacto</h3></Link>
      <Link to='/favs'><h3>Favoritos</h3></Link>
      <button onClick={switchTheme}>{themeState.theme ? '🌕' : '🌞'}</button>
    </nav>
  )
}

export default Navbar