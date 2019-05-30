const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favteamSchema = new Schema({
  name: String,
  team: Object,
  userId: String
});


const FavTeam = mongoose.model('Faveteam', favteamSchema);
module.exports = FavTeam;
