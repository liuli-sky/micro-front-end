import App from './App.vue';
import { createApp } from 'vue';
import router from './router';

import { qiankunWindow, renderWithQiankun, type QiankunProps } from 'vite-plugin-qiankun/dist/helper';


let microRouter = null;
let app: any = null;

function render(props?: QiankunProps) {
    microRouter = router;
    app = createApp(App);
    app.use(microRouter)
    app.mount(props?.container ? props?.container.querySelector('#container') : '#container');
}

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}

renderWithQiankun(
  {
    bootstrap: () => {
        console.log('[vue] vue app bootstraped');
    },
    mount: (props: QiankunProps) => {
        console.log('[vue] props from main framework', props);
        render(props);
    },
    unmount: (props: QiankunProps) => {
        window.console.log('unmount', props);
        app.unmount();
        microRouter = null;
    },
    update: (props: QiankunProps) => {
        window.console.log('update');
    }
  }
)