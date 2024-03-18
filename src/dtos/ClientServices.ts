import { UUID } from 'crypto';
import Warehouse from '../models/Warehouse';
import { Freight } from '../models/Freight';
import { User } from '../models/User';

export interface FreightDetails {
  id: UUID;
  userId: string;
  companyName: string | null;
  shipmentType: string;
  weight: number;
  deliveryDate: Date;
  pickupLocation: {
      latitude: number;
      longitude: number;
  };
  dropoffLocation: {
    latitude: number;
    longitude: number;
  };
  pickupAdditionalInfo: string | null;
  dropoffAdditionalInfo: string | null;
  driverId: string | null;
  status: string;
  needStorageOption: boolean;
  storageServiceId: string | null;
  created_at: Date;
  updated_at: Date;
}


export interface OverseasLogisticsDetails {
  id: string;
  userId: string;
  pickupAdditionalInfo: string | null;
  dropoffAdditionalInfo: string | null;
  packageType: string;
  quantity: string;
  weight: string;
  contactPerson: string;
  bankStatementAttachment: string | null;
  needStorageOption: boolean;
  pickupLocation: {
      latitude: number;
      longitude: number;
  };
  dropoffLocation: {
      latitude: number;
      longitude: number;
  };
  status: string;
  created_at: Date;
  updated_at: Date;
}


export interface StepperAttributes {
  id: string;
  warehouseId: string | null;
  storageId: string | null;
  freightserviceId: string | null;
  overseasId: string | null;
  service: string | null;
  request_approved: string | null;
  request_confirmed: string | null;
  request_started: string | null;
  request_completed: string | null;
  payment_made: string | null;
  overseas_arrived: string | null;
  clearance_complete: string | null;
  transport: string | null;
  delivered: string | null;
  warehouse_status: string | null;
  userId: string | null;
  created_at: Date;
  updated_at: Date;
}

  

export interface StorageDetails {
  id: string;
  warehouseId: string;
  // warehouse: Warehouse; // Assuming you have a Warehouse interface
  freightserviceId: string;
  // freightservice: Freight; // Assuming you have a Freight interface
  region: string;
  packageType: string;
  quantity: string;
  weight: string;
  contactPerson: string;
  deliveryServiceNeeded: boolean;
  warehouseLocation: {
      latitude: number;
      longitude: number;
  };
  status: string;
  userId: string;
  // user: User; // Assuming you have a User interface
  created_at: Date;
  updated_at: Date;
}

  