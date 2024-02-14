import { UUIDV4 } from 'sequelize';
import {
  Column,
  Table,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './User';

@Table
export class Freight extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true,
  })
  id!: string;

  @Column({
    allowNull: true,
  })
  companyName!: string;

  @Column
  shipmentType!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  weight!: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deliveryDate!: Date;

  // Pickup location
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  pickupLocation!: {
    latitude: number;
    longitude: number;
  };

  // Drop-off location
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  dropoffLocation!: {
    latitude: number;
    longitude: number;
  };

  // Additional information for pickup
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  pickupAdditionalInfo!: string;

  // Additional information for drop-off
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  dropoffAdditionalInfo!: string;

  // Driver's ID field
  @Column({
    type: DataType.UUID, 
    allowNull: true, 
  })
  driverId!: string;

  // Status of the freight
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  status!: string;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  needStorageOption!: boolean;

  // ID of the selected storage service
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  storageServiceId!: string;
 
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
