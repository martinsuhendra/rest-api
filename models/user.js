'use strict';
const Op = require('sequelize').Op

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail : {args:true, msg: `must be email format`},
        isUnique(email){
          return User.findOne({ where: { email : email, id: {[Op.ne] : this.id}}})
          .then((user)=> {
            if (user) {
               throw new Error(`this email already exist`)
            } 
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.greeting = function() {
    return `hello, ${this.name}!`
  }

  return User;
};