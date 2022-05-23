import axios from 'axios'

export const GridData=async()=>{
  let response=await axios.get("http://localhost:8080/HRC_Project/LoadingData");
  let data = response.data.Project_Data;
  data.map((dat,index)=>({...dat,'id':index}))
  return data;
}

export const AddData = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,
    document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) =>{
    let insertdata="business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+buisness_year+
    "&doc_id="+doc_id+"&posting_date="+posting_date+"&document_create_date="+document_create_date+"&due_in_date="+due_in_date+
    "&invoice_currency="+invoice_currency+"&document_type="+document_type+"&posting_id="+posting_id+"&total_open_amount="+total_open_amount+
    "&baseline_create_date="+baseline_create_date+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id
    let response = await axios.get("http://localhost:8080/HRC_Project/AddData?" + insertdata )
    return response.data;
  }

  export const updateData = async ({invoice_id,invoice_currency, cust_payment_terms})=>{
    let data = "invoice_id="+invoice_id+"&invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms;
    let response = await axios.get("http://localhost:8080/HRC_Project/updateData?"+data);
    return response.data;
  }

export const deleteData = async (invoice_id) =>{
  let data = "invoice_id="+invoice_id;
  let response = await axios.get("http://localhost:8080/HRC_Project/deleteData?"+ data);
  return response.data;
}
export const AdvanceSch = async ({doc_id,invoice_id,cust_number,buisness_year})=>{
  let Asdata = "doc_id="+doc_id+"&invoice_id="+invoice_id+"&cust_number="+cust_number+"&buisness_year="+buisness_year;
  let response = await axios.get("http://localhost:8080/HRC_Project/AdvanceS?"+ Asdata);
  let searchResult = response.data.Project_Data;
  searchResult.map((datas,index)=>({...datas,'id':index}));
  return searchResult;
}

export const Bsearch = async ({cust_number})=>{
  let sdata = "cust_number="+cust_number;
  let response = await axios.get("http://localhost:8080/HRC_Project/Search?"+ sdata);
  let searchResult = response.data.Project_Data;
  searchResult.map((datas,index)=>({...datas,'id':index}));
  return searchResult;
}