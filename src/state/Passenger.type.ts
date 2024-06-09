export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

interface Address {
  street: string;
  number: string | number;
  city: string;
  neighborhood: string;
  other?: string;
}

interface Contact {
  phoneNumber: string;
  email: string;
  address: Address;
}

interface Identification {
  type: string;
  number: string | number;
  country: string;
}

export interface Passenger {
  firstName: string;
  lastName: string;
  identification: Identification;
  age: number;
  gender: Gender;
  contact: Contact;
}

interface Company {
  companyName: string;
  cuit: string;
}

export interface ResponsiblePassenger extends Passenger {
  company?: Company;
}

interface Agreements {
  termsCondition: boolean;
  newsletter: boolean;
}

export interface TripDataForm2 {
  responsible: ResponsiblePassenger;
  passengers: Passenger[];
  agreements: Agreements;
}
