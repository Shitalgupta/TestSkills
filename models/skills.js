const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//Create Schema
const skiil_Schema=new Schema({
    id:{
        type:Number,
        required:true
      },
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:false
    }
});

//Create model 
var Skill=module.exports=mongoose.model('detail',skiil_Schema);

// module.exports.getSkillbyId=function(id,callback){
//     modelSkill.findById(id,callback);
//   };

// module.exports.getSkillbyname=function(name ,callback){
//     const query={
//         name:name
//     }
//     modelSkill.findOne(query,callback);
//   };  

// module.exports.addSkill=function(Skill ,callback){
//     modelSkill.create(Skill,callback);
//   };

  


   