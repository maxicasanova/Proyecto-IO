import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import ItemList from './ItemList';

function ItemListContainer() {
    const [cursosFiltrados, setCursosFiltrados] = useState([]);
    const [elementos, setElementos] = React.useState([]);

    useEffect (() => {
        console.log('item')
        const db = getFirestore();
        const elementsCollection = collection(db, 'elementos');
        getDocs(elementsCollection)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            } else {
                setElementos(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
            }
        })
        .catch((err) => console.log(err))
    },[])

    useEffect (() => {
        setCursosFiltrados(elementos.filter(e => e.visible === true));
    },[elementos]);
    
    return (
        <ItemList elementos={cursosFiltrados} />
    )
}

export default ItemListContainer