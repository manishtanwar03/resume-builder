const Resume = require('../models/resume');
const ShareResumeConstructor =  require('./share-resume')['createShareResumeDocument'];
const generateLink = require('../helper/common')['generateLink'];

async function addResume(req, res) {
    try {
        req.body.modified_on = Date.now();
        let resume = new Resume(req.body);
        let result = await resume.save();
        ShareResumeConstructor(result._id,req.body.user,generateLink(result._id),generateLink(result._id));
        res.status(200).send({ 'resume': result._id });
    } catch (error) {
        console.log("Error occurred in addResume ", error);
        res.status(500).send("something went wrong, please try again!!");
    }
}

async function loadResume(req, res) {
    try {
        let resume = await Resume.findOne({ _id: req.params.id, user: req.body.user, is_deleted: false }, { modified_on: 0, is_deleted: 0, user: 0 });
        res.status(200).send(resume);
    } catch (err) {
        console.log("Error occurred in loadResume ", err);
        res.status(500).send("something went wrong");
    }
}

async function loadAllResume(req, res) {
    try {
        let resumes = await Resume.find({ user: req.body.user, is_deleted: false }, { _id: 1, modified_on: 1 });
        res.status(200).send(resumes);
    } catch (err) {
        console.log("Error occurred in loadAllResume ", err);
        res.status(500).send("something went wrong");
    }
}

async function updateResume(req, res) {
    try {
        req.body.modified_on = Date.now();
        let result = await Resume.findOneAndUpdate({ _id: req.params.id, user: req.body.user, is_deleted: false }, req.body, { new: true });
        res.status(200).send({ 'resume': result });
    } catch (err) {
        console.log("Error occurred in updateResume ", err);
        res.status(500).send("something went wrong");
    }
}

async function deleteResume(req, res) {
    try {
        let result = await Resume.findOneAndUpdate({ _id: req.params.id, user: req.body.user, is_deleted: false }, { $set: { is_deleted: true } });
        res.status(200).send(`Resume ID: ${result._id} deleted successfully`);
    } catch (err) {
        console.log("Error occurred in deleteResume ", err);
        res.status(500).send('something went wrong');
    }
}

module.exports.addResume = addResume;
module.exports.loadResume = loadResume;
module.exports.loadAllResume = loadAllResume;
module.exports.updateResume = updateResume;
module.exports.deleteResume = deleteResume;