const mongoose = require('mongoose');
const Emp = require('./employe')


//create function to add employee data in database

function create(req, res) {
    let emp = new Emp(req.body)
    emp.save().then((data) => {
        res.json(data)
        console.log("sucessfully added data");
    })
        .catch((e) => {
            console.log(e.message);
        })
};

//create function  we can retrieve every record from the collection.

function view(req, res,) {
    Emp.find({}).then((data) => {
        res.send(data)
        console.log("get all data successfully");
    })

};

//create api to update a employee record

function update(req, res) {
    Emp.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the   Employee recored " })

        };
        res.send({ success: "Updation successfull" });

    })
};
// create api remove for deleting employee records 

function remove(req,res){
    Emp.findByIdAndDelete(req.params.id, (err,emp)=>{
      if(err){
        return res.status(500).send({error: "Problem with Deleting the Employee recored "})
      }
      res.send({success: 'Employee deleted successfully'})
      console.log('successfully deleted data');
    })
  }
  
function getData (req,res){
    Emp.collection.findOne().sort({'id':-1}).limit(1)
    if(err){
        return res.status(500).send({error: "Problem with Deleting the Employee recored "})
      }
      res.send({success: 'Employee deleted successfully'})
      console.log('successfully deleted data');
    }

  
  
  
  //export modules...
  module.exports.create = create;
  module.exports.view = view;
  module.exports.update = update;
  module.exports.remove = remove;

