// 1.引入G2
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

let antv = null;

// 2.创建图表对象
let createChart = (options) => {
    console.log('createChart:', options);
    antv = new G2.Chart(options);
};

// 3.处理数据
let handleData = (data) => {
    console.log('handleData:', data);

    // 需要dataset对数据进行二次加工
    if (data.config) {
        let ds = new DataSet();
        let dv = ds.createView().source(data.rows);
        dv.transform(data.config);

        antv.source(dv, data.cfg);
    } else {
        // 不需要二次加工，直接使用
        antv.source(data.rows, data.cfg);
    }
};

// 4. 配置图表 - Coord坐标系
let initChart = (coord, tooltip, axis, legend) => {
    // 如果有坐标系的参数
    if (coord) {
        console.log('coord:', coord);
        antv.coord(...coord);
    }

    // 如果有坐标系的参数
    if (tooltip) {
        console.log('tooltip:', tooltip);
        antv.tooltip(...tooltip);
    }

    // 如果有坐标系的参数
    if (axis) {
        console.log('axis:', axis);
        axis.forEach(value => {
            console.log('axis:', ...value);
            antv.axis(...value);
        });
    }

    // 如果有坐标系的参数
    if (legend) {
        console.log('legend:', legend);
        antv.legend(...legend);
    }
};

// 4.进行绘制
let drawChart = (options, x, y) => {
    console.log('drawChart:', options, x, y);
    options.forEach(value => {
        console.log('value:', value);
        let tmp = {};
        if (value.position) {
            tmp = antv[value.operation]().position(value.position);
        } else {
            tmp = antv[value.operation]().position(`${x}*${y}`);
        }

        if (value.color) tmp.color(...value.color);

        if (value.size) tmp.size(...value.size);

        if (value.shape) tmp.shape(...value.shape);

        if (value.opacity) tmp.opacity(...value.opacity);

        if (value.adjust) tmp.adjust(...value.adjust);

        if (value.label) tmp.label(...value.label);

        if (value.tooltip) tmp.tooltip(...value.tooltip);

        if (value.style) tmp.style(...value.style);
    });
};

// 5.渲染图表
let renderChart = () => {
    console.log('renderChart ok');
    antv.render();
};

// 6.图表整合
let chart = (id, chartData, settings) => {
    console.log('chart init:', settings, id);
    settings.option.container = id;

    createChart(settings.option);

    handleData(chartData);

    initChart(settings.coord, settings.tooltip, settings.axis, settings.legend);

    drawChart(settings.draw, settings.x, settings.y);

    renderChart();
};

export default chart;
