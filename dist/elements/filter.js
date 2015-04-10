System.register(["aurelia-framework", "aurelia-event-aggregator"], function (_export) {
  "use strict";

  var Behavior, EventAggregator, _prototypeProperties, _classCallCheck, Filter;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Filter = _export("Filter", (function () {
        function Filter(eventAggregator) {
          _classCallCheck(this, Filter);

          this.eventAggregator = eventAggregator;
        }

        _prototypeProperties(Filter, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("filter").withProperty("value").withProperty("placeholder").withProperty("name");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged() {
              this.eventAggregator.publish("" + this.name + "Changed", this.value);
            },
            writable: true,
            configurable: true
          }
        });

        return Filter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsZUFBZSx5Q0FFVixNQUFNOzs7QUFIWCxjQUFRLHFCQUFSLFFBQVE7O0FBQ1IscUJBQWUsMkJBQWYsZUFBZTs7Ozs7OztBQUVWLFlBQU07QUFVSixpQkFWRixNQUFNLENBVUgsZUFBZTtnQ0FWbEIsTUFBTTs7QUFXWCxjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUMxQzs7NkJBWlEsTUFBTTtBQUNSLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2QscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FDdkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsYUFBYSxDQUFDLENBQzNCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3Qjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUFFOzs7OztBQUs3QyxzQkFBWTttQkFBQSx3QkFBRztBQUNYLGtCQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sTUFBSSxJQUFJLENBQUMsSUFBSSxjQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuRTs7Ozs7O2VBaEJRLE1BQU0iLCJmaWxlIjoiZWxlbWVudHMvZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=