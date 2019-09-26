// const Content = require('../models/content');

// // will be added when account will be created from user controller
// // functions to update and load content only

// async function updateContent(req, res) {
//     try {
//         let content = await Content.findOneAndUpdate({ user: req.body.user }, req.body, { new: true });
//         res.status(200).send({ 'content': content });
//     } catch (error) {
//         console.log("Error occurred in updateResume", error);
//         res.status(500).send("something went wrong, please try again!!");
//     }
// }

// async function loadContent(req, res) {
//     try {
//         let content = await Content.findOne({ user: req.body.user });
//         res.staus(200).send(content);
//     } catch (error) {
//         console.log("Error occurred in loadContent ", error);
//         res.status(500).send("something went wrong");
//     }
// }

// module.exports.updateContent = updateContent;
// module.exports.loadContent = loadContent;