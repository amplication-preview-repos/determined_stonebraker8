import { Property } from "../property/Property";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  properties?: Array<Property>;
};
