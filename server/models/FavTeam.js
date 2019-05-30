const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favteamSchema = new Schema({
  name: String,
  apiId: String,
  userId: String
});


const FavTeam = mongoose.model('Faveteam', favteamSchema);
module.exports = FavTeam;
