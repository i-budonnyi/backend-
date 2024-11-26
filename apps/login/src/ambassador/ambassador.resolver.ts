import * as graphql from "@nestjs/graphql";
import { AmbassadorService } from "./ambassador.service";

export class AmbassadorResolver {
  constructor(protected readonly service: AmbassadorService) {}
}
