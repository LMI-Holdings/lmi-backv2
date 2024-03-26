import { Model, Table, Column, ForeignKey, BelongsTo, DataType, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Warehouse } from './Warehouse'; // Import the Warehouse model
import { Freight } from './Freight'; // Import the DeliveryService model
import { UUID } from 'sequelize';
import { User } from './User';
import { UUIDV4 } from 'sequelize';

@Table
export class Storage extends Model {

  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true,
  })
  id!: string;

  @ForeignKey(() => Warehouse)
  @Column({
    allowNull: true,
    type: DataType.UUID, // Assuming UUID type for the warehouseId
  })
  warehouseId!: string;

  @BelongsTo(() => Warehouse)
  warehouse!: Warehouse;

  @ForeignKey(() => Freight)
  @Column({
    allowNull: true,
    type: DataType.UUID, // Assuming UUID type for the deliveryServiceId
  })
  freightserviceId!: string;

  @BelongsTo(() => Freight)
  freightservice!: Freight;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  region!: string;

  @Column({
    allowNull: true,
    type: DataType.FLOAT
  })
  billing!: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  packageType!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  quantity!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  weight!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  contactPerson!: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  deliveryServiceNeeded!: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB, // Assuming JSONB type for the warehouseLocation
  })
  warehouseLocation!: {
    latitude: number;
    longitude: number;
  };

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  status!: string;

   // Association with User model
 @ForeignKey(() => User)
 @Column({
   type: DataType.UUID,
   allowNull: true,
 })
 userId!: string;

 @BelongsTo(() => User)
 user!: User;


  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
