import { Model, Table, Column, ForeignKey, BelongsTo, DataType, PrimaryKey, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Warehouse } from './Warehouse'; // Import the Warehouse model
import { Freight } from './Freight'; // Import the DeliveryService model
import { Storage } from './Storage'; // Import the DeliveryService model
import { UUIDV4 } from 'sequelize';
import { User } from './User';
import { OverseasLogistics } from './OverseasLogistics';

@Table
export class Stepper extends Model {

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
  
  //  Storage
  @ForeignKey(() => Storage)
  @Column({
    allowNull: true,
    type: DataType.UUID, // Assuming UUID type for the warehouseId
  })
  storageId!: string;

  @BelongsTo(() => Storage)
  storage!: Storage;

  //  Freight
  @ForeignKey(() => Freight)
  @Column({
      allowNull: true,
      type: DataType.UUID, // Assuming UUID type for the deliveryServiceId
    })
    freightserviceId!: string;
    
    @BelongsTo(() => Freight)
    freightservice!: Freight;
    
    //  Overseas
    @ForeignKey(() => OverseasLogistics)
    @Column({
    allowNull: true,
    type: DataType.UUID, // Assuming UUID type for the deliveryServiceId
  })
  overseasId!: string;

  @BelongsTo(() => OverseasLogistics)
  overseas!: OverseasLogistics;

  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  service!: string;
 
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  request_approved!: string;
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  request_confirmed!: string;
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  request_started!: string;
 
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  request_completed!: string;
 
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  payment_made!: string;
 
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  overseas_arrived!: string;
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  clearance_complete!: string;
  
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  transport!: string;
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  delivered!: string;
  
  @Column({
    allowNull: true,
    type: DataType.STRING,
  })
  warehouse_status!: string;

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
