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
exports.Seens = void 0;
var typeorm_1 = require('typeorm');
var users_entity_1 = require('./users.entity');
var messages_entity_1 = require('./messages.entity');
var Seens = (exports.Seens = /** @class */ (function () {
  function Seens() {}
  __decorate(
    [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
    Seens.prototype,
    'id',
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
    Seens.prototype,
    'seenAt',
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
    Seens.prototype,
    'user',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.ManyToOne)(
        function () {
          return messages_entity_1.Messages;
        },
        function (messages) {
          return messages.id;
        }
      ),
      __metadata('design:type', messages_entity_1.Messages)
    ],
    Seens.prototype,
    'message',
    void 0
  );
  Seens = __decorate([(0, typeorm_1.Entity)()], Seens);
  return Seens;
})());
//# sourceMappingURL=seens.entity.js.map
