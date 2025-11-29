import { Module, Global } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Global()
@Module({
  providers: [
    {
      provide: "PRISMA",
      useValue: new PrismaClient({
        log: ["info", "warn", "error"],
      }),
    },
  ],
  exports: ["PRISMA"],
})
export class PrismaModule {}
