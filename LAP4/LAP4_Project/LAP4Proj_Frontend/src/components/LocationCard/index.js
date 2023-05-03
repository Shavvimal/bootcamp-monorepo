import React, { useEffect, useRef } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiHiking, mdiFoodForkDrink, mdiGlassCocktail } from '@mdi/js'


const LocationCard = ({ name, id, iconClass, border }) => {
  return (

    <div className='rounded-3xl border p-5 my-5 h-auto cardhover' style={{ borderColor: `${border}` }}>
      <div className='flex flex-col justify-between'>
        <Link to={`/pins/${id}`}><h1 className="text-xl mb-4">{name}</h1></Link>
        <p className='hidden'>{id}{iconClass}</p>
        <Icon path={iconClass}
          title="Profile"
          size={2}
          className="mx-auto"
          color={border}
        />
      </div>
    </div>

  );
};

export default LocationCard;
