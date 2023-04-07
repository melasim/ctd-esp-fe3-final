import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id} = useParams()
  const {favDispatch, apiState, apiDispatch, getDentist} = useContextGlobal()

  useEffect(() => {
    getDentist(id)
}, [id])

  const addFav = (e) => {
    e.preventDefault()
    const storedData = JSON.parse(localStorage.getItem('favs')) || []
    if(storedData.some(item => item.id === apiState.dentistDetail.id)){
      alert('ya existe este dentista en favoritos')
    }else{
      favDispatch({type: 'ADD_FAV', payload: apiState.dentistDetail})
    }
  }
  

  return (
    <div >
      <h1>Detail Dentist</h1>
      <div className='card-detail'>
        <div>  
          <img src='/images/doctor.jpg' alt=''/>
        </div>
        <div>
          <h2>{apiState.dentistDetail.name}</h2>
          <h3>{apiState.dentistDetail.email}</h3>
          <h3>{apiState.dentistDetail.phone}</h3>
          <h3>{apiState.dentistDetail.website}</h3>
          <button onClick={addFav}>⭐</button>
        </div>
      </div>
    </div>
  )
}

export default Detail