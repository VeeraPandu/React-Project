import React from 'react'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Modal from 'react-modal';
const useStyle=makeStyles({
    field:{
      marginTop:20,
      marginBottom:10,
      width:320,
      margin:'5px',
      background:'white',
      borderRadius:10
    },
    butn:{
      width:320,
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
  },
    Mp_Butn:{
      width:220,
      height:40,
      marginTop:50,
      marginBottom:50,
      padding:'5px',
      borderTopRightRadius:10,
      borderBottomRightRadius:10,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0,
      color:'white',
      background:'none',
      border:'1px solid skyblue',
      '&:hover':{
        border:'1px solid black',
      }
  }
})
function AdvanceS({open,doc_id,invoice_id,cust_number,buisness_year,asChangeHandler,searchHandler, asHandler}) {
  
const classes=useStyle()

  return(

    <div>

      <Button onClick={asHandler} className={classes.Mp_Butn}>ADVANCE SEARCH</Button>
     
      <Modal isOpen={open} shouldCloseOnOverlayClick={false} onClose={asHandler} 
      style={{overlay:{backgroundColor:'#14AFF'},content:{backgroundColor:'#283a46',width:665,height:290,marginTop:220,marginLeft:450,borderRadius:15}}}>
      <Typography className='heading' style={{color:'white'}}>Advance Search</Typography>
      <TextField onChange={asChangeHandler} name='doc_id' value={doc_id} label="Document Id"  variant="filled" required className={classes.field}/>
      <TextField onChange={asChangeHandler} name='invoice_id' value={invoice_id} label="Invoice Id" variant="filled" required className={classes.field} /><br /><br />
      <TextField onChange={asChangeHandler} name='cust_number' value={cust_number}label="Customer Number" variant="filled" required className={classes.field} />
      <TextField onChange={asChangeHandler} name='buisness_year' value={buisness_year} label="Business Year" variant="filled" required className={classes.field} /><br /><br />
      <Button type="submit" variant="contained" onClick={()=>searchHandler(true)} className={classes.butn} startIcon={<ManageSearchIcon />}>Search</Button>
      <Button type="submit" variant="contained" onClick={()=>searchHandler(false)} startIcon={<SearchOffIcon />}  className={classes.butn}>Cancel</Button>
      </Modal>   

    </div>
    
  )
}

export default AdvanceS
