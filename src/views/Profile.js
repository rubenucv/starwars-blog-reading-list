import React, { useEffect, useState, useContext} from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';


const Profile = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect (()=>{
        actions.getDetailPlanet(params.id);
        
    },[])
    return (
        <div className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="fst-italic">{store.details.name}</h1>
                <p className="lead my-3">{store.details.population}</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Fk u rob</a></p>
            </div>
        </div>
    </div>
    );
}

export default Profile;