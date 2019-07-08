const express = require('express');
const router = express.Router();
var resume = require('../controllers/resume');
const auth  = require('./auth');

router.get('/',(req,res)=>{
    res.send('hello');
})
// router.post('/',Resume.addResume)(req,res)=>{
//     try{
//     let resume=  Resume.addResume(req.body);
//     res.status(200).send("REsult" + resume);
//     // console.log(req.body);
//     }
//     catch(error)
//     {
//         res.status(400);
//     }
// });

// router.delete('/',(req,res)=>{
//     // const resume=Resume.find(c=>c.id=== parseInt(req.params.id));
//     // if(!resume) res.status(404).send('The resume details not present');

//     // const index=resume.indexOf(resume);
//     // resume.splice(index,1);

//     Resume.deleteResume();


// });
// router.put('/',(req,res)=>{
//     Resume.updateResume();
// });


router.route('/').
post(auth,resume.addResume);

router.route(auth,'/:id').
put(resume.updateResume);

router.route(auth,'/:id').
delete(resume.deleteResume);

module.exports = router;

