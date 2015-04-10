System.register(["aurelia-framework", "aurelia-event-aggregator"], function (_export) {
  "use strict";

  var Behavior, EventAggregator, _prototypeProperties, _classCallCheck, CheckBox;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CheckBox = _export("CheckBox", (function () {
        function CheckBox(eventAggregator) {
          _classCallCheck(this, CheckBox);

          this.eventAggregator = eventAggregator;
        }

        _prototypeProperties(CheckBox, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("check-box").withProperty("checked").withProperty("name");
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
              this.checked = !this.checked;
              this.eventAggregator.publish("" + this.name + "Changed", this.checked);
            },
            writable: true,
            configurable: true
          }
        });

        return CheckBox;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoZWNrLWJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsZUFBZSx5Q0FFVixRQUFROzs7QUFIYixjQUFRLHFCQUFSLFFBQVE7O0FBQ1IscUJBQWUsMkJBQWYsZUFBZTs7Ozs7OztBQUVWLGNBQVE7QUFTTixpQkFURixRQUFRLENBU0wsZUFBZTtnQ0FUbEIsUUFBUTs7QUFVYixjQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUMxQzs7NkJBWFEsUUFBUTtBQUNWLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2QscUJBQU8sUUFBUSxDQUNWLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FDMUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUN2QixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0I7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFLN0Msc0JBQVk7bUJBQUEsd0JBQUc7QUFDWCxrQkFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDN0Isa0JBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxNQUFJLElBQUksQ0FBQyxJQUFJLGNBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFOzs7Ozs7ZUFoQlEsUUFBUSIsImZpbGUiOiJlbGVtZW50cy9jaGVjay1ib3guanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==