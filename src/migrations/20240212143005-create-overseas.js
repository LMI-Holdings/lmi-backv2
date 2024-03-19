'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OverseasLogistics', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate'), // This assumes you're using PostgreSQL with the "uuid-ossp" extension
        unique: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Users', // This assumes the name of your user table is "Users"
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pickupAdditionalInfo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      dropoffAdditionalInfo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      packageType: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      quantity: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      weight: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      contactPerson: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      bankStatementAttachment: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      needStorageOption: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      pickupLocation: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      dropoffLocation: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue:'pending',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OverseasLogistics');
  }
};
