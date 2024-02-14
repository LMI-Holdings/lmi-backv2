'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Storage', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'), // This assumes you're using PostgreSQL with the "uuid-ossp" extension
        unique: true,
      },
      warehouseId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Warehouses', // Adjust the model name if necessary
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      freightserviceId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Freights', // Adjust the model name if necessary
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      packageType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contactPerson: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryServiceNeeded: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      warehouseLocation: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:'pending',
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
    await queryInterface.dropTable('Storage');
  }
};
