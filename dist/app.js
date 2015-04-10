System.register(["./data", "aurelia-event-aggregator"], function (_export) {
  "use strict";

  var Data, EventAggregator, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_data) {
      Data = _data.Data;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(data, eventAggregator) {
          _classCallCheck(this, App);

          this.eventAggregator = eventAggregator;
          this.filter = /./;
          this.filter2 = "";
          this.data = data.load();
          this.terms = Object.keys(this.data);
          this.selectedTerm = this.terms[0];
          this.pageInd = 1;
          this.pageSize = 2;
          this.pages = [];
          this.pageOptions = [2, 25, 50, 100, "All"];
          this.setPages();
          this.subscribe();
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Data, EventAggregator];
            },
            writable: true,
            configurable: true
          }
        }, {
          term: {
            get: function () {
              var _ref = this;
              var filter = _ref.filter;
              var filter2 = _ref.filter2;
              var pgInd = _ref.pageInd;
              var pgSize = _ref.pageSize;
              return this.data[this.selectedTerm].filter(function (el, ind) {
                return filter.test(el.name) && el.name.toLowerCase().includes(filter2.toLowerCase()) && ind >= (pgInd - 1) * (pgSize == Infinity ? 1 : pgSize) && ind < (pgInd - 1) * (pgSize == Infinity ? 1 : pgSize) + pgSize;
              });
            },
            configurable: true
          },
          setPages: {
            value: function setPages() {
              var numItems = this.data[this.selectedTerm].length;
              var numPages = this.pageSize !== Infinity ? Math.ceil(numItems / this.pageSize) : 1;
              var pages = [];
              for (var i = 0; i < numPages; i++) {
                pages = pages.concat(i + 1);
              }
              this.pageInd = this.pageInd <= pages.length ? this.pageInd : 1;
              this.pages = pages;
            },
            writable: true,
            configurable: true
          },
          changeTerm: {
            value: function changeTerm() {},
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe() {
              var _this = this;
              this.eventAggregator.subscribe("termOptionsChanged", function (term) {
                _this.selectedTerm = term;
                _this.setPages();
              });
              this.eventAggregator.subscribe("pageOptionsChanged", function (pageSize) {
                _this.pageSize = pageSize == "All" ? Infinity : pageSize;
                _this.setPages();
              });
              this.eventAggregator.subscribe("filterChanged", function (checked) {
                _this.filter = checked ? /One/ : /./;
              });
              this.eventAggregator.subscribe("searchChanged", function (search) {
                _this.filter2 = search;
              });
              this.eventAggregator.subscribe("pagesChanged", function (pageInd) {
                _this.pageInd = pageInd;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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