import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyUpdateInput = {
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};
