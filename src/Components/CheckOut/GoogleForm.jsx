import {
    Box,
    Container,
    Typography
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

import { OrderContext } from '../Context/OrderContextProvider';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function GoogleForm() {
    const {orders} = useContext(OrderContext);
    const {clearOrders} = useContext(OrderContext);

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [comision, setComision] = useState('');
    const [pais, setPais] = useState('');

    const [nombreError, setNombreError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [telefonoError, setTelefonoError] = useState(false);
    const [descripcionError, setDescripcionError] = useState(false);
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const grabacion = () => {

        const pedido = {
            fechaPedido:orders.date, 
            curso:orders.nombre,
            lugarDePedido: orders.location.pathname, 
            precio:orders.precio,
            precioEuros: orders.precioEuros,
            nombreAlumno:nombre, 
            mailAlumno:mail, 
            fechaNac:fecha._d || 'no ingreso fecha',
            telefono: telefono || 'sin numero',
            mensaje, 
            comision: comision || 'sin comision'
        }

        console.log(pedido);

        const templateParams = {
            course_name: pedido.curso,
            to_name: pedido.nombreAlumno,
            mensaje: pedido.mensaje,
            to_mail: pedido.mailAlumno,
            precio: pedido.precio,
            precioEuros: pedido.precioEuros
        }

        const enviarEmail = async () => {
            if (pedido.curso === 'Ciudadania' || pedido.curso === 'Traducciones'){
                const template = {
                    course_name: pedido.curso,
                    to_name: pedido.nombreAlumno,
                    mensaje: pedido.mensaje,
                    to_mail: pedido.mailAlumno
                }
                await emailjs.send("service_x0460fk","template_odt99n8", template,'VlskrU6LYSJ-DIHkI');
            } else {
                await emailjs.send('service_x0460fk', 'template_1rifi3e', templateParams,'VlskrU6LYSJ-DIHkI');
            }
        }

        const db = getFirestore();
        const newOrderRef = doc(collection(db, "orders"));
        setDoc(newOrderRef, pedido)
            .then(() => {
                enviarEmail();
                clearOrders();
                navigate('/confirmation')
            })
            .catch((err) => {
                console.log(err);
                navigate('/order/problems')
            })
    };

    const comprobacion = () => {
        if (nombre.length > 0) {
            nombre.length<3 && setNombreError(true);
        }
        if(mail.length > 0){
            !mail.match(mailformat) && setMailError(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombreError && !mailError && nombre.length > 0 && mail.length > 0 && !descripcionError){
            grabacion();
        }
    }

    const handleChange = (event) => {
        setComision(event.target.value);
    };

    const handleCountryChange = (event) => {
        setPais(event.target.value);
    };

    useEffect (() => {
        window.scrollTo(0, 0);
        setDescripcionError(false);
        setNombreError(false);
        setMailError(false);
        setTelefonoError(false);
        comprobacion();
    },[nombre, mail, mensaje])

    console.log(orders.nombre)
    
    return (
        <Container 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            {(orders?.nombre === 'Ciudadania' || orders?.nombre === 'Traducciones') ? 
            <Typography component='h1' variant='h4' sx={{paddingTop:'30px', paddingBottom:'30px'}}>
                    Por favor, rellená este formulario de contacto.
            </Typography>
            :
            <Box>
                <Typography component='h1' variant='h4' sx={{paddingTop:'30px', paddingBottom:'30px'}}>
                    Por favor, para inscribirte rellená este formulario.
                </Typography>
                <Typography>
                    Cuando hayamos recibido tu solicitud, te enviaremos un mail de confirmación con la información de pago para completar tu inscripción. 
                </Typography>
                <Typography>
                    Seguí los pasos que te indicaremos por mail ¡y listo! :)
                </Typography>
            </Box>
            }
            {orders ? (
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmnsVB3CQP0nMekjKzBgitgR7u9-Nx5Q_8085UJQkibWuAbQ/viewform?embedded=true" width="95%" frameborder="0" marginheight="0" marginwidth="0" style={{overflow:'visible', height:'2200px'}}>Cargando…</iframe>
            ) : (
                <Typography component='p' sx={{minHeight:'50vh', textAlign:'center', mt:'30px'}}>
                    Debes elegir primero un curso
                </Typography>
            )}
        </Container>
    )
}

export default GoogleForm