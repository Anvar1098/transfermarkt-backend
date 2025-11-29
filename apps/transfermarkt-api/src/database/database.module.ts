// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
//   async onModuleInit() {
//     await this.$connect(); // connect Prisma when app starts
//     console.log(' Database connected successfully');
//   }

//   async onModuleDestroy() {
//     await this.$disconnect(); // disconnect when app shuts down
//   }
// }
