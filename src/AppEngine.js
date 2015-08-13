import { Binding } from './Binding';
import { DomReacher } from './DomReacher';

let contexts = {};
export class AppEngine {

    constructor() {
        this.active = false;
        this.binding = new Binding();
        this.domReacher = new DomReacher();
    }

    activate() {
        this.active = true;
        AppEngine.current = this;
    }


    deActivate() {
        this.active = false;
        if (AppEngine.current) {
            AppEngine.current.deActivate();
        }
        AppEngine.current = this;
    }

    use(plugin) {
        plugin.install(this);
    }

    static switchTo(appName){
        var context = contexts[appName || 'default'];
        context && context.activate();
        return context;
    }

    static start(appName) {
        return contexts[appName || 'default'] = new AppEngine();
    }

    static get(appName) {
        return contexts[appName || 'default'] = new AppEngine();
    }

}
