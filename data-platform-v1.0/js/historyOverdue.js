require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
require(
	[
		'echarts',
		'echarts/chart/line', // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
		'echarts/chart/bar'
	],
	function(ec) {
		var myChart = ec.init(document.getElementById('historyOverdue'));
		option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['历史逾期率']
			},
			toolbox: {
				show: false,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar', 'stack', 'tiled']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			dataZoom: {
				show: true,
				realtime: true,
				start: 40,
				end: 60
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				data: function() {
					var list = [];
					for(var i = 1; i <= 30; i++) {
						list.push('2013-03-' + i);
					}
					return list;
				}()
			}],
			yAxis: [{
				type: 'value',
				 min:0,
            	 max:20,
			}],
			series: [{
					name: '历史逾期率',
					type: 'line',
					smooth:true,  //这个是把线变成曲线
					data: function() {
						var list = [];
						for(var i = 1; i <= 30; i++) {
							list.push(Math.round(Math.random() * 10) + 5);
						}
						return list;
					}()
				}
			]
		};
		var ecConfig = require('echarts/config');

		function eConsole(param) {
			var mes = '【' + param.type + '】';
			if(typeof param.seriesIndex != 'undefined') {
				mes += '  seriesIndex : ' + param.seriesIndex;
				mes += '  dataIndex : ' + param.dataIndex;
			}
			if(param.type == 'hover') {
				document.getElementById('hover-console').innerHTML = 'Event Console : ' + mes;
			} else {
				document.getElementById('console').innerHTML = mes;
			}
			console.log(param);
		}
		/*
		// -------全局通用
		REFRESH: 'refresh',
		RESTORE: 'restore',
		RESIZE: 'resize',
		CLICK: 'click',
		DBLCLICK: 'dblclick',
		HOVER: 'hover',
		MOUSEOUT: 'mouseout',
		// -------业务交互逻辑
		DATA_CHANGED: 'dataChanged',
		DATA_ZOOM: 'dataZoom',
		DATA_RANGE: 'dataRange',
		DATA_RANGE_HOVERLINK: 'dataRangeHoverLink',
		LEGEND_SELECTED: 'legendSelected',
		LEGEND_HOVERLINK: 'legendHoverLink',
		MAP_SELECTED: 'mapSelected',
		PIE_SELECTED: 'pieSelected',
		MAGIC_TYPE_CHANGED: 'magicTypeChanged',
		DATA_VIEW_CHANGED: 'dataViewChanged',
		TIMELINE_CHANGED: 'timelineChanged',
		MAP_ROAM: 'mapRoam',
		*/
		//myChart.on(ecConfig.EVENT.CLICK, eConsole);
		//myChart.on(ecConfig.EVENT.DBLCLICK, eConsole);
		////myChart.on(ecConfig.EVENT.HOVER, eConsole);
		//myChart.on(ecConfig.EVENT.DATA_ZOOM, eConsole);
		//myChart.on(ecConfig.EVENT.LEGEND_SELECTED, eConsole);
		//myChart.on(ecConfig.EVENT.MAGIC_TYPE_CHANGED, eConsole);
		//myChart.on(ecConfig.EVENT.DATA_VIEW_CHANGED, eConsole);

		//使用制定的配置项和数据显示图表
		myChart.setOption(option);
	});