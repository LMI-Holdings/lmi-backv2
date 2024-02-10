import { UUID } from 'crypto';

export interface FreightDetails {
    id: UUID;
    userId: string;
    companyName: string;
    shipmentType: string;
    weight: number;
    deliveryDate: Date;
    fromLatitude: number;
    fromLongitude: number;
    toLatitude: number;
    toLongitude: number;
    driverId: string;
}


export interface OverseasLogisticsDetails {
    id: string;
    customsDeclarationNumber: string;
    customsClearanceStatus: string;
    shipmentId: string;
    movement: string;
    shipmentFrom?: string;
    storageId?: string;
    country?: string;
    city?: string;
    arrived?: boolean;
    seaShipDetails?: Record<string, any>;
    created_at: Date;
    updated_at: Date;
  }
  

  export interface StorageDetails {
    id: string;
    warehouseId?: number;
    storageVolume: number;
    storageWeight: number;
    storageType: string;
    userId?: string;
    created_at: Date;
    updated_at: Date;
  }
  