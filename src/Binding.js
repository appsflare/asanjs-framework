export class NoOpBinder {
    configure() {

    }

    bind() {

    }

    unbind() {

    }


}

function CreateBindingHolder() {
    class Binding {

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
            return this._binder.bind(...arguments);
        }

        unbind() {
            this._binder.unbind(...arguments);
        }
    }

    return new Binding();
}

export const Binding = CreateBindingHolder();
