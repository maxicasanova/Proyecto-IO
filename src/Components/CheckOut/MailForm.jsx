import {
    Box,
    Button,
    Container,
    TextField,
    Typography
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import { OrderContext } from '../Context/OrderContextProvider';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function MailForm() {
    const {orders} = useContext(OrderContext);
    const {clearOrders} = useContext(OrderContext);

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pais, setPais] = useState('');

    const [nombreError, setNombreError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [telefonoError, setTelefonoError] = useState(false);
    const [descripcionError, setDescripcionError] = useState(false);
    
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const grabacion = () => {
        const enviarEmail = async () => {
            if (orders.nombre === 'Ciudadania' || orders.nombre === 'Traducciones'){
                const template = {
                    course_name: orders.nombre,
                    to_name: nombre,
                    mensaje: mensaje,
                    to_mail: mail
                }
                await emailjs.send("service_x0460fk","template_odt99n8", template,'VlskrU6LYSJ-DIHkI');
                // await emailjs.send('service_x0460fk', 'template_1rifi3e', templateParams,'VlskrU6LYSJ-DIHkI');
            }
        }
        try{
            enviarEmail();
            clearOrders();
            navigate('/confirmation')
        } catch(err) {
            console.log(err);
            navigate('/order/problems')
        }
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

    useEffect (() => {
        window.scrollTo(0, 0);
        setDescripcionError(false);
        setNombreError(false);
        setMailError(false);
        setTelefonoError(false);
        comprobacion();
    },[nombre, mail, mensaje])

    // console.log(orders.nombre)
    
    return (
        <Container 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            <Typography component='h1' variant='h4' sx={{paddingTop:'30px', paddingBottom:'30px'}}>
                    Por favor, rellená este formulario de contacto.
            </Typography>
            {orders ? (
                <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    minHeight:'30vh', 
                    justifyContent:'center', 
                    alignItems:'center',
                    mt:'20px'
                }}>
                    <Typography variant='h5' gutterBottom>
                        Estas solicitando informacion sobre: {orders.nombre}.
                    </Typography>
                <form 
                    noValidate 
                    autoComplete='off' 
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Box sx={{
                        width: {xs:'80vw', sm: '50vw'},
                        marginTop: '20px',
                        marginBottom:'20px',
                        display:'flex',
                        flexDirection:'column',
                        justiifyContent: 'center',
                        alignItems:'center',
                        flexWrap: 'nowrap',
                        gap:'10px'
                    }}>
                        <TextField
                            onChange={(e) => {setNombre(e.target.value)}}
                            label='Nombre completo' 
                            placeholder='Minimo 3 caracteres'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                            error={nombreError}
                        />
                        {nombreError && <Typography variant='caption' color='error'>
                            Por favor ingrese un nombre valido. No menor a 3 caracteres.
                        </Typography>}
                        <TextField
                            onChange={(e) => {setMail(e.target.value)}}
                            label='Mail'
                            placeholder='Debe tener la forma alguien@ejemplo.com'
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                            error={mailError}
                            type='mail'
                        />
                        {mailError && <Typography variant='caption' color='error'>
                            Por favor ingrese un mail valido. No se aceptan espacios.
                        </Typography>}
                        <TextField
                            label="Mensaje"
                            placeholder='Por favor detalla aqui toda la informacion que pueda resultar util para explicar tu situacion'
                            multiline
                            maxRows={7}
                            color='secondary'
                            required
                            value={mensaje}
                            onChange={(e) => {setMensaje(e.target.value)}}
                            error={descripcionError}
                            sx={{
                                width:'100%'
                            }}
                            />
                        <TextField
                            label="Telefono"
                            placeholder='Ingrese su numero de telefono con prefijo internacional.'
                            color='secondary'
                            value={telefono}
                            error={telefonoError}
                            onChange={(e) => {setTelefono(e.target.value)}}
                            sx={{
                                width:'100%'
                            }}
                            />
                        <TextField
                            label="País"
                            placeholder='Ingrese su pais de residencia'
                            color='secondary'
                            value={pais}
                            onChange={(e) => {setPais(e.target.value)}}
                            sx={{
                                width:'100%'
                            }}
                            />
                        <Button type='submit' variant='contained'>Enviar</Button>
                    </Box>
                </form>
                </Box>
            ) : (
                <Typography component='p' sx={{minHeight:'50vh', textAlign:'center', mt:'30px'}}>
                    Debes elegir primero un servicio
                </Typography>
            )}
        </Container>
    )
}

export default MailForm