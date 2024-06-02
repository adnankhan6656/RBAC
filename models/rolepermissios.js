'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      // define association here
     
     
    }
  }
  RolePermission.init({
   role_id:{
    type:Sequelize.INTEGER,
    references:{
      model:'Role',
      key:'id'
    }
   },
   permission_id:{
    type:Sequelize.INTEGER,
    references:{
      model:'Permission',
      key:'id'
    }
   }
  }, {
    sequelize,
    modelName: 'RolePermission',
  });
  return RolePermission;
};