const Resume = require('../models/resume');

async function loadResume(req, res) {
    try {
        let resume = await Resume.findOne({ _id: req.params.id });
        res.status(200).send(resume);
    } catch (err) {
        console.log("Error occurred in loadResume", err);
        res.status(500).send("something went wrong");
    }
}
async function addResume(req, res) {
    try {
        let resume = new Resume(req.body);
        let result = await resume.save();
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error occurred in addResume ", error);
        res.status(500).send("something went wrong, please try again!!");
    }
}

// add msgs similar as above

async function deleteResume(req, res) {
    try {
        const deletedResume = await Resume.findByIdAndDelete({ _id: req.params.id });
        deletedResume ? res.status(200).send({ message: 'data Deleted', res: deletedResume }) :
            res.status(422).send({ message: 'Data Not Deleted', res: deletedResume });
        // res.send(deletedResume);
    } catch (error) {
        throw (error);
    }
}

async function updateResume(req, res) {
    console.log(req.body)
    const result = await Resume.findByIdAndUpdate({ _id: id }, req.body);

    return result;
}

module.exports.addResume = addResume;
module.exports.deleteResume = deleteResume;
module.exports.updateResume = updateResume;
module.exports.loadResume = loadResume;