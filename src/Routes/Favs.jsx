import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState} = useContextGlobal()
  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map((dentist, index) => (
            <div key={index}>
              <img src='/images/doctor.jpg' alt=''/>
                <div>
                <h4>{dentist.name}</h4>
                <h5>{dentist.username}</h5>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
