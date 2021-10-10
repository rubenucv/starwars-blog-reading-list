import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardCharacters = (props) => {
    const { store, actions } = useContext(Context);
    return (

        <div class="col-5" style={{ width: "20rem", height: "auto" }}>
            <div className="card">
                <img src="http://placehold.it/400x300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data}</h5>
                    <p className="card-text">
                        <p>Gender: {props.gender}</p>
                        <p>Birth year: {props.birth_year}</p>
                        <p>Mass: {props.mass}</p>
                        <p>Height: {props.height}</p>
                        <p>Skin color: {props.skin_color}</p>
                        <p>Hair color: {props.hair_color}</p>
                        <p>Eye color: {props.eye_color}</p>
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/profile/character/${props.url.match(/\d+/g)}`} className="btn btn-outline-primary">Learn More!</Link>
                        <button onClick={() => actions.addFavorite(props.data)} type="button" className="btn btn-outline-warning"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardCharacters;