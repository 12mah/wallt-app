mui.init();
(function($, doc) {
	$.ready(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: 'ywj',
			text: '董事长 叶文洁'
		}, {
			value: 'aaa',
			text: '总经理 艾AA'
		}, {
			value: 'lj',
			text: '罗辑'
		}, {
			value: 'ymt',
			text: '云天明'
		}, {
			value: 'shq',
			text: '史强'
		}, {
			value: 'zhbh',
			text: '章北海'
		}, {
			value: 'zhy',
			text: '庄颜'
		}, {
			value: 'gyf',
			text: '关一帆'
		}, {
			value: 'zhz',
			text: '智子'
		}, {
			value: 'gezh',
			text: '歌者'
		}]);
		var inInsure = doc.getElementById('inInsure');
		var inAsset = doc.getElementById('inAsset');

		/*封装的公共函数*/
		function commonTap(trigger, picker) {
			trigger.addEventListener('tap', function(event) {
				picker.show(function(items) {
					trigger.innerText = items[0].text;
				})
			}, false);
		}
		commonTap(inInsure, userPicker);
		commonTap(inAsset, userPicker);
		commonTap(outInsure, userPicker);
		commonTap(outAsset, userPicker);
	})
})(mui, document);
mui.plusReady(function(){
	//仅支持竖屏显示
	plus.screen.lockOrientation("portrait-primary");
})

