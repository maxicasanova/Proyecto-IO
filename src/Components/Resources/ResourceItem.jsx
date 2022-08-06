import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { saveAs } from "file-saver";

function ResourceItem({elemento}) {
    
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [mail, setMail] = React.useState('');
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = (elemento) => {
        if(!mail.match(mailformat)){
            setError(true);
        } else {
            setOpen(false);
            saveAs(
                `${elemento.url}`,
                `${elemento.nombre}.pdf`
            );
        }
    }

    return (
        <Box 
            sx ={{
                display: 'flex',
                justifyContent:'center', 
                alignItems:'center', 
                gap:'10px', 
                flexWrap: 'wrap'
            }}>
            <Box component='img' src="https://picsum.photos/300" 
                sx ={{height:'25vh', borderRadius:'5px',boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}/>
            <Box sx={{
                position: 'relative',
                right:'50px',
                padding:'15px',
                display:'flex',
                gap: '10px',
                bgcolor:'white',
                borderRadius:'5px',
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}>
                <Typography gutterBottom variant="h5" component="p">
                    {elemento.nombre}
                </Typography>
                <Box sx ={{width:'300px'}}>
                    {elemento.descripcion}
                </Box>
            </Box>
            <Button  onClick={handleClickOpen} >Descargar</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Por favor escribe tu mail para continuar.</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Para descargar el contenido te pediremos que escribas tu mail. Enviaremos ocacionalmente informacion sobre nuevos cursos.
                </DialogContentText>
                <TextField
                    autoFocus
                    onChange={(e) => {setMail(e.target.value)}}
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    required
                    error={error}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button color='success' onClick={()=> handleAccept(elemento)}>Descargar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default ResourceItem