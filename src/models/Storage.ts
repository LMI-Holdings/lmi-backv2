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
import { User } from './User'; // Import the User model
import Warehouse from './Warehouse';

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
    type: DataType.STRING,
    allowNull: true,
  })
  warehouseId!: string;

  @BelongsTo(() => Warehouse)
  warehouse!: Warehouse;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  packageVolume!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  packageWeight!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  packageType!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true, // Allow null for the userId field
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}

export default Storage;
