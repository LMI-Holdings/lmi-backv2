import { UUID } from 'crypto';

export enum ROLE {
  ADMIN="ADMIN",
  USER="USER"
}

export interface IOtp {
    id?: UUID;
    code: string;
    expiry: Date;
    email: string;
  }


export interface IVerifyOtp {
    email: string,
    code: string
}


export interface IUser {
  id?: UUID;
  first_name: string;
  last_name?: string;
  email: string;
  password: string;
  organization?: string;
  role?: string;
  description?: string;
  phone_number?: string;
  isAdmin?: boolean
}

export interface LoginRequest {
  email: string,
  password: string
}