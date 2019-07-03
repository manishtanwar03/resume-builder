const Resume = require('./models/resume');

async function addResume(resume_data){
    let resume = new Resume(resume_data);
    let result = await resume.save();
    return result;
}

async function deleteResume(id)
{    
    const deletedResume=await Resume.findByIdRemove(id); 
    return deletedResume;
}

async function updateResume(id)
{
    console.log(req.body)
    const result=await Resume.findByIdAndUpdate({_id:id},req.body);
    return result;
}

