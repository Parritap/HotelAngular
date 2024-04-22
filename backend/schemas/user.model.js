const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },

  apellido: {
    type: String,
    required: true,
    unique: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  contrasenia: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;