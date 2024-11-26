import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AmbassadorService } from "./ambassador.service";

@swagger.ApiTags("ambassadors")
@common.Controller("ambassadors")
export class AmbassadorController {
  constructor(protected readonly service: AmbassadorService) {}
}
