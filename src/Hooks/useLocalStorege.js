import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect( () => {

        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItem;
                
                if (!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItems);
                    setItem(parsedItem);
                }
    
                setLoading(false);
    
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);

    },[]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    console.log(item);
    return {
        item, 
        saveItem, 
        loading, 
        error};

}

export { useLocalStorage };

// const defaultTodos = [
//   {
//     text: 'Cortar Cebolla',
//     completed: true
//   },
//   {
//     text: 'Curso diario de react',
//     completed: true
//   },
//   {
//     text: 'Hora de juego',
//     completed: false
//   },
//   {
//     text: 'Juegos',
//     completed: false
//   },
//   {
//     text: 'Juegos2',
//     completed: false
//   },
//   {
//     text: 'Juegos3',
//     completed: false
//   },
//   {
//     text: 'Juegos4',
//     completed: false
//   },
//   {
//     text: 'Juegos5',
//     completed: false
//   }
// ];