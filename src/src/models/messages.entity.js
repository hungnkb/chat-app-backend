'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Messages = void 0;
var typeorm_1 = require('typeorm');
var users_entity_1 = require('./users.entity');
var rooms_entity_1 = require('./rooms.entity');
var seens_entity_1 = require('./seens.entity');
var Messages = (exports.Messages = /** @class */ (function () {
  function Messages() {}
  __decorate(
    [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
    Messages.prototype,
    'id',
    void 0
  );
  __decorate(
    [(0, typeorm_1.Column)({ type: 'varchar', length: 5500 }), __metadata('design:type', String)],
    Messages.prototype,
    'body',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.Column)({
        type: 'bigint',
        default: function () {
          return new Date().getTime();
        }
      }),
      __metadata('design:type', Number)
    ],
    Messages.prototype,
    'createdAt',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.ManyToOne)(
        function () {
          return users_entity_1.Users;
        },
        function (users) {
          return users.id;
        }
      ),
      __metadata('design:type', users_entity_1.Users)
    ],
    Messages.prototype,
    'user',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.ManyToOne)(
        function () {
          return rooms_entity_1.Rooms;
        },
        function (rooms) {
          return rooms.id;
        }
      ),
      __metadata('design:type', rooms_entity_1.Rooms)
    ],
    Messages.prototype,
    'room',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.OneToMany)(
        function () {
          return seens_entity_1.Seens;
        },
        function (seens) {
          return seens.id;
        }
      ),
      __metadata('design:type', Array)
    ],
    Messages.prototype,
    'seen',
    void 0
  );
  Messages = __decorate([(0, typeorm_1.Entity)()], Messages);
  return Messages;
})());
//# sourceMappingURL=messages.entity.js.map
