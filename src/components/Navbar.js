import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const Navbar = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light d-flex mt-5 px-5">

            <Link className="navbar-brand" to="/">
                <img style={{ width: "5rem", height: "auto" }} src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="" width="30" height="24" />
            </Link>

            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                    Favorites<span class="badge bg-secondary">{store.favorites.length}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
                    {store.favorites.map((favorite, index) => {
                        return (<li className="container-fluid d-flex justify-content-evenly"><button className="dropdown-item" key={index}>{favorite}</button>
                        <i className="fas fa-trash-alt" style={{ cursor: 'pointer' }} onClick={() => {
                            actions.deleteElement(index);
                        }}></i>
                            </li>)
                    })
                    }
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;
