'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      othernames: {
        allowNull: true,
        uniqueKey:true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        uniqueKey:true,
        type: Sequelize.STRING
      },
      is_email_verified: {
        type:Sequelize.BOOLEAN,
        defaultValue: false
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      deladdress:{
        allowNull: false,
        type: Sequelize.STRING
      },
      timeofdel:{
        allowNull:false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};