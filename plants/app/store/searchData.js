var data = {
		plants: [
					{ 
						name  : '개당주나무',
						leaf  : '갈래잎',
						family: '장미목. 범의귀과',
						home  : '한국',
						body  : '잎은 손바닥 모양으로 3~5갈래로 갈라지고 길이와 너비 모두 5~10cm의 달걀모양이며, 가장자리에 톱니가 있다. 꽃은 3~4월에 녹황색으로 피며, 열매는 차로 어린 잎을 사용한다. 한방에서는 허리통증과 장출혈등에 처방한다.',
						url   : './resources/images/aroow_Left.png'
					},
					{ 
						name  : '개머루',
						leaf  : '갈래잎',
						family: '갈매나무목. 포도과',
						home  : '한국',
						body  : '잎은 길이 7~10cm로 어긋나게 자란다. 잎은 손바닥 모양으로 깊게 또는 얇게 3~5개로 갈라지며, 덩굴손과는 마주나며 가장자리에 톱니가 있다.',
						url   : 'http://cfile2.uf.tistory.com/image/195AEE4B4D9BF73B12D6CB'
					},
					{ 
						name  : '고로쇠나무',
						leaf  : '갈래잎',
						family: '무환자나무목. 단풍나무과',
						home  : '한국',
						body  : '잎몸이 5~7로 갈라지며 마주난다. 가장자리가 밋밋하고 잎 뒷면 맥 겨드랑이에 속생한 털이 있다. 가을철에 황색으로 단풍이 든다.',
						url   : 'http://archivenew.vop.co.kr/images/4c3f0394d76e2d637722ffe27b3a2b4f/2010-10/15115134_gd.jpg'
							
					},
					{ 
						name  : '헛개나무',
						leaf  : '안갈래잎',
						family: '갈매나무목. 갈매나무과',
						home  : '한국',
						body  : '잎은 넓은 달걀모양 또는 타원모양으로 어긋난다. 가장자리에 잔거치가 있다. 잎의 앞면은 녹색으로 털이 없고 뒷면은 연한 녹색으로 맥위에 털이 없거나 있다.',
						url   : 'http://t3.gstatic.com/images?q=tbn:ANd9GcRr7bydOafjOq3dCXMKaPXX_7rvr52Of41PcCoo6B2AOMB6Sp6vZA&t=1'
					},
					{ 
						name  : '협죽도',
						leaf  : '안갈래잎',
						family: '용담목. 협죽도과',
						home  : '인도',
						body  : '잎은 선상 피침형이며 3개씩 돌려난다. 잎의 가장자리가 밋밋하고 두깨가 두껍다. 표면은 짙은 녹색이며 양면에 털이 없다.',
						url   : 'http://t1.gstatic.com/images?q=tbn:ANd9GcReFdoUblzNqSeiaQk6woyAFG1dpfvsc5nhl4WEwMmP8HjYhXi3eA&t=1'
					},
					{ 
						name  : '가문비나무',
						leaf  : '바늘잎',
						family: '소나무과',
						home  : '한국',
						body  : '잎은 길이 1~2cm 로서 편평하고 선형이다. 잎은 곧거나 구부러지고 표면 가까운 양쪽에 수지구가 있다. 잎의 뒷면에 백색 기공조선이 발달해 있다. 잎횡단면 양측 가장자리에 송진 구멍이 있다.',
						url   : 'http://t1.gstatic.com/images?q=tbn:ANd9GcQgm9069hkWci0T_3ABQ-Y09tqsenIyHDycnf9xUC5PBrfFeHou&t=1'
					},
					{ 
						name  : '개바지나무',
						leaf  : '바늘잎',
						family: '주목목.주목과',
						home  : '한국',
						body  : '잎은 2줄로 배열한다. 잎몸은 선형으로 끝이 뾰족하고 잎의 주맥이 양면에 도드라진다. 뒷면에 2줄로 된 숨구멍줄이 있으며 잎자루는 없고 비자나무에 비해 부드러워 쉽게 휘어진다.',
						url   : 'http://t3.gstatic.com/images?q=tbn:ANd9GcSs9D8f8Em8ONQ5Dpnh18NfCQcDqJ52GJT5ga_ABN_WUtWaA8-pug&t=1'
					},					
				]
};


Ext.define('plants.store.searchData', {
    extend: 'Ext.data.Store',

    config: {
    	autoLoad: true,
    	storeId : 'searchData',
    	model: 'plants.model.plantsModel',
    	data : data.plants,
		   
		proxy: {
			type: 'memory',
			reader: {
				 type: 'json',
				 root: 'plants',
			}
		},
    }
});

