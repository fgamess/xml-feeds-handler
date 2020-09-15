// "use strict";

// var _vue = _interopRequireDefault(require("vue"));

// var _App = _interopRequireDefault(require("./App"));

// var _ProductFeedForm = _interopRequireDefault(require("./components/ProductFeedForm"));

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// var FeedProcessingStore = /*#__PURE__*/function () {
//   function FeedProcessingStore() {
//     _classCallCheck(this, FeedProcessingStore);

//     this.state = {
//       beforeFeedProcessing: true,
//       readyToProcess: false,
//       feedProcessing: false,
//       feedProcessed: false
//     };
//   }

//   _createClass(FeedProcessingStore, [{
//     key: "toggleBeforeFeedprocessing",
//     value: function toggleBeforeFeedprocessing() {
//       this.state.beforeFeedProcessing = !this.state.beforeFeedProcessing;
//     }
//   }, {
//     key: "toggleReadyToProcess",
//     value: function toggleReadyToProcess() {
//       this.state.readyToProcess = !this.state.readyToProcess;
//     }
//   }, {
//     key: "toggleFeedProcessing",
//     value: function toggleFeedProcessing() {
//       this.state.feedProcessing = !this.state.feedProcessing;
//     }
//   }, {
//     key: "toggleFeedProcessed",
//     value: function toggleFeedProcessed() {
//       this.state.feedProcessed = !this.state.feedProcessed;
//     }
//   }]);

//   return FeedProcessingStore;
// }();

// var feed_processing_store = new FeedProcessingStore();
// var EventBus = new _vue["default"]();
// Object.defineProperties(_vue["default"].prototype, {
//   $bus: {
//     get: function get() {
//       return EventBus;
//     }
//   }
// });
// var testComponent = {
//   props: ['rootState'],
//   components: {
//     ProductFeedForm: _ProductFeedForm["default"]
//   },
//   data: function data() {
//     return {
//       beforeFeedProcessing: this.rootState.beforeFeedProcessing,
//       message: 'mon message 2'
//     };
//   },
//   template: "<div> <ProductFeedForm v-if=\"beforeProcessing\"/></div>"
// };
// /* eslint-disable no-new */

// var vm = new _vue["default"]({
//   el: '#app',
//   delimiters: ['${', '}'],
//   components: {
//     App: _App["default"]
//   },
//   data: {
//     rootState: feed_processing_store.state,
//     feedProcessingStore: feed_processing_store
//   }
// });