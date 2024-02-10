import { UUID } from "crypto";
import { UUIDV4 } from "sequelize";
import { AutoIncrement, Column, CreatedAt, DataType, DeletedAt, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table
export class Otp extends Model {

    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        unique: true
    })
    id!: string;

    @Column
    code!: string

    @Column
    expiry!: Date

    @Column
    email!: string

    @CreatedAt
    created_at!: Date

    @UpdatedAt
    updated_at!: Date

    @DeletedAt
    deleted_at!: Date

}