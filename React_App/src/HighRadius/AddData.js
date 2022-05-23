import React,{useState} from 'react'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Modal from 'react-modal';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const useStyle=makeStyles({
    field:{
      marginTop:20,
      marginLeft:10,
      width:320,
      margin:'5px',
      background:'white',
      borderRadius:10
    },
    field_btn:{
      width:659,
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
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      color:'white',
      background:'none',
      border:'1px solid skyblue',
      '&:hover':{
        border:'1px solid black',
       }
    }
})
function InsertData({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,
  due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,changeHandler,submitHandler}) {
    const classes=useStyle()
    const [modalIsOpen, setModalIsOpen]=useState(false)
  
  return (
    
    <div>
      <Button onClick={()=>setModalIsOpen(true)} className={classes.Mp_Butn}>ADD</Button>
      <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)} ariaHideApp={false}
        style={{overlay:{backgroundColor:'#14AFF'},content:{backgroundColor:'#283a46',width:1340,height:500,marginTop:170,marginLeft:120,borderRadius:15}}}>
        
      <Typography className="heading" style={{color:"white",marginLeft:10}}>Add</Typography>
      
      <form noValidate autoComplete="off">
          <TextField name="business_code" value={business_code} onChange={changeHandler} label="Business Code" variant="filled" required className={classes.field}/>
          <TextField name="cust_number" value={cust_number} onChange={changeHandler} label="Customer Number" variant="filled" required className={classes.field} />
          <TextField name="clear_date" value={clear_date} type="date" onChange={changeHandler} label="Clear Date" variant="filled" required className={classes.field}/>
          <TextField name="buisness_year" value={buisness_year} onChange={changeHandler} label="Business Year" variant="filled" required className={classes.field} /><br /><br />
          <TextField name="doc_id" value={doc_id} onChange={changeHandler} label="Document Id" variant="filled" aria-required className={classes.field}/>
          <TextField name="posting_date" value={posting_date} type="date" onChange={changeHandler} label="Posting Date" variant="filled" required className={classes.field} />
          <TextField name="document_create_date" value={document_create_date} type="date" onChange={changeHandler} label="Document Create Date" variant="filled" required className={classes.field}/>
          <TextField name="due_in_date" value={due_in_date} type="date" onChange={changeHandler} label="Due Date" variant="filled" required className={classes.field} /><br /><br />
          <TextField name="invoice_currency" value={invoice_currency} onChange={changeHandler} label="Invoice Currency"  variant="filled" required className={classes.field}/>
          <TextField name="document_type" value={document_type} onChange={changeHandler} label="Document Type" variant="filled" required className={classes.field} />
          <TextField name="posting_id" value={posting_id} onChange={changeHandler} label="Posting Id" variant="filled" required className={classes.field}/>
          <TextField name="total_open_amount" value={total_open_amount} onChange={changeHandler} label="Total Open Amount" variant="filled" required className={classes.field} /><br /><br />
          <TextField name="baseline_create_date" value={baseline_create_date} type="date" onChange={changeHandler} label="Baseline Create Date" variant="filled" required className={classes.field}/>
          <TextField name="cust_payment_terms" value={cust_payment_terms} onChange={changeHandler} label="Customer Payment Terms"  variant="filled" required className={classes.field} />
          <TextField name="invoice_id" value={invoice_id} onChange={changeHandler} label="Invoice Id"  variant="filled" aria-required className={classes.field} /><br /><br />
          <Button type="submit" variant="contained" startIcon={<AddIcon />} className={classes.field_btn} onClick={submitHandler}>Add</Button>
          <Button type="submit" variant="contained" startIcon={<HighlightOffIcon />} onClick={()=>setModalIsOpen(false)} className={classes.field_btn}>Cancel</Button>
          </form>
      </Modal>
    </div>
    
  )
}

export default InsertData
