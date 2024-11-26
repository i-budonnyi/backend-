import { Module } from "@nestjs/common";
import { AmbassadorService } from "./ambassador.service";
import { AmbassadorController } from "./ambassador.controller";
import { AmbassadorResolver } from "./ambassador.resolver";

@Module({
  controllers: [AmbassadorController],
  providers: [AmbassadorService, AmbassadorResolver],
  exports: [AmbassadorService],
})
export class AmbassadorModule {}
