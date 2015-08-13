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
