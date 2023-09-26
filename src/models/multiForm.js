import mongoose from "mongoose";

const MultiFormSchema = new mongoose.Schema({
    address: {
        type: String,        
    },
    credit_score: {
        type: String,        
    },
    is_home_owner: {
        type: String,        
    },
    electricity_provider: {
        type: String,        
    },
    email: {
        type: String,        
    },
    first_name: {
        type: String,        
    },   
    type_of_home: {
        type: String,        
    },    
    is_home_owner: {
        type: String,        
    },    
    last_name: {
        type: String,        
    },    
    average_monthly_bill: {
        type: String,        
    },    
    phone: {
        type: String,        
    },    
    shade: {
        type: String,        
    },    
    zip: {
        type: String,        
    },    
    solar_considering: {
        type: [{
            type: String,
            trim: true, // Trim whitespace from the beginning and end of each string
          }],
          default: [], // Default value is an empty array
    },    
})

const MultiForm = mongoose.models.MultiForm || mongoose.model("MultiForm", MultiFormSchema);

export default MultiForm;