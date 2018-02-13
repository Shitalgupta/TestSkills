const express = require('express');
const router = express.Router();
const Skill = require('../models/skills');

//search Skill by Id
router.get('/skills/:id', (req, res) => {
  Skill.findOne({ _id: req.params.id }).then((skill) => {
    res.json(skill);
  })
});


//Add Skills
router.post('/skills', (req, res) => {
  Skill.create(req.body).then((skill) => {
    res.json(skill);
  })
});

//Edit Skills
router.put('/skills/:id', (req, res) => {
  Skill.findByIdAndUpdate({ _id: req.params.id }, req.body).then((skill) => {
    res.send(skill);
  })
});


//Approval/rejection status of skill 
router.put('/skills/approve/:id', (req, res) => {
  Skill.findByIdAndUpdate({ _id: req.params.id }).then((skill) => {
     if (req.query.status) {
      skill.status = 'approved';
    }
    else {
      skill.status = 'rejected';
    }
  })
});
module.exports = router;

