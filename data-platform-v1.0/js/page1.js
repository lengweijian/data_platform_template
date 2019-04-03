// 路径配置
require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
// 使用
require(
	[
		'echarts',
		'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
		'echarts/chart/map',
		'echarts/chart/pie'
	],
	function(ec) {
		var echarts_1 = ec.init(document.getElementById('container_1'));
		var option_1 = {

			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data: ['趣店', '华兴', '担保公司', '华悦', '其它']
			},
			calculable: true,
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: '55%',
				center: ['50%', '60%'],
				data: [{
						value: 335,
						name: '趣店'
					},
					{
						value: 310,
						name: '华兴'
					},
					{
						value: 234,
						name: '担保公司'
					},
					{
						value: 135,
						name: '华悦'
					},
					{
						value: 1548,
						name: '其它'
					}
				]
			}]
		};
		echarts_1.setOption(option_1);
		/************************年龄占比start***************************/
		var myChart_ages = ec.init(document.getElementById('container_2'));
		var option_2 = null;
		option_2 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'left',
				data: ['趣店', '华兴', '担保公司', '华悦', '其它']
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: false,
						position: 'center'
					},
					emphasis: {
						show: true,
						textStyle: {
							fontSize: '30',
							fontWeight: 'bold'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: 335,
						name: '趣店'
					},
					{
						value: 310,
						name: '华兴'
					},
					{
						value: 234,
						name: '担保公司'
					},
					{
						value: 135,
						name: '华悦'
					},
					{
						value: 1548,
						name: '其它'
					}
				]
			}]
		};
		myChart_ages.setOption(option_2);
		/************************年龄占比end***************************/

		/************************重适应屏幕***************************/
		window.addEventListener("resize", function() {
			/*			                myChart_province.resize();
			                myChart_sex.resize();
			                myChart_ages.resize();*/
			window.location.reload();
		});
	}

);

