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
    allowNull: false,
  })
  weight!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  deliveryDate!: Date;

  // LatLng fields for "from" location
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  fromLatitude!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  fromLongitude!: number;

  // LatLng fields for "to" location
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  toLatitude!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  toLongitude!: number;

  // Driver's ID field
  @Column({
    type: DataType.UUID, 
    allowNull: true, 
  })
  driverId!: string;
 
 // Association with User model
 @ForeignKey(() => User)
 @Column({
   type: DataType.UUID,
   allowNull: false,
 })
 userId!: string;

 @BelongsTo(() => User)
 user!: User;


  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
