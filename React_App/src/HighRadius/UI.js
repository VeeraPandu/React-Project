/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import Search from './SearchBox'
import Predict from './Predict'
import Analytics from './Analytics'
import AdvanceS from './AdvanceSearch'
import { deleteData, GridData, Bsearch, AddData, updateData, AdvanceSch} from './FetchingComponents';
import InsertData from './AddData'
import EditD from './EditData'
import DeleteData from './DeleteData'
import Pagination from './Pagination'
import { Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Refresh from './Refresh'
import { TableContainer} from '@material-ui/core'

export default function InvoiceManagement() {
    const [data, setData]=useState([]);
    const [open, setOpen]=useState(false);
    const [asOpen, setAsOpen]=useState(false);
    // eslint-disable-next-line no-unused-vars
    const [del, setDel]=useState(false);
    const [deletebtn,setDeleteBtn]=useState(true);
    const [page, setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(5);
    const [edit,setEdit] = useState(true);

    
    const [hrdt,setHrdt]=useState({sl_no:'',business_code:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',
    invoice_currency:'',document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''})
    const {business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
      document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}=hrdt;
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setData(await GridData()) 
    },[]);

    const changeHandler = (e) =>{
      const {name, value}=e.target;
      setHrdt({...hrdt, [name]:value})
    }
    
    const submitHandler = async (e) =>{
      e.preventDefault();
      let response=await AddData(hrdt);
      if(response){
        setHrdt({business_code:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',
        invoice_currency:'',document_type:'',posting_id:'',total_open_amount:'',baseline_create_date:'',customer_payment_terms:'',invoice_id:''});
      }
    }

    const editHandler =()=>{
      setOpen(true);
    }

    const checkHandler = (e, invoice_id) =>{
    if(e.target.checked){
        let editd = data.filter(gdata=>gdata.invoice_id===invoice_id)[0];
        setHrdt(editd);
    }
      setEdit(false);
      setDeleteBtn(false);
    }

    const handleClose = async (update)=>{
      if(update){
        // eslint-disable-next-line no-unused-vars
        let response = await updateData(hrdt);
      }
        setOpen(false);
    }
  
    const deleteHandler=async(del)=>{
      if(del){
        // eslint-disable-next-line no-unused-vars
        let response = await deleteData(hrdt.invoice_id);
      }
      setDel(false);
    }

    const searchHandler = async (search)=>{
      if(search){
        // eslint-disable-next-line no-unused-vars
        let response = await AdvanceSch(hrdt);
        setData(response);
      }
      setAsOpen(false);
    }

    const asHandler =()=>{
        setAsOpen(true);
    }

    const SearchlogoHandler = async(e) => {
        if(e.key==='Enter'){
          setData(await Bsearch(hrdt));
        }
    }

    const handleChangePage=(event, newPage)=>{
      setPage(newPage);
    }
      
    const handleChangeRowsPerPage=(event)=>{
      setRowsPerPage(+event.target.value);
      setPage(0);
    }


  return <>

    <div style={{display:'flex',marginLeft:25,marginTop:10}}>

        <Predict />
        <Analytics />
        <AdvanceS cust_number={cust_number} open={asOpen} doc_id={doc_id} buisness_year={buisness_year} invoice_id={invoice_id} asHandler={asHandler} asChangeHandler={changeHandler} searchHandler={searchHandler}/>
        <Refresh />
        <Search sChangeHandler={changeHandler} cust_number={cust_number} SearchlogoHandler={SearchlogoHandler}/>
        <InsertData business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year} doc_id={doc_id} 
        posting_date={posting_date} document_create_date={document_create_date} due_in_date={due_in_date} invoice_currency={invoice_currency} 
        document_type={document_type} posting_id={posting_id} total_open_amount={total_open_amount} baseline_create_date={baseline_create_date} 
        cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} changeHandler={changeHandler} submitHandler={submitHandler} />
        <EditD handleClose={handleClose} eChangeHandler={changeHandler} open={open} edit={edit} editHandler={editHandler} invoice_id={invoice_id} invoice_currency={invoice_currency} cust_payment_terms={cust_payment_terms} />
        <DeleteData deleteHandler={deleteHandler} del={deletebtn}/>
  
  </div>
  
  <TableContainer style={{width:1707, height: 386,whiteSpace:'nowrap', overflow:'scroll',marginTop:20}}>
    <Table sx={{border:1, borderBlockColor:'white'}}>
      <TableHead>
        <TableRow>
          <TableCell><Checkbox style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}/></TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Sl_No</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Business_Code</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Cust_Number</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Clear___Date</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Buisness_year</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Doc_Id</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Posting_Date</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Document_Create_Date</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Due_In_Date</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Invoice_Currency</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Document_Type</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Posting_Id</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Total_Open_Amount</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Baseline_Create_Date</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Cust_Payment_Terms</TableCell>
          <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>Invoice_Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage).map((rs)=>{
        return(
          <TableRow key={rs.sl_no} style={{color:'white'}}> 
              <TableCell><Checkbox onClick={(e)=>checkHandler(e,rs.invoice_id)} style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}/></TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.sl_no} </TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.business_code}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.cust_number}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.clear_date}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.buisness_year}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.doc_id}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.posting_date}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.document_create_date}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.due_in_date}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.invoice_currency}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.document_type}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.posting_id}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.total_open_amount}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.baseline_create_date}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.cust_payment_terms}</TableCell>
              <TableCell style={{color:'white',paddingTop:2,paddingBottom:2,paddingLeft:5}}>{rs.invoice_id}</TableCell>
          </TableRow>
              )
          })
      }
    </TableBody>
   </Table>
  </TableContainer>

  <Pagination 
    count={data.length}
    page={page}
    handleChangePage={handleChangePage}
    rowsPerPage={rowsPerPage}
    handleChangeRowsPerPage={handleChangeRowsPerPage}/>

  </>

}
