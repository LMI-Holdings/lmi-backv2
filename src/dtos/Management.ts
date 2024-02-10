import { UUID } from 'crypto';

export interface TruckDetails {
    id : UUID;
    userId : UUID;
    driverId : UUID;
    truckId : UUID;  
    truckRegNumber : string;
    name : string;
    volume : number;
}

export interface DriverDetails {
    id : UUID;
    userId : UUID;
    firstName : string;
    lastName : string;
    email : string;
    phoneNumber : string;
}

export interface WarehouseDetails {
    id: string;
    volume: number;
    locationLatLng: string;
    address: string;
    capacityStatus: string;
    userId: string;
    created_at: Date;
    updated_at: Date;
  }
  