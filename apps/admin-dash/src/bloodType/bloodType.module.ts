import { Module } from "@nestjs/common";
import { BloodTypeModuleBase } from "./base/bloodType.module.base";
import { BloodTypeService } from "./bloodType.service";
import { BloodTypeController } from "./bloodType.controller";
import { BloodTypeResolver } from "./bloodType.resolver";

@Module({
  imports: [BloodTypeModuleBase],
  controllers: [BloodTypeController],
  providers: [BloodTypeService, BloodTypeResolver],
  exports: [BloodTypeService],
})
export class BloodTypeModule {}
