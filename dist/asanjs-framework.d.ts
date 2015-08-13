declare module 'asanjs-framework' {
  export class NoOpBinder {
    configure(): any;
    bind(): any;
    unbind(): any;
  }
  class Binding {
    constructor();
    use(binder: any): any;
    configure(): any;
    bind(): any;
    unbind(): any;
  }
  export const Binding: any;
  class DomReacherController {
    constructor();
    install(adapter: any): any;
    uninstall(name: any): any;
    uninstallAll(name: any): any;
    reach(controller: any, element: any): any;
  }
  export const DomReacher: any;
}