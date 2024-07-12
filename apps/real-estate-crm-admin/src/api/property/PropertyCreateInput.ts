import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyCreateInput = {
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agent?: AgentWhereUniqueInput | null;
};
