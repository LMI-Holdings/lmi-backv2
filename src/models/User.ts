import { UUIDV4 } from 'sequelize';
import { UUID } from 'crypto';
import {
    Column,
    Table,
    Model,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    DataType,
  } from 'sequelize-typescript';
import { ROLE } from '../dtos/Auth';
  
  @Table
  export class User extends Model {
    
    @PrimaryKey
    @Column({
      type: DataType.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      unique: true
    })
    id!: string;
  
    @Column({
      allowNull: false
    })
    first_name!: string;
  
    @Column
    last_name!: string;
  
    @Column({
      unique: true,
      allowNull: false
    })
    email!: string;
  
    @Column({
      allowNull: false
    })
    password!: string;
  
    @Column
    organization!: string;

    @Column({
      type: DataType.ENUM(...Object.values(ROLE)),
      allowNull: false,
      defaultValue: ROLE.USER,
    })
    role!: string;
    
    @Column
    description!: string

    @Column
    phone_number!: string

    @Column({
      allowNull: false,
      defaultValue: false
    })
    isAdmin!: boolean

    @Column
    is_verified!: boolean
  
    @CreatedAt
    created_at!: Date;
  
    @UpdatedAt
    updated_at!: Date;
  
    @DeletedAt
    deleted_at!: Date;
  }
  