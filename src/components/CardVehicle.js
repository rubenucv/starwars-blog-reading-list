import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardVehicle = (props) => {
    const {store, actions} = useContext(Context);

    return (

        <div class="col-5" style={{width:"20rem", height: "auto"}}>
            <div className="card">
                <img src="http://placehold.it/400x300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data}</h5>
                    <p className="card-text">
                        <p>Model: {props.model}</p>
                        <p>Capacity: {props.capacity}</p>
                        <p>Vehicle class: {props.class}</p>
                        <p>Manufacturer: {props.manufacturer}</p>
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


