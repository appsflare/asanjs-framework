"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoOpBinder = (function () {
    function NoOpBinder() {
        _classCallCheck(this, NoOpBinder);
    }

    NoOpBinder.prototype.configure = function configure() {};

    NoOpBinder.prototype.bind = function bind() {};

    NoOpBinder.prototype.unbind = function unbind() {};

    return NoOpBinder;
})();

exports.NoOpBinder = NoOpBinder;

function CreateBindingHolder() {
    var Binding = (function () {
        function Binding() {
            _classCallCheck(this, Binding);

            this.use(new NoOpBinder());
        }

        Binding.prototype.use = function use(binder) {
            this._binder = binder;
        };

        Binding.prototype.configure = function configure() {
            var _binder;

            (_binder = this._binder).configure.apply(_binder, arguments);
        };

        Binding.prototype.bind = function bind() {
            var _binder2;

            return (_binder2 = this._binder).bind.apply(_binder2, arguments);
        };

        Binding.prototype.unbind = function unbind() {
            var _binder3;

            (_binder3 = this._binder).unbind.apply(_binder3, arguments);
        };

        return Binding;
    })();

    return new Binding();
}

var Binding = CreateBindingHolder();

exports.Binding = Binding;

var DomReacherController = (function () {
    function DomReacherController() {
        _classCallCheck(this, DomReacherController);

        this.adapters = [];
    }

    DomReacherController.prototype.install = function install(adapter) {
        if (!adapter.name) {
            throw new TypeError("Argument 'adapter' is not a valid adapter instance. An valid adaper would have a property named 'name'.");
        }
        if (!adapter.reach) {
            throw new TypeError("Argument 'adapter' is not a valid adapter instance. An valid adaper would have a method named 'reach'.");
        };

        this.adapters.push(adapter);
    };

    DomReacherController.prototype.uninstall = function uninstall(name) {
        var index = this.adapters.findIndex(function (i) {
            return i.name == name;
        });
        this.adapters.splice(index, 1);
    };

    DomReacherController.prototype.uninstallAll = function uninstallAll(name) {
        this.adapters = [];
    };

    DomReacherController.prototype.reach = function reach(controller, element) {
        for (var _iterator = this.adapters, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }

            var adapter = _ref;

            adapter.reach(controller, element);
        }
    };

    return DomReacherController;
})();

var DomReacher = new DomReacherController();
exports.DomReacher = DomReacher;
