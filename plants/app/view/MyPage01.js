Ext.define('plants.view.MyPage01', {
    extend: 'Ext.Panel',
    xtype: 'mypage01',
    cls: 'myPageBG',
    
    requires: ['Ext.SegmentedButton'],

    config: {
    	style: 'text-align:center',
    	type: 'vbox',
        items: [
            {
<<<<<<< HEAD
                xtype: 'panel',
=======
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},	
            {
                xtype: 'segmentedbutton',
>>>>>>> modify titlebar add ui
                layout: {
                    //align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: 'btnMyNews'
                    },
                    {
                        xtype: 'button',
                        cls: 'btnBookmark'
                    },
                    {
                        xtype: 'button',
                        cls: 'btnRecent'
                    }
                ]
            },
            
            {
            	xtype: 'panel',
            	layout: {
            		type: 'vbox',
            	},
            	items: [
					{
						xtype: 'button',
						//style: 'text-align:center',
						cls: 'btnMyNews'
						
						//style: 'width: 132px, height: 32px',
//						id : 'buttonboardInput',
//						text: '새글쓰기',
//						itemId 	: 'boardInput',
//						action: 'movePage'
					},
					{
						xtype: 'button',
						cls: 'btnMyNews'						
					},
					{
						xtype: 'button',
						cls: 'btnMyNews'						
					}
					//{
					//	xtype: 'button',
					//	text: 'Test',
					//	cls: 'buttonTest btnOrange'
					//}
            	]
            }
        ]
    }

});