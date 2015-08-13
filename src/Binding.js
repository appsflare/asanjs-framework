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
        this._binder.configure(...arguments);
    }

    bind() {
        this._binder.bind(...arguments);
    }

    unbind() {
        this._binder.unbind(...arguments);
    }
}
