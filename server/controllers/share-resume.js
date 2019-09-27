const Shared = require('../models/shared');
const Resume = require('../models/resume');
//create blank shareResumeModel Document
async function createShareResumeDocument(resumeId,userId,public_link,private_link){
    try{
        let resumeData = Shared({resume:resumeId,owner:userId,private_link:private_link,public_link:public_link})
        await resumeData.save();
    }
    catch (error){
        console.log("Error occurred in creating new shareResumeDocument ",error);
    }
}

async function getData(req,res){
    try{
        let result = await Shared.find({owner:"5d8c486a595b4d004cefe325"}).populate('resume');
        res.send(result);
    }
    catch(error){
        console.log("Error occured in fecthing data",error);
    }
}
module.exports.createShareResumeDocument = createShareResumeDocument;
module.exports.getData = getData;