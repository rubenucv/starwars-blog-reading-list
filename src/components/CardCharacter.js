import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams} from 'react-router-dom';

const CardCharacter = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getPeopleinfo(params.id)
    }, [])

    return (

        <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="card" style={{ width: "630px", height: "auto" }}>

                <div className="row g-0">
                    <div className="col-md-8">
                        <img src="http://placehold.it/900x814" className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title">{store.info.name}</h5>
                            <p className="card-text">
                                <p>Gender: {store.info.gender}</p>
                                <p>Birth year: {store.info.birth_year}</p>
                                <p>Mass: {store.info.mass}</p>
                                <p>Height: {store.info.height}</p>
                                <p>Skin color: {store.info.skin_color}</p>
                                <p>Hair color: {store.info.hair_color}</p>
                                <p>Eye color: {store.info.eye_color}</p>
                            </p>
                            <div className="d-flex justify-content-between">
                        <Link to={"/"} className="btn btn-outline-primary">Back</Link>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCharacter;


