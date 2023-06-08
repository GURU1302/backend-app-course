import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "please enter the name of the course"],
        minLength:[4,"course title must be 4 character long"],
        maxLength:[80,"course title must not be more than 80 character long"],
    },
    
    description:{
        type:String,
        required:[true, "please enter the description of the course"],
        minLength:[20,"course description must be 20 character long"],
    },
    lectures:[
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            video:{
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true,
                },
            }
        }
    ],
    poster:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },

    views:{
        type:Number,
        default:0,
    },

    numOfVideos:{
        type:Number,
        default:0,
        },
        
    category:{
        type:String,
        required:true,
    },

    createdBy:{
        type:String,
        required:[true, "Please enter the name of the course creator"],
    },
    
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

export const Course = mongoose.model("Course", schema);