package com.HRCProject;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.text.SimpleDateFormat;
import java.text.DateFormat;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


/**
 * Servlet implementation class AddData
 */
@WebServlet("/AddData")
public class AddData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			HashMap<Object,Object> Response = new HashMap<Object,Object>();
			String business_code = request.getParameter("business_code");
			int cust_number = Integer.parseInt(request.getParameter("cust_number"));
			
			String cd = request.getParameter("clear_date");
			Date date = new SimpleDateFormat("yyyy-MM-dd").parse(cd);
     		DateFormat cdformatter = new SimpleDateFormat("yyyy-MM-dd");
			String clear_date = cdformatter.format(date);
			
			String buisness_year = request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			
			String pd = request.getParameter("posting_date");
			Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse(pd);
			DateFormat pdformatter = new SimpleDateFormat("yyyy-MM-dd");
			String posting_date = pdformatter.format(date1);
			
			String dcd = request.getParameter("document_create_date");
			Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse(dcd);
			DateFormat dcdformatter = new SimpleDateFormat("yyyy-MM-dd");
			String document_create_date = dcdformatter.format(date2);
			
			String did = request.getParameter("due_in_date");
			Date date3 = new SimpleDateFormat("yyyy-MM-dd").parse(did);
			DateFormat didformatter = new SimpleDateFormat("yyyy-MM-dd");
			String due_in_date = didformatter.format(date3);
			
			String invoice_currency = request.getParameter("invoice_currency");
			String document_type = request.getParameter("document_type");
			int posting_id = Integer.parseInt(request.getParameter("posting_id"));
			double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
			
			String bcd = request.getParameter("baseline_create_date");
			Date date4 = new SimpleDateFormat("yyyy-MM-dd").parse(bcd);
			SimpleDateFormat bcdformatter = new SimpleDateFormat("yyyy-MM-dd");
			String baseline_create_date = bcdformatter.format(date4);
			
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","P@ndu1818");
			PreparedStatement ps=con.prepareStatement("INSERT INTO winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		
			ps.setString(1, business_code);
			ps.setInt(2, cust_number);
			ps.setString(3,clear_date);
			ps.setString(4,buisness_year);
			ps.setString(5,doc_id);
			ps.setString(6,posting_date);
			ps.setString(7,document_create_date);
			ps.setString(8,due_in_date);
			ps.setString(9,invoice_currency);
			ps.setString(10,document_type);
			ps.setInt(11,posting_id);
			ps.setDouble(12,total_open_amount);
			ps.setString(13,baseline_create_date);
			ps.setString(14,cust_payment_terms);
			ps.setInt(15,invoice_id);
		
			if(ps.executeUpdate()>0) {
				Response.put("insert", true);
			}else {
				Response.put("insert",false);
			}
			Gson gson = new Gson();
			String JSONresponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(JSONresponse);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
