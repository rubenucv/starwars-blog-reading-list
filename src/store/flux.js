export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            favorites: [],
            characters: [],
            planets: [],
            vehicle: [],
            info: {}

        },
        actions: {

            addFavorite: (newItem) => {
                const store = getStore();
                if (store.favorites.find((elemento) => elemento === newItem)) return;
                const updatedFavorites = store.favorites.concat(newItem);
                setStore({ favorites: updatedFavorites });
            },



            deleteElement: (indice) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter((favorite, i) => {
                        if (indice === i) {
                            return false
                        } else {
                            return true
                        }
                    })
                });
            },


            getInfo: (data) => {
                setStore({ info: data })
            },

            getCharacters: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ characters: data.results }))
            },

            getPeopleinfo: (peo) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/people/' + peo;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            },

            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },

            getPlanetainfo: (inf) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/planets/' + inf;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            },


            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicle: data.results }))
            },

            getVehiclesinfo: (veh) => {
                const actions = getActions();
                let url = 'https://swapi.dev/api/starships/' + veh;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getInfo(data);
                    })
            }
        },
    };
}

export default getState;