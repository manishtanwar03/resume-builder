const Shared = require('../models/shared');
const Resume = require('../models/resume');
const User = require('../models/user');

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
        console.log(req.body.email)
        let person = await User.findOne({ email: req.body.email });
        console.log(person);
        let result = await Shared.find({ owner: "5d8c486a595b4d004cefe325" }).populate('resume');
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
        let result = await Shared.findOne({ owner: req.body.user, resume: req.body.resume });
        console.log(result);
        res.send("Done");
    }
    catch (error) {
        console.log("Error occured in getSharedData ", error);
    }
}

module.exports.createShareResumeDocument = createShareResumeDocument;
module.exports.getData = getData;
module.exports.shareResume = shareResume;