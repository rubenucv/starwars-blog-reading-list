import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams} from 'react-router-dom';

const CardVehicle = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getVehiclesinfo(params.id)
    }, [])

    return (

        <div class="col-5" style={{width:"20rem", height: "auto"}}>
            <div className="card">
                <img src="http://placehold.it/400x300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.info.name}</h5>
                    <p className="card-text">
                        <p>Model: {store.info.model}</p>
                        <p>Capacity: {store.info.capacity}</p>
                        <p>Vehicle class: {store.info.class}</p>
                        <p>Manufacturer: {store.info.manufacturer}</p>
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/"} className="btn btn-outline-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardVehicle;


