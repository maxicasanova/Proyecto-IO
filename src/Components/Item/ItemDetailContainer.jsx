import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useLocation, useParams } from 'react-router-dom';

import AsyncCourse from '../Courses/AsyncCourse';
import ItalianoA1Int from '../Courses/ItalianoA1Int';
import textosCursos from '../../utils/textosCursos.js'

function ItemDetailContainer({id}) {

    const { courseId }  = useParams();
    const location = useLocation();
    const [elemento, setElemento] = useState({});
    const [textos, setTextos] = useState({});

    useEffect(() => {
        setTextos(textosCursos.find(c => c.id === courseId))
        console.log(textos)
    },[])

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
        <ItalianoA1Int elemento={elemento} textos={textos} />
    )
}

export default ItemDetailContainer