import { Model, Table, Column, DataType, PrimaryKey, BelongsTo, CreatedAt, ForeignKey, UpdatedAt } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import { User } from './User';

@Table
export class OverseasLogistics extends Model {

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
    type: DataType.STRING,
  })
  pickupAdditionalInfo!: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  dropoffAdditionalInfo!: string;

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
    type: DataType.FLOAT
  })
  billing!: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  bankStatementAttachment!: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  needStorageOption!: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
  })
  pickupLocation!: {
    latitude: number;
    longitude: number;
  };

  @Column({
    allowNull: true,
    type: DataType.JSONB,
  })
  dropoffLocation!: {
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
