"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = exports.PrismaClient = exports.$Enums = void 0;
const process = require("node:process");
const path = require("node:path");
const node_url_1 = require("node:url");
globalThis['__dirname'] = path.dirname((0, node_url_1.fileURLToPath)(import.meta.url));
const $Class = require("./internal/class.ts");
const Prisma = require("./internal/prismaNamespace.ts");
exports.Prisma = Prisma;
exports.$Enums = require("./enums.ts");
__exportStar(require("./enums.ts"), exports);
exports.PrismaClient = $Class.getPrismaClientClass(__dirname);
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/prisma/libquery_engine-darwin-arm64.dylib.node");
//# sourceMappingURL=client.js.map