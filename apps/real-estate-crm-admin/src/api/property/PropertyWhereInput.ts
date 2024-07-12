import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";

export type PropertyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  agent?: AgentWhereUniqueInput;
};
