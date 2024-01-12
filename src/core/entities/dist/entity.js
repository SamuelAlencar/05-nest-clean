"use strict";
exports.__esModule = true;
exports.Entity = void 0;
var unique_entity_id_1 = require("./unique-entity-id");
var Entity = /** @class */ (function () {
    function Entity(props, id) {
        this.props = props;
        this._id = id !== null && id !== void 0 ? id : new unique_entity_id_1.UniqueEntityID();
    }
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.equals = function (entity) {
        if (entity === this) {
            return true;
        }
        if (entity.id === this._id) {
            return true;
        }
        return false;
    };
    return Entity;
}());
exports.Entity = Entity;
