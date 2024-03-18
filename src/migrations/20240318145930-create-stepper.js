'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Storages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true
      },
      warehouseId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Warehouses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      storageId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Storages',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      freightserviceId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Freights',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      overseasId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'OverseasLogistics',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      service: {
        allowNull: true,
        type: Sequelize.STRING
      },
      request_approved: {
        allowNull: true,
        type: Sequelize.STRING
      },
      request_confirmed: {
        allowNull: true,
        type: Sequelize.STRING
      },
      request_started: {
        allowNull: true,
        type: Sequelize.STRING
      },
      request_completed: {
        allowNull: true,
        type: Sequelize.STRING
      },
      payment_made: {
        allowNull: true,
        type: Sequelize.STRING
      },
      overseas_arrived: {
        allowNull: true,
        type: Sequelize.STRING
      },
      clearance_complete: {
        allowNull: true,
        type: Sequelize.STRING
      },
      transport: {
        allowNull: true,
        type: Sequelize.STRING
      },
      delivered: {
        allowNull: true,
        type: Sequelize.STRING
      },
      warehouse_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Storages');
  }
};
