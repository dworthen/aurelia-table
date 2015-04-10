System.register(["aurelia-framework", "aurelia-event-aggregator"], function (_export) {
  "use strict";

  var Behavior, EventAggregator, _prototypeProperties, _classCallCheck, SelectBox;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SelectBox = _export("SelectBox", (function () {
        function SelectBox(eventAggregator) {
          _classCallCheck(this, SelectBox);

          this.eventAggregator = eventAggregator;
          this.value = "";
        }

        _prototypeProperties(SelectBox, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("select-box").withProperty("options").withProperty("name");
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

        return SelectBox;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NlbGVjdC1ib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLGVBQWUseUNBRVYsU0FBUzs7O0FBSGQsY0FBUSxxQkFBUixRQUFROztBQUNSLHFCQUFlLDJCQUFmLGVBQWU7Ozs7Ozs7QUFFVixlQUFTO0FBU1AsaUJBVEYsU0FBUyxDQVNOLGVBQWU7Z0NBVGxCLFNBQVM7O0FBVWQsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7OzZCQVpRLFNBQVM7QUFDWCxrQkFBUTttQkFBQSxvQkFBRztBQUNkLHFCQUFPLFFBQVEsQ0FDVixhQUFhLENBQUMsWUFBWSxDQUFDLENBQzNCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FDdkIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdCOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTTdDLHNCQUFZO21CQUFBLHdCQUFHO0FBQ1gsa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxNQUFJLElBQUksQ0FBQyxJQUFJLGNBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25FOzs7Ozs7ZUFoQlEsU0FBUyIsImZpbGUiOiJlbGVtZW50cy9zZWxlY3QtYm94LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=