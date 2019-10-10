const Shared = require('../models/shared');
const User = require('../models/user');
const mongoose = require('mongoose');


//create blank shareResumeModel Document
async function createShareResumeDocument(resumeId, userId, public_link, private_link) {
    try {
        let resumeData = Shared({ resume: resumeId, owner: userId, private_link: private_link, public_link: public_link })
        await resumeData.save();
    }
    catch (error) {
        console.log("Error occurred in creating new shareResumeDocument ", error);
    }
}

async function getData(req, res) {
    try {
        let result = await Shared.find({"shared_with":{$in:[req.body.user]}},["resume","owner"]).populate("owner","email");
        res.send(result);
    }
    catch (error) {
        console.log("Error occured in fecthing data", error);
    }
}

//share resume
async function shareResume(req, res) {
    try {
        let person = await User.findOne({ email: req.body.person }, "_id");
        if(person["_id"]==req.body.user)
            res.status(400).send("Unable to share resume");
        let result = await Shared.findOneAndUpdate({ owner: req.body.user, resume: req.body.resume }, { $push: { shared_with: person['_id'] } }).populate('User');
        res.status(200).send(result);
    }
    catch (error) {
        console.log("Error occured in shareResume ", error);
    }
}
async function getSharedData(req, res) {
    try {
        let result = await Shared.findOne({ owner: req.body.user, resume: req.params.resumeId },"shared_with").populate('shared_with','email');
        res.status(200).send(result['shared_with']);
    }
    catch (error) {
        console.log("Error occured in getSharedData ", error);
        res.status(500).send("Something went wrong");
    }
}
async function removePerson(req,res){
    try{
        let result = await Shared.findOneAndUpdate({owner:req.body.user,resume:req.body.resume},{$pull:{"shared_with":req.body.person_id}});
        res.status(200).send("Done");
    }
    catch(error){
        console.log("Error occurred in RemovePerson ",error);
        res.status(500).send("Something Went Wrong");
    }
}
//load shared resume
async function loadResume(req,res){
    try{
        let resume = await Shared.findOneAndUpdate({resume:req.params.resumeId}).populate("resume");
        if(resume['shared_with'].indexOf(req.body.user)>=0){
            res.status(200).send(resume["resume"]);
        }
        else
            res.status(400).send("Unauthorized Acces");
    }
    catch(error){
        console.log("Error occurres in LoadResume" + error);
        res.status(500).send("Something went wrong");

    }
}
module.exports.createShareResumeDocument = createShareResumeDocument;
module.exports.getData = getData;
module.exports.shareResume = shareResume;
module.exports.getSharedData = getSharedData;
module.exports.removePerson = removePerson;
module.exports.loadResume = loadResume;