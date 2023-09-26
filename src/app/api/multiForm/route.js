import { NextRequest, NextResponse } from "next/server";
import MultiForm from "@/models/multiForm";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(NextRequest){
    try {
        const formData = await MultiForm.find(); 

        return NextResponse.json({
          message: "",
          formData,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}


export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {address, solar_considering, zip, shade, phone, average_monthly_bill, last_name, is_home_owner, type_of_home, first_name, email, electricity_provider, credit_score} = reqBody;
        
        const newForm = new MultiForm({
            address,
            solar_considering,
            zip,
            shade,
            phone,
            average_monthly_bill,
            last_name,
            is_home_owner,
            type_of_home,
            first_name,
            email,
            electricity_provider,
            credit_score
        })

        // Save product in db
        const savedForm = await newForm.save();
        
        return NextResponse.json({
            message: "Data Saved successfully",
            success: true,
            savedForm
        })
    }
    catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false,
        })
    }
}