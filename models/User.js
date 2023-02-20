'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customer_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    othernames: {
      allowNull: true,
      uniqueKey:true,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      uniqueKey:true,
      type: DataTypes.STRING
    },
    is_email_verified: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    deladdress:{
      allowNull: false,
      type: DataTypes.STRING
    },
    timeofdel:{
      allowNull:false,
      type: DataTypes.STRING
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};