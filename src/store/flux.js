export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            favorites: [],
            characters: [],
            planets: [],
            vehicle: [],
            planetid: []
        
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

            getCharacters: () => {
                fetch("https://swapi.dev/api/people/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ characters: data.results }))
            },

            getPlanets: () => {
                fetch("https://swapi.dev/api/planets/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
            },

            getPlanetid: (url) => {
                fetch(url, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ planetid: data.results }))
            },

            getVehicles: () => {
                fetch("https://swapi.dev/api/vehicles/", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ vehicle: data.results }))
            }
        },
    };
}

export default getState;