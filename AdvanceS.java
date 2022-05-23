package com.HRCProject;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class AdvanceS
 */
@WebServlet("/AdvanceS")
public class AdvanceS extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdvanceS() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object,Object> Response = new HashMap<Object,Object>();
		ArrayList<WinterInternship> tdata=new ArrayList<WinterInternship>();
		try {
			String doc_id = request.getParameter("doc_id");
			String invoice_id = request.getParameter("invoice_id");
			String cust_number = request.getParameter("cust_number");
			String buisness_year = request.getParameter("buisness_year");
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","P@ndu1818");
			PreparedStatement ps=con.prepareStatement("SELECT * FROM winter_internship WHERE doc_id= ? AND invoice_id= ? AND cust_number= ? AND buisness_year= ?");
			ps.setString(1, doc_id);
			ps.setString(2, invoice_id);
			ps.setString(3, cust_number);
			ps.setString(4, buisness_year);
			ResultSet rs= ps.executeQuery();
			
			while(rs.next()) {
				WinterInternship WI= new WinterInternship(rs.getInt("sl_no"),rs.getString("business_code"),rs.getInt("cust_number"),
						rs.getString("clear_date"),rs.getInt("buisness_year"),rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),
						rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getInt("posting_id"),
						rs.getDouble("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getInt("invoice_id"));
				tdata.add(WI);
			}
			Response.put("Project_Data",tdata);
		}catch(Exception e) {
			e.printStackTrace(); 
		}
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
