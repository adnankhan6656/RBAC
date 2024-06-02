'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  UserRoles.init({
    user_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'id'
      }
    },
    role_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'Role',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserRoles',
  });
  return UserRoles;
};