const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const FavTeam = require('../models/FavTeam');

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});


 router.get('/myTeam', isLoggedIn, (req,res,next) => {
    FavTeam.findOne({userId:req.user._id}).then(result=>{
      res.json(result)
    })
 })

 router.post('/addFave', isLoggedIn, (req, res, next) => {
   console.log('hihihihihihih')
    let newTeam = {name: req.user.username, team:req.body.team, userId: req.user._id}
    FavTeam.create(newTeam).then(teams=>{
      res.json(teams)
    }).catch(err=>console.error(err))
 })

router.post('/removeFave/:team', (req, res, next) => {
  FavTeam.deleteOne({'apiId': JSON.stringify(req.params.team)})
  .then(theTeam => {
    if(theTeam) {
      req.user.FavTeam.pull(theTeam._id);
      req.user.save()
      .then(updatedUser => {
        res.json(updatedUser);
    }).catch(err => res.json(err)) 
  } else {
        res.status().json({ error: "My Favorite team remove Team database error!" });
       }
  }).catch(err => res.json(err))
})
  




module.exports = router;
