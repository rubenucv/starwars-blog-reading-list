import React, { useEffect, useState, useContext } from 'react';
import Card from '../components/Card';
import CardCharacters from '../components/CardCharacters';
import CardVehicles from '../components/CardVehicles';
import { Context } from '../store/appContext';
import './index.css';

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters();
    }, [])

    useEffect(() => {
        actions.getPlanets();
    }, [])

    useEffect(() => {
        actions.getVehicles();
    }, [])


    return (
        <>
            <h1 className="container-fluid pt-5 px-5">Characters</h1>
            <div className="card-group container-fluid scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 px-5">
                {store.characters.map((characters, index) => <CardCharacters key={index} data={characters.name} gender={characters.gender} birth_year={characters.birth_year} mass={characters.mass} height={characters.height} skin_color={characters.skin_color} hair_color={characters.hair_color} eye_color={characters.eye_color} url={characters.url} />)}
            </div>

            <h1 className="container-fluid pt-5 px-5">Planets</h1>
            <div className="card-group container-fluid scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 px-5">
                {store.planets.map((planets, index) => <Card key={index} data={planets.name} climate={planets.climate} terrain={planets.terrain} orbital_period={planets.orbital_period} population={planets.population} url={planets.url} />)}
            </div>

            <h1 className="container-fluid pt-5 px-5">Vehicles</h1>
            <div className="card-group container-fluid scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 px-5">
                {store.vehicle.map((vehicle, index) => <CardVehicles key={index} data={vehicle.name} model={vehicle.model} capacity={vehicle.cargo_capacity} class={vehicle.vehicle_class} manufacturer={vehicle.manufacturer} url={vehicle.url}/>)}
            </div>
        </>
    );
}

export default Home;