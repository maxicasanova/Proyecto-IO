import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { OrderContext } from '../Context/OrderContextProvider';
import emailjs from '@emailjs/browser';
import paises from '../../utils/paises';
import { useNavigate } from 'react-router-dom';

function MailForm() {
    const {orders} = useContext(OrderContext);
    const {clearOrders} = useContext(OrderContext);

    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [comision, setComision] = useState('');
    const [pais, setPais] = useState('Argentina');

    const [nombreError, setNombreError] = useState(false);
    const [mailError, setMailError] = useState(false);
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
            mensaje, 
            comision
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
                <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    minHeight:'30vh', 
                    justifyContent:'center', 
                    alignItems:'center',
                    mt:'20px'
                }}>
                    {(orders?.nombre === 'Ciudadania' || orders?.nombre === 'Traducciones') ? 
                    <Typography variant='h5' gutterBottom>
                        Estas solicitando informacion sobre: {orders.nombre}.
                    </Typography>
                    :
                    <Typography variant='h5' gutterBottom>
                        Estas solicitando inscribirte a: {orders.nombre}.
                    </Typography>
                    }
                
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
                            label='Nombre completo, se utilizara para el certificado' 
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
                            id="outlined-multiline-flexible"
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
                        {descripcionError && <Typography variant='caption' color='error'>
                            Este campo tambien es necesario.
                        </Typography>}
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                            disableFuture
                            label="Fecha de Nacimiento"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={fecha}
                            onChange={(newValue) => {
                                setFecha(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            required
                            />
                        </LocalizationProvider>
                        <FormControl>
                                <InputLabel id="demo-country-select-label">Elige tu Pais</InputLabel>
                                <Select
                                    labelId="demo-country-select-label"
                                    id="demo-country-select"
                                    value={pais}
                                    onChange={(event) => handleCountryChange(event)}
                                >
                                    {paises.map(p => (
                                        <MenuItem value={p} key={p}>{p}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        {orders.opciones && (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Comision</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={comision}
                                    // placeholder="Comision"
                                    onChange={(event) => handleChange(event)}
                                >
                                    {orders.opciones.map(o => (
                                        <MenuItem value={o} key={o.horario}>{o.horario}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        <Button type='submit' variant='contained'>Enviar</Button>
                    </Box>
                </form>
                </Box>
            ) : (
                <Typography component='p' sx={{minHeight:'50vh', textAlign:'center', mt:'30px'}}>
                    Debes elegir primero un curso
                </Typography>
            )}
        </Container>
    )
}

export default MailForm