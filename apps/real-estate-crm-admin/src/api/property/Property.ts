import { Appointment } from "../appointment/Appointment";
import { Agent } from "../agent/Agent";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  price: number | null;
  status?: "Option1" | null;
  address: string | null;
  appointments?: Array<Appointment>;
  agent?: Agent | null;
};
