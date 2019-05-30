const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const Faveteam = require('../models/FavTeam');

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user
  });
});

// app.post('/fav/:id', isLoggedIn, function(req,res){
//   let Faveteam = req.body.commentSection;
//   let selectedBy = req.user._id;
//   let favId = req.params.id;
  
//  Team.select({text:text, selectedBy:selectedBy, favId:favId}).then(result=>{
//       res.redirect('back')
//   })
// })

// app.get('/remove/:id', isLoggedIn, function(req,res){
//   Comment.findByIdAndRemove(req.params.id).then(r=>{
//       res.redirect('back')
//   })
// })


 router.post('/addFave/:teamId', isLoggedIn, (req, res, next) => {
    let newTeam = {name: req.user.username, teamId:req.params.teamId, userId: req.user._id}
    FavTeam.create(newTeam).then(teams=>{
      res.json(teams)
    })
 })
// add to user fave
// router.post('/addFave/:teamId', (req, res, next) => {
//   Faveteam.findOne({'apiId': JSON.stringify(req.params.teamId)})
//   .then(theTeam => {
//     if(theTeam) {
//       req.user.faveTeam.push(theTeam._id)
//       req.user.save()
//       .then(updatedUser => {
//         res.json(updatedUser)
//       }).catch(err => res.json(err))
//     } else {
//       res.status().json({ error: "My Favorite Team update database error!" })
//     }
//   }).catch(err => res.json(err))
// })



// remove from user fave
router.post('/removeFave/:teamId', (req, res, next) => {
  Faveteam.deleteOne({'apiId': JSON.stringify(req.params.teamId)})
  .then(theTeam => {
    if(theTeam) {
      req.user.faveTeam.pull(theTeam._id);
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
