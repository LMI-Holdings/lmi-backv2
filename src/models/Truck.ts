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
import { Driver } from './Driver'; // Import the Driver model
import { User } from './User'; // Import the User model

@Table
export class Truck extends Model {
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
  truckRegNumber!: string;

  @Column
  name!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  volume!: number;

  // Association with Driver model
  @ForeignKey(() => Driver)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  truckId!: string;

  @BelongsTo(() => Driver)
  driver!: Driver;

  // Association with User model
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  // Add any other fields needed for freight purposes

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

export default Truck;
