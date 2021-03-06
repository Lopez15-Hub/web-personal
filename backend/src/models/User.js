const { Schema, model } = require("mongoose");
// const Bcrypt = require("bcrypt");


const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
    },

    sirname: {
      type: String,

      trim: true,
    },
    password: {
      type: String,

      trim: true,
    },

    email: {
      type: String,
      trim: true,
    },
    passRepeat: {
      type: String,
    },
    terms: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.encryptPassword = async (password) =>{
//   const salt = await Bcrypt.genSalt(10);
//  return Bcrypt.hash(password,salt);

// }

// userSchema.methods.validatePassword = function(password){
// return Bcrypt.compare(password, this.password);
// }

module.exports = model("User", userSchema);
