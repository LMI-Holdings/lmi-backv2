'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Freights', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'), // This assumes you're using PostgreSQL with the "uuid-ossp" extension
        unique: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      shipmentType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      deliveryDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      pickupLocation: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      needStorageOption: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      dropoffLocation: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      pickupAdditionalInfo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dropoffAdditionalInfo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      driverId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:'pending',
      },
      storageServiceId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Storage', // This assumes the name of your storage service table is "StorageServices"
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('Freights');
  }
};
