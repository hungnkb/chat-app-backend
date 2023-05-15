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
exports.Rooms = void 0;
var typeorm_1 = require('typeorm');
var room_members_entity_1 = require('./room_members.entity');
var RoomEnum;
(function (RoomEnum) {
  RoomEnum[(RoomEnum['ROOM_PAIR'] = 0)] = 'ROOM_PAIR';
  RoomEnum[(RoomEnum['ROOM_GROUP'] = 1)] = 'ROOM_GROUP';
})(RoomEnum || (RoomEnum = {}));
var Rooms = (exports.Rooms = /** @class */ (function () {
  function Rooms() {}
  __decorate(
    [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
    Rooms.prototype,
    'id',
    void 0
  );
  __decorate(
    [(0, typeorm_1.Column)({ nullable: true }), __metadata('design:type', String)],
    Rooms.prototype,
    'name',
    void 0
  );
  __decorate([(0, typeorm_1.Column)(), __metadata('design:type', Number)], Rooms.prototype, 'category', void 0);
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
    Rooms.prototype,
    'createdAt',
    void 0
  );
  __decorate(
    [
      (0, typeorm_1.OneToMany)(
        function () {
          return room_members_entity_1.RoomMember;
        },
        function (roomMember) {
          return roomMember.id;
        }
      ),
      __metadata('design:type', Array)
    ],
    Rooms.prototype,
    'roomMember',
    void 0
  );
  Rooms = __decorate([(0, typeorm_1.Entity)()], Rooms);
  return Rooms;
})());
//# sourceMappingURL=rooms.entity.js.map
