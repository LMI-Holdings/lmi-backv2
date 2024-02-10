import { UUIDV4 } from 'sequelize';
import {
  Column,
  Table,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  HasOne,
} from 'sequelize-typescript';
import { Truck } from './Truck'; // Import the Truck model

@Table
export class Driver extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true,
  })
  id!: string;

  @Column({
    allowNull: false,
  })
  firstName!: string;

  @Column({
    allowNull: false,
  })
  lastName!: string;

  @Column({
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    allowNull: false,
  })
  phoneNumber!: string;

  // Association with Truck model
  @HasOne(() => Truck)
  truck!: Truck;

  // Add any other fields needed for the Driver model

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

export default Driver;
