'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var typeorm_1 = require('typeorm');
var dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
var dataSource = new typeorm_1.DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['./dist/src/models/*.js'],
  migrations: ['./dist/migrations/*.js']
});
exports.default = dataSource;
//# sourceMappingURL=dbconfig.js.map
