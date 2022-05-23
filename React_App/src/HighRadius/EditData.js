import React from 'react'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-modal';
const useStyle=makeStyles(()=>({
    field:{
      marginTop:20,
      marginBottom:20,
      width:340,
      margin:'5px',
      background:'white',
      borderRadius:10
    },
    Mp_Butn:{
      width:220,
      height:40,
      marginTop:50,
      marginBottom:50, 
      padding:'5px',
      color:'white',
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0,
      background:'none',
      border:'1px solid skyblue',
      '&:hover':{
        border:'1px solid black',
      }
    },
    butn:{
      width:340,
      height:40,
      padding:'5px',
      margin:'5px',
      color:'white',
      background:'#283a46',
      border:'1px solid white',
      '&:hover':{
        background:'white',
        color:'black'
      }
    }
}))
function EditD({open,edit,invoice_id,invoice_currency, cust_payment_terms, eChangeHandler,editHandler,submitHandler,handleClose}) {
  
  const classes=useStyle()
  
    return (

      <div>

          <Button onClick={editHandler} className={classes.Mp_Butn} disabled={edit} >EDIT</Button>

          <Modal isOpen={open} onClose={handleClose} 
          style={{overlay:{backgroundColor:'#14AFF',},content:{backgroundColor:'#283a46',width:700,height:210,marginTop:230,marginLeft:450,borderRadius:15,webkitBoxShadow:'0px 0px 500px #283a46'}}}>
            
            <Typography className='heading' style={{color:'white',margin:10}}>Edit</Typography>
            <TextField onChange={eChangeHandler} id='invoice_currency' name='invoice_currency' value={invoice_currency} label="Invoice Currency" className={classes.field} variant="filled" required  />
            <TextField onChange={eChangeHandler} id='cust_payment_terms' name='cust_payment_terms' value={cust_payment_terms} label="Customer Payment Terms" className={classes.field} variant="filled" required />
            <Button onClick={()=>handleClose(true)} variant="contained" startIcon={<EditIcon />} className={classes.butn}>Edit</Button>
            <Button onClick={()=>handleClose(false)} variant="contained" startIcon={<HighlightOffIcon />} className={classes.butn}>Cancel</Button>
        
          </Modal>
       
      </div>

    )
   
  }

export default EditD
