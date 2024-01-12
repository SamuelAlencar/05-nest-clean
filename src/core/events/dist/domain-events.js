"use strict";
exports.__esModule = true;
exports.DomainEvents = void 0;
var DomainEvents = /** @class */ (function () {
    function DomainEvents() {
    }
    DomainEvents.markAggregateForDispatch = function (aggregate) {
        var aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);
        if (!aggregateFound) {
            this.markedAggregates.push(aggregate);
        }
    };
    DomainEvents.dispatchAggregateEvents = function (aggregate) {
        var _this = this;
        aggregate.domainEvents.forEach(function (event) { return _this.dispatch(event); });
    };
    DomainEvents.removeAggregateFromMarkedDispatchList = function (aggregate) {
        var index = this.markedAggregates.findIndex(function (a) { return a.equals(aggregate); });
        this.markedAggregates.splice(index, 1);
    };
    DomainEvents.findMarkedAggregateByID = function (id) {
        return this.markedAggregates.find(function (aggregate) { return aggregate.id.equals(id); });
    };
    DomainEvents.dispatchEventsForAggregate = function (id) {
        var aggregate = this.findMarkedAggregateByID(id);
        if (aggregate) {
            this.dispatchAggregateEvents(aggregate);
            aggregate.clearEvents();
            this.removeAggregateFromMarkedDispatchList(aggregate);
        }
    };
    DomainEvents.register = function (callback, eventClassName) {
        var wasEventRegisteredBefore = eventClassName in this.handlersMap;
        if (!wasEventRegisteredBefore) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
    };
    DomainEvents.clearHandlers = function () {
        this.handlersMap = {};
    };
    DomainEvents.clearMarkedAggregates = function () {
        this.markedAggregates = [];
    };
    DomainEvents.dispatch = function (event) {
        var eventClassName = event.constructor.name;
        var isEventRegistered = eventClassName in this.handlersMap;
        if (isEventRegistered) {
            var handlers = this.handlersMap[eventClassName];
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                handler(event);
            }
        }
    };
    DomainEvents.handlersMap = {};
    DomainEvents.markedAggregates = [];
    return DomainEvents;
}());
exports.DomainEvents = DomainEvents;
