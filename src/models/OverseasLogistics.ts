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
import { Freight } from './Freight';
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

  // Customs Documentation fields
  @Column({
    allowNull: true,
  })
  customsDeclarationNumber!: string;

  @Column({
    allowNull: true,
  })
  customsClearanceStatus!: string;

  // Link to Freight Service
  @ForeignKey(() => Freight)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  shipmentId!: string;


  // Link to User Service
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  userId!: string;

  @BelongsTo(() => Freight)
  shipment!: Freight;

  // Movement Direction
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  movement! : string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  shipmentFrom! : string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  storageId! : string;
  
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  country! : string;
 
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  city! : string;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true
  })
  arrived! : boolean;
  
  @Column({
    type: DataType.JSON,
    allowNull: true
  })
  seaShipDetails! : JSON;

  // Additional Details
  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
