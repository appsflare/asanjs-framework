
export class NoOpBinder {
    configure() {

    }

    bind() {

    }

    unbind() {

    }


}

export class Binding {

    constructor() {
        this.use(new NoOpBinder());
    }

    use(binder) {
        this._binder = binder;
    }

    configure() {
        this._binder.configure.apply(this, arguments);
    }

    bind() {
        this._binder.bind.apply(this, arguments);
    }

    unbind() {
        this._binder.unbind.apply(this, arguments);
    }
}
export class DomReacher {
    constructor() {
        this.adapters = [];
    }

    install(adapter) {
        if (!adapter.name) {
            throw new TypeError("Argument 'adapter' is not a valid adapter instance. An valid adaper would have a property named 'name'.");
        }
        if (!adapter.reach) {
            throw new TypeError("Argument 'adapter' is not a valid adapter instance. An valid adaper would have a method named 'reach'.");
        };

        this.adapters.push(adapter);
    }

    uninstall(name) {
        var index = this.adapters.findIndex(i => i.name == name);
        this.adapters.splice(index, 1);
    }

    uninstallAll(name) {
        this.adapters = [];
    }

    reach(controller, element) {
        for (var adapter of this.adapters) {
            adapter.reach(controller, element);
        }
    }
}
