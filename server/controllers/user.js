const User = require('../models/user');
  //controllers user.js

async function addUser(req,res){
    try{
        console.log(req.body);
        // res.send(req.body);
    let user = new User(req.body);
    let result = await user.save();
    // console.log("Result"+result);
    res.send(result);  
    }
    catch(error)
    {
        res.status(400).send(error);
        throw(error);
    }
}


async function authUser(req,res){

    let userData = req.body;
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email and Password')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Email and Password')
      } else {
          res.status(200).send(user)
      }
    }
  })
}



async function deleteUser(req,res)
{    
    try{
    const deletedUser=await User.findByIdAndDelete({ _id: req.params.id }); 
    deletedUser ? res.status(200).send({ message: 'data Deleted', res: deletedUser })
    : res.status(422).send({ message: 'Data Not Deleted', res: deletedUser });
    // res.send(deletedResume);
    }
    catch(error){
        throw(error);
    }
}

// async function updateUser(req,res)
// {
//     console.log(req.body)
//     const result=await User.findByIdAndUpdate({_id:id},req.body);
    
//     return result;
// }



module.exports.addUser = addUser;
module.exports.authUser = authUser;
module.exports.deleteUser=deleteUser;
// module.exports.updateUser=updateUser;