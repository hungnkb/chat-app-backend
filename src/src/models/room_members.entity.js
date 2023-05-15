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
exports.RoomMember = void 0;
var typeorm_1 = require('typeorm');
var rooms_entity_1 = require('./rooms.entity');
var users_entity_1 = require('./users.entity');
var RoomMember = (exports.RoomMember = /** @class */ (function () {
  function RoomMember() {}
  __decorate(
    [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
    RoomMember.prototype,
    'id',
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
    RoomMember.prototype,
    'room',
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
    RoomMember.prototype,
    'user',
    void 0
  );
  RoomMember = __decorate([(0, typeorm_1.Entity)()], RoomMember);
  return RoomMember;
})());
//# sourceMappingURL=room_members.entity.js.map
