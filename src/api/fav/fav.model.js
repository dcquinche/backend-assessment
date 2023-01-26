const {Schema, model} = require('mongoose');

const FavSchema = new Schema(
  {
    name: {
      type: String,
    },
    list: [{
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      link: {
        type: String,
      }
    }],
  }
);

const Fav = model('Fav', FavSchema);

module.exports = Fav;
