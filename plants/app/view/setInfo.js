Ext.define('plants.view.setInfo',{
	extend : 'Ext.Panel',
	xtype: 'setInfo',
	
	config : {
		title : '프로그램정보',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},
		],
		
		html : [ '<h2>프로그램정보</h2>' ].join("")
	}
});