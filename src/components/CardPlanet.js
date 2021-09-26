import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';

const CardPlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPlanetainfo(params.id)
    }, [])

    return (

        <div class="col-5" style={{ width: "20rem", height: "auto" }}>
            <div className="card">
                <img src="http://placehold.it/400x300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.info.name}</h5>
                    <p className="card-text">
                        <p>Climate: {store.info.climate}</p>
                        <p>Terrain: {store.info.terrain}</p>
                        <p>Orbital Period: {store.info.orbital_period}</p>
                        <p>Population: {store.info.population}</p>
                    </p>

                    <div className="d-flex justify-content-between">
                        <Link to={"/"} className="btn btn-outline-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardPlanet;


