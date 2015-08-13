
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
            this._binder.bind(...arguments);
        }

        unbind() {
            this._binder.unbind(...arguments);
        }
    }

    return new Binding();
}

export const Binding = CreateBindingHolder();

 class DomReacherController {
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

export const DomReacher = new DomReacherController();
