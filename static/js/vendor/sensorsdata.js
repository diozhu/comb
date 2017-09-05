const load = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = 'http://static.sensorsdata.cn/sdk/1.6.18/sensorsdata.min.js';
    document.head.appendChild(script);
    init();
};
const init = () => {
    ((para) => {
        let n = para.name;
        window['sensorsDataAnalytic201505'] = n;
        window[n] = {
            _q: [],
            para: para
        };
    })({
        sdk_url: 'http://static.sensorsdata.cn/sdk/1.6.18/sensorsdata.min.js',
        name: 'sa',
        server_url: 'http://da.systoon.com/sa?project=default'
    });
};
if (!window.sa) {
    load();
} else {
    init();
}
