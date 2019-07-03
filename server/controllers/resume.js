const Resume = require('../models/resume');

async function addResume(req,res){
    try{
        console.log(req.body)
    let resume = new Resume(req.body);
    let result = await resume.save();
    // console.log("Result"+result);
    res.send(result);  
    }
    catch(error)
    {
        throw(error);
    }
}

async function deleteResume(req,res)
{    
    try{
    const deletedResume=await Resume.findByIdAndDelete({ _id: req.params.id }); 
    deletedResume ? res.status(200).send({ message: 'data Deleted', res: deletedResume })
    : res.status(422).send({ message: 'Data Not Deleted', res: deletedResume });
    // res.send(deletedResume);
    }
    catch(error){
        throw(error);
    }
}

async function updateResume(req,res)
{
    console.log(req.body)
    const result=await Resume.findByIdAndUpdate({_id:id},req.body);
    
    return result;
}

module.exports.addResume = addResume;
module.exports.deleteResume=deleteResume;
module.exports.updateResume=updateResume;