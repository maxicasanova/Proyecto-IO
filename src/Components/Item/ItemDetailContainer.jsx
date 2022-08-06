import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';

import AsyncCourse from './AsyncCourse';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({id}) {

    const { courseId }  = useParams();
    const location = useLocation();
    const [elemento, setElemento] = useState({});

    useEffect (() => {
        console.log('item')
        const db = getFirestore();
        const itemRef = doc(db, 'elementos', courseId || id);
        getDoc(itemRef)
        .then((res) => {
            if (res.exists()) setElemento({id: res.id, ...res.data()});
        })
        .catch((err) => console.log(err))
    },[location])

    return (
        elemento.id ==='2vd0DXEqgAcKRRFhrKz5' ?
        <AsyncCourse elemento={elemento} /> :
        <ItemDetail elemento = {elemento} />
    )
}

export default ItemDetailContainer