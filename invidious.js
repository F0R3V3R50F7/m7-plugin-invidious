var _0x12c651=_0x42d8;(function(_0x241db5,_0x49dbf5){var _0x131c4f=_0x42d8,_0x2ad9f4=_0x241db5();while(!![]){try{var _0x2aadc5=parseInt(_0x131c4f(0x1f6))/0x1+parseInt(_0x131c4f(0x1e8))/0x2+-parseInt(_0x131c4f(0x237))/0x3+parseInt(_0x131c4f(0x20e))/0x4+-parseInt(_0x131c4f(0x214))/0x5*(parseInt(_0x131c4f(0x1fc))/0x6)+-parseInt(_0x131c4f(0x231))/0x7*(parseInt(_0x131c4f(0x1db))/0x8)+-parseInt(_0x131c4f(0x22f))/0x9*(parseInt(_0x131c4f(0x23a))/0xa);if(_0x2aadc5===_0x49dbf5)break;else _0x2ad9f4['push'](_0x2ad9f4['shift']());}catch(_0x6b86b6){_0x2ad9f4['push'](_0x2ad9f4['shift']());}}}(_0x1d83,0xd3fff));var page=require(_0x12c651(0x223)),service=require(_0x12c651(0x1e6)),settings=require('showtime/settings'),http=require('showtime/http'),string=require(_0x12c651(0x1d8)),popup=require(_0x12c651(0x20b)),store=require(_0x12c651(0x218)),plugin=JSON['parse'](Plugin['manifest']),logo=Plugin[_0x12c651(0x1ef)]+plugin['icon'],history=store[_0x12c651(0x21c)]('history');!history[_0x12c651(0x23d)]&&(history[_0x12c651(0x23d)]=JSON[_0x12c651(0x1d3)]([]));var recomcache=store['create'](_0x12c651(0x1e4));function _0x1d83(){var _0xd3d489=['videoId','Error\x20fetching\x20video\x20details\x20for\x20videoId\x20','path','video',':history','Error\x20adding\x20recommended\x20video\x20',':music','History','forEach','768058HaMQpa','author','items','Recommended',':trending','Low','6HHIogt','recommendedoff.png','imdb_id','selectQuality','historyon.png','musicoff.png','substring','Max.\x20allowed\x20video\x20recommendations.\x20(May\x20Increase\x20Loading\x20Time)','contents',':search:','floor','appendItem','formatStreams',':playvideo:','resolution','native/popup','subsoff.png','slice','1361052kmLNEB','api/v1','createMultiOpt','Parsed\x20search\x20results:\x20','Error\x20fetching\x20recommended\x20videos\x20for\x20videoId\x20','videoThumbnails','82395pauphW','genre',':playvideo:(.*)',':subscriptions','movian/store','Error\x20fetching\x20trending\x20videos:\x20','background','parse','create','log','recommendedon.png','videoparams:','request','search','Search\x20Results\x20for:\x20','showtime/page','\x20|\x20','metadata','Search\x20response:\x20','url','bg.png','/search?q=','model','trendingon.png','recomLength','historyoff.png','bindVideoMetadata','7326RXwvwQ','entries','2049859Yxloxy','globalSettings','unshift','directory',':recommended',':search:(.*)','1876581tlDORC','Preferred\x20Quality','length','4840wfYSgO','[DEBUG]:\x20Error\x20accessing\x20instance:\x20','random','list','notify','stringify','/videos/','Performing\x20search\x20with\x20URL:\x20','indexOf','grid','native/string','recommendedVideos','Music','24CtRsIy','title','Please\x20be\x20patient\x20whilst\x20video\x20recommendations\x20are\x20saved\x20to\x20cache.','type','loading','Route','push','error','icon','recomcache','Error\x20fetching\x20search\x20results:\x20','showtime/service','/trending','3349046nbPGuG','Search\x20Invidious...','musicon.png','description','480p'];_0x1d83=function(){return _0xd3d489;};return _0x1d83();}function _0x42d8(_0x400c65,_0x117d0d){var _0x1d8378=_0x1d83();return _0x42d8=function(_0x42d8bb,_0x4e22ec){_0x42d8bb=_0x42d8bb-0x1d2;var _0x1036bc=_0x1d8378[_0x42d8bb];return _0x1036bc;},_0x42d8(_0x400c65,_0x117d0d);}!recomcache[_0x12c651(0x23d)]&&(recomcache['list']=JSON[_0x12c651(0x1d3)]([]));settings[_0x12c651(0x232)](plugin['id'],plugin[_0x12c651(0x1dc)],logo,plugin['synopsis']),settings[_0x12c651(0x210)](_0x12c651(0x1ff),_0x12c651(0x238),[['720p','High',!![]],['480p',_0x12c651(0x1fb)]],function(_0x1a1c2d){service['selectQuality']=_0x1a1c2d;}),settings[_0x12c651(0x210)]('recomLength',_0x12c651(0x203),[['80','80'],['60','60'],['30','30',!![]],['10','10']],function(_0x204f17){var _0x57cf11=_0x12c651;service[_0x57cf11(0x22c)]=_0x204f17;}),service[_0x12c651(0x21c)](plugin[_0x12c651(0x1dc)],plugin['id']+_0x12c651(0x235),_0x12c651(0x234),!![],logo);var INSTANCES=['https://invidious.privacyredirect.com/'],currentIndex=0x0;function getNextInstance(){var _0x33eedc=_0x12c651,_0x1efb9a=INSTANCES[currentIndex];currentIndex=(currentIndex+0x1)%INSTANCES[_0x33eedc(0x239)];try{return http[_0x33eedc(0x220)](_0x1efb9a),_0x1efb9a;}catch(_0x3030a0){return console['log'](_0x33eedc(0x23b)+_0x3030a0),getNextInstance();}}function getNextApiUrl(){var _0x348101=_0x12c651;return getNextInstance()+_0x348101(0x20f);}var INVIDIOUS_INSTANCE=getNextApiUrl();function addVideoIdToHistory(_0x193692){var _0x4a7f89=_0x12c651,_0x2e6a15=JSON[_0x4a7f89(0x21b)](history[_0x4a7f89(0x23d)]);_0x2e6a15['unshift'](_0x193692),history[_0x4a7f89(0x23d)]=JSON[_0x4a7f89(0x1d3)](_0x2e6a15);}function addVideoIdToRecomCache(_0xcad655){var _0x47fdf3=_0x12c651,_0x48a49d=JSON[_0x47fdf3(0x21b)](recomcache[_0x47fdf3(0x23d)]),_0x4d28c6=![];for(var _0x4021c9=0x0;_0x4021c9<_0x48a49d[_0x47fdf3(0x239)];_0x4021c9++){if(_0x48a49d[_0x4021c9]===_0xcad655){_0x4d28c6=!![];break;}}!_0x4d28c6&&(_0x48a49d[_0x47fdf3(0x233)](_0xcad655),_0x48a49d['length']>0x19&&(_0x48a49d=_0x48a49d['slice'](0x0,0x127)),recomcache[_0x47fdf3(0x23d)]=JSON[_0x47fdf3(0x1d3)](_0x48a49d));}function setPageHeader(_0x296827,_0x2861b3){var _0x25d0ee=_0x12c651;_0x296827[_0x25d0ee(0x225)]&&(_0x296827[_0x25d0ee(0x225)][_0x25d0ee(0x1dc)]=_0x2861b3,_0x296827[_0x25d0ee(0x225)][_0x25d0ee(0x1e3)]=logo,_0x296827['metadata'][_0x25d0ee(0x21a)]=Plugin[_0x25d0ee(0x1ef)]+_0x25d0ee(0x228)),_0x296827['type']=_0x25d0ee(0x234),_0x296827[_0x25d0ee(0x204)]=_0x25d0ee(0x1f8),_0x296827[_0x25d0ee(0x230)]=0x0,_0x296827[_0x25d0ee(0x1df)]=!![];}function limitText(_0x5d05b8,_0x20df2d){var _0x237e2c=_0x12c651;return _0x5d05b8[_0x237e2c(0x239)]>_0x20df2d?_0x5d05b8[_0x237e2c(0x202)](0x0,_0x20df2d):_0x5d05b8;}function performSearch(_0x56b13b,_0x236d6a){var _0x40fbce=_0x12c651;_0x56b13b[_0x40fbce(0x1de)]=_0x40fbce(0x234),_0x56b13b[_0x40fbce(0x204)]=_0x40fbce(0x1f8),_0x56b13b[_0x40fbce(0x225)][_0x40fbce(0x1dc)]=_0x40fbce(0x222)+_0x236d6a,_0x56b13b[_0x40fbce(0x1df)]=!![];try{var _0x3977b3=INVIDIOUS_INSTANCE+_0x40fbce(0x229)+encodeURIComponent(_0x236d6a);console[_0x40fbce(0x21d)](_0x40fbce(0x1d5)+_0x3977b3);var _0x2f2904=http[_0x40fbce(0x220)](_0x3977b3);console[_0x40fbce(0x21d)](_0x40fbce(0x226)+_0x2f2904);var _0x1c416c=JSON[_0x40fbce(0x21b)](_0x2f2904);console[_0x40fbce(0x21d)](_0x40fbce(0x211)+JSON[_0x40fbce(0x1d3)](_0x1c416c));if(_0x1c416c[_0x40fbce(0x239)]===0x0){_0x56b13b['appendItem']('',_0x40fbce(0x234),{'title':'No\x20results\x20found\x20for:\x20'+_0x236d6a}),_0x56b13b[_0x40fbce(0x1df)]=![];return;}for(var _0x2759b2=0x0;_0x2759b2<_0x1c416c[_0x40fbce(0x239)];_0x2759b2++){var _0x4bf336=_0x1c416c[_0x2759b2];if(_0x4bf336[_0x40fbce(0x1de)]==='video'){var _0x13a1f4=_0x4bf336[_0x40fbce(0x1ed)],_0x1d8cda=limitText(_0x4bf336[_0x40fbce(0x1f7)],0x8),_0x33db06=plugin['id']+_0x40fbce(0x209)+encodeURIComponent(_0x13a1f4),_0x3db550=_0x56b13b[_0x40fbce(0x207)](_0x33db06,_0x40fbce(0x234),{'title':_0x1d8cda+_0x40fbce(0x224)+_0x4bf336[_0x40fbce(0x1dc)],'icon':_0x4bf336['videoThumbnails'][0x0]['url'],'description':_0x4bf336[_0x40fbce(0x1eb)]});service['enableMetadata']&&_0x3db550[_0x40fbce(0x22e)]({'imdb':_0x4bf336[_0x40fbce(0x1fe)]?'tt'+_0x4bf336[_0x40fbce(0x1fe)]:null});}}}catch(_0x5b929c){_0x56b13b['error']('Error\x20fetching\x20search\x20results:\x20'+_0x5b929c),console[_0x40fbce(0x1e2)](_0x40fbce(0x1e5)+_0x5b929c);}_0x56b13b['loading']=![];}new page['Route'](plugin['id']+_0x12c651(0x235),function(_0x200f4d){var _0x438d6a=_0x12c651;setPageHeader(_0x200f4d,_0x438d6a(0x1f9)),_0x200f4d[_0x438d6a(0x22a)][_0x438d6a(0x204)]='grid',_0x200f4d[_0x438d6a(0x207)](plugin['id']+':search:',_0x438d6a(0x221),{'title':'Search\x20Invidious...'}),_0x200f4d[_0x438d6a(0x207)](plugin['id']+_0x438d6a(0x235),_0x438d6a(0x1f0),{'icon':Plugin[_0x438d6a(0x1ef)]+_0x438d6a(0x21e)}),_0x200f4d[_0x438d6a(0x207)](plugin['id']+':trending',_0x438d6a(0x1f0),{'icon':Plugin[_0x438d6a(0x1ef)]+'trendingoff.png'}),_0x200f4d[_0x438d6a(0x207)](plugin['id']+_0x438d6a(0x1f3),'video',{'icon':Plugin[_0x438d6a(0x1ef)]+_0x438d6a(0x201)}),_0x200f4d['appendItem'](plugin['id']+':home','video',{'icon':Plugin[_0x438d6a(0x1ef)]+'subsoff.png'}),_0x200f4d[_0x438d6a(0x207)](plugin['id']+_0x438d6a(0x1f1),_0x438d6a(0x1f0),{'icon':Plugin[_0x438d6a(0x1ef)]+_0x438d6a(0x22d)}),popup[_0x438d6a(0x1d2)]('Watch\x20Videos\x20to\x20Get\x20Recommendations!',0x5),popup[_0x438d6a(0x1d2)](_0x438d6a(0x1dd),0x5);var _0x55131e=JSON[_0x438d6a(0x21b)](recomcache[_0x438d6a(0x23d)]),_0x264f15=JSON[_0x438d6a(0x21b)](history['list']);_0x55131e[_0x438d6a(0x239)]<0x12c&&_0x264f15['forEach'](function(_0x151f15){var _0x36d815=_0x438d6a;try{var _0x39d6b3=INVIDIOUS_INSTANCE+'/videos/'+_0x151f15,_0x45affc=http[_0x36d815(0x220)](_0x39d6b3),_0x5f9bf8=JSON[_0x36d815(0x21b)](_0x45affc);if(_0x5f9bf8&&_0x5f9bf8[_0x36d815(0x1d9)]){var _0x4a19b3=0x0;_0x5f9bf8['recommendedVideos'][_0x36d815(0x1f5)](function(_0x4dcba4){var _0x32a2ce=_0x36d815;if(_0x4dcba4[_0x32a2ce(0x1ed)]&&_0x4a19b3<0x5){var _0x28baf7=_0x4dcba4[_0x32a2ce(0x1ed)];addVideoIdToRecomCache(_0x28baf7),_0x4a19b3++;}});}}catch(_0x1beac6){console['error'](_0x36d815(0x212)+_0x151f15+':\x20'+_0x1beac6);}});MAX_ITEMS=parseInt(service[_0x438d6a(0x22c)]);function _0x129528(_0x3c37d2,_0x2b7487){var _0x5e321e=_0x438d6a,_0x330aba=[],_0x44e218=[];while(_0x330aba[_0x5e321e(0x239)]<_0x2b7487&&_0x330aba[_0x5e321e(0x239)]<_0x3c37d2[_0x5e321e(0x239)]){var _0x109f62=Math[_0x5e321e(0x206)](Math[_0x5e321e(0x23c)]()*_0x3c37d2[_0x5e321e(0x239)]);_0x44e218[_0x5e321e(0x1d6)](_0x109f62)===-0x1&&(_0x44e218[_0x5e321e(0x1e1)](_0x109f62),_0x330aba[_0x5e321e(0x1e1)](_0x3c37d2[_0x109f62]));}return _0x330aba;}var _0x278c3b=_0x129528(_0x55131e,MAX_ITEMS);for(var _0x2046c2=0x0;_0x2046c2<_0x278c3b[_0x438d6a(0x239)];_0x2046c2++){var _0x1ed6e5=_0x278c3b[_0x2046c2],_0x50a7ca=INVIDIOUS_INSTANCE+_0x438d6a(0x1d4)+_0x1ed6e5;try{var _0x3b11e9=http['request'](_0x50a7ca),_0xf90762=JSON['parse'](_0x3b11e9);if(_0xf90762&&_0xf90762[_0x438d6a(0x1dc)]&&_0xf90762[_0x438d6a(0x213)])var _0x49a5db=plugin['id']+_0x438d6a(0x209)+encodeURIComponent(_0x1ed6e5),_0xf43844=limitText(_0xf90762[_0x438d6a(0x1f7)],0x8),_0x258160=_0x200f4d[_0x438d6a(0x207)](_0x49a5db,_0x438d6a(0x234),{'title':_0xf43844+_0x438d6a(0x224)+_0xf90762[_0x438d6a(0x1dc)],'icon':_0xf90762[_0x438d6a(0x213)][0x0][_0x438d6a(0x227)],'description':_0xf90762[_0x438d6a(0x1eb)]});}catch(_0x222a52){console['error'](_0x438d6a(0x1f2)+_0x1ed6e5+':\x20'+_0x222a52);}}_0x200f4d[_0x438d6a(0x1df)]=![];}),new page[(_0x12c651(0x1e0))](plugin['id']+_0x12c651(0x1fa),function(_0x1d4b5d){var _0x3d3e39=_0x12c651;setPageHeader(_0x1d4b5d,'Trending'),_0x1d4b5d[_0x3d3e39(0x22a)][_0x3d3e39(0x204)]=_0x3d3e39(0x1d7),_0x1d4b5d[_0x3d3e39(0x207)](plugin['id']+_0x3d3e39(0x205),_0x3d3e39(0x221),{'title':_0x3d3e39(0x1e9)}),_0x1d4b5d['appendItem'](plugin['id']+_0x3d3e39(0x235),_0x3d3e39(0x1f0),{'icon':Plugin[_0x3d3e39(0x1ef)]+_0x3d3e39(0x1fd)}),_0x1d4b5d[_0x3d3e39(0x207)](plugin['id']+_0x3d3e39(0x1fa),'video',{'icon':Plugin[_0x3d3e39(0x1ef)]+_0x3d3e39(0x22b)}),_0x1d4b5d['appendItem'](plugin['id']+_0x3d3e39(0x1f3),_0x3d3e39(0x1f0),{'icon':Plugin[_0x3d3e39(0x1ef)]+_0x3d3e39(0x201)}),_0x1d4b5d[_0x3d3e39(0x207)](plugin['id']+_0x3d3e39(0x217),_0x3d3e39(0x1f0),{'icon':Plugin[_0x3d3e39(0x1ef)]+'subsoff.png'}),_0x1d4b5d['appendItem'](plugin['id']+_0x3d3e39(0x1f1),'video',{'icon':Plugin[_0x3d3e39(0x1ef)]+_0x3d3e39(0x22d)});var _0x1dd8c3=INVIDIOUS_INSTANCE+_0x3d3e39(0x1e7);try{var _0x872a61=http[_0x3d3e39(0x220)](_0x1dd8c3),_0x362e9b=JSON[_0x3d3e39(0x21b)](_0x872a61);if(_0x362e9b&&_0x362e9b['length']>0x0){var _0x3ac1f7=parseInt(service['recomLength']),_0x3e204f=_0x362e9b[_0x3d3e39(0x20d)](0x0,_0x3ac1f7);_0x3e204f[_0x3d3e39(0x1f5)](function(_0x273bc4){var _0x436318=_0x3d3e39;if(_0x273bc4&&_0x273bc4[_0x436318(0x1ed)]&&_0x273bc4[_0x436318(0x213)])var _0x169835=plugin['id']+_0x436318(0x209)+encodeURIComponent(_0x273bc4['videoId']),_0x5e66a7=limitText(_0x273bc4[_0x436318(0x1f7)],0x8),_0x277369=_0x1d4b5d[_0x436318(0x207)](_0x169835,'directory',{'title':_0x5e66a7+_0x436318(0x224)+_0x273bc4[_0x436318(0x1dc)],'icon':_0x273bc4[_0x436318(0x213)][0x0][_0x436318(0x227)],'description':_0x273bc4[_0x436318(0x1eb)]});});}}catch(_0x5ec23f){console[_0x3d3e39(0x1e2)](_0x3d3e39(0x219)+_0x5ec23f);}_0x1d4b5d[_0x3d3e39(0x1df)]=![];}),new page[(_0x12c651(0x1e0))](plugin['id']+_0x12c651(0x1f3),function(_0x4b81a5){var _0x43b509=_0x12c651;setPageHeader(_0x4b81a5,'Music'),_0x4b81a5[_0x43b509(0x22a)][_0x43b509(0x204)]=_0x43b509(0x1d7),_0x4b81a5[_0x43b509(0x207)](plugin['id']+':search:',_0x43b509(0x221),{'title':'Search\x20Invidious...'}),_0x4b81a5['appendItem'](plugin['id']+':recommended',_0x43b509(0x1f0),{'icon':Plugin[_0x43b509(0x1ef)]+_0x43b509(0x1fd)}),_0x4b81a5['appendItem'](plugin['id']+_0x43b509(0x1fa),_0x43b509(0x1f0),{'icon':Plugin[_0x43b509(0x1ef)]+'trendingoff.png'}),_0x4b81a5[_0x43b509(0x207)](plugin['id']+_0x43b509(0x1f3),_0x43b509(0x1f0),{'icon':Plugin['path']+_0x43b509(0x1ea)}),_0x4b81a5[_0x43b509(0x207)](plugin['id']+_0x43b509(0x217),_0x43b509(0x1f0),{'icon':Plugin[_0x43b509(0x1ef)]+_0x43b509(0x20c)}),_0x4b81a5['appendItem'](plugin['id']+':history',_0x43b509(0x1f0),{'icon':Plugin[_0x43b509(0x1ef)]+'historyoff.png'});var _0x5558ab=JSON[_0x43b509(0x21b)](recomcache['list']),_0xd0176f=JSON['parse'](history[_0x43b509(0x23d)]);_0x5558ab['length']<0x12c&&_0xd0176f[_0x43b509(0x1f5)](function(_0x28c5ca){var _0x242af8=_0x43b509;try{var _0x2e36a5=INVIDIOUS_INSTANCE+_0x242af8(0x1d4)+_0x28c5ca,_0x6e49c4=http[_0x242af8(0x220)](_0x2e36a5),_0xd66700=JSON['parse'](_0x6e49c4);if(_0xd66700&&_0xd66700['recommendedVideos']){var _0x2708c8=0x0;_0xd66700[_0x242af8(0x1d9)][_0x242af8(0x1f5)](function(_0x2cf34c){var _0x2b1dce=_0x242af8;if(_0x2cf34c[_0x2b1dce(0x1ed)]&&_0x2708c8<0x5){var _0x4c8ae0=_0x2cf34c[_0x2b1dce(0x1ed)];addVideoIdToRecomCache(_0x4c8ae0),_0x2708c8++;}});}}catch(_0x200a3d){console['error'](_0x242af8(0x212)+_0x28c5ca+':\x20'+_0x200a3d);}});MAX_ITEMS=parseInt(service[_0x43b509(0x22c)]);function _0x2fc2cb(_0xbb51a0,_0x1be832){var _0x1f1615=_0x43b509,_0xf8706=[],_0x13b72b=[];while(_0xf8706[_0x1f1615(0x239)]<_0x1be832&&_0xf8706[_0x1f1615(0x239)]<_0xbb51a0['length']){var _0x16a7bf=Math['floor'](Math[_0x1f1615(0x23c)]()*_0xbb51a0[_0x1f1615(0x239)]);_0x13b72b[_0x1f1615(0x1d6)](_0x16a7bf)===-0x1&&(_0x13b72b['push'](_0x16a7bf),_0xf8706['push'](_0xbb51a0[_0x16a7bf]));}return _0xf8706;}var _0x3891eb=_0x2fc2cb(_0x5558ab,MAX_ITEMS);for(var _0x53de76=0x0;_0x53de76<_0x3891eb[_0x43b509(0x239)];_0x53de76++){var _0x25e961=_0x3891eb[_0x53de76],_0x4346c7=INVIDIOUS_INSTANCE+_0x43b509(0x1d4)+_0x25e961;try{var _0x248659=http['request'](_0x4346c7),_0x147c7b=JSON[_0x43b509(0x21b)](_0x248659);if(_0x147c7b&&_0x147c7b['title']&&_0x147c7b['videoThumbnails']&&_0x147c7b[_0x43b509(0x215)]==_0x43b509(0x1da))var _0x50a7ea=plugin['id']+':playvideo:'+encodeURIComponent(_0x25e961),_0x436a07=limitText(_0x147c7b[_0x43b509(0x1f7)],0x8),_0x595497=_0x4b81a5[_0x43b509(0x207)](_0x50a7ea,_0x43b509(0x234),{'title':_0x436a07+_0x43b509(0x224)+_0x147c7b[_0x43b509(0x1dc)],'icon':_0x147c7b[_0x43b509(0x213)][0x0][_0x43b509(0x227)],'description':_0x147c7b['description']});}catch(_0x29a80a){console['error']('Error\x20adding\x20recommended\x20video\x20'+_0x25e961+':\x20'+_0x29a80a);}}_0x4b81a5[_0x43b509(0x1df)]=![];}),new page[(_0x12c651(0x1e0))](plugin['id']+_0x12c651(0x236),function(_0x378178,_0x450c8a){var _0x260412=_0x12c651;setPageHeader(_0x378178,'Search\x20results\x20for:\x20'+decodeURIComponent(_0x450c8a)),_0x378178[_0x260412(0x22a)]['contents']=_0x260412(0x1d7),performSearch(_0x378178,decodeURIComponent(_0x450c8a));}),page['Searcher'](plugin[_0x12c651(0x1dc)],logo,function(_0x3a1d86,_0x17a095){var _0x4daba6=_0x12c651;_0x3a1d86['redirect'](plugin['id']+_0x4daba6(0x205)+encodeURIComponent(_0x17a095));}),new page[(_0x12c651(0x1e0))](plugin['id']+':history',function(_0x532b52){var _0x36a06e=_0x12c651;setPageHeader(_0x532b52,_0x36a06e(0x1f4)),_0x532b52['model']['contents']='grid',_0x532b52[_0x36a06e(0x1df)]=!![],_0x532b52['appendItem'](plugin['id']+_0x36a06e(0x205),'search',{'title':'Search\x20Invidious...'}),_0x532b52[_0x36a06e(0x207)](plugin['id']+':recommended',_0x36a06e(0x1f0),{'icon':Plugin['path']+_0x36a06e(0x1fd)}),_0x532b52[_0x36a06e(0x207)](plugin['id']+_0x36a06e(0x1fa),_0x36a06e(0x1f0),{'icon':Plugin[_0x36a06e(0x1ef)]+'trendingoff.png'}),_0x532b52[_0x36a06e(0x207)](plugin['id']+_0x36a06e(0x1f3),_0x36a06e(0x1f0),{'icon':Plugin[_0x36a06e(0x1ef)]+'musicoff.png'}),_0x532b52['appendItem'](plugin['id']+':subscriptions',_0x36a06e(0x1f0),{'icon':Plugin[_0x36a06e(0x1ef)]+_0x36a06e(0x20c)}),_0x532b52['appendItem'](plugin['id']+_0x36a06e(0x1f1),_0x36a06e(0x1f0),{'icon':Plugin[_0x36a06e(0x1ef)]+_0x36a06e(0x200)});var _0x297544=JSON[_0x36a06e(0x21b)](history[_0x36a06e(0x23d)]);_0x297544['forEach'](function(_0x22e47d){var _0x2a34b6=_0x36a06e;try{var _0x54ee79=INVIDIOUS_INSTANCE+_0x2a34b6(0x1d4)+_0x22e47d,_0x1817b1=http[_0x2a34b6(0x220)](_0x54ee79),_0x2284dd=JSON['parse'](_0x1817b1);if(_0x2284dd)var _0x39e9ea=plugin['id']+':playvideo:'+encodeURIComponent(_0x22e47d),_0x3c235a=_0x532b52[_0x2a34b6(0x207)](_0x39e9ea,_0x2a34b6(0x234),{'title':_0x2284dd[_0x2a34b6(0x1dc)],'icon':_0x2284dd[_0x2a34b6(0x213)][0x0][_0x2a34b6(0x227)],'description':_0x2284dd[_0x2a34b6(0x1eb)]});}catch(_0x4c823b){console['error'](_0x2a34b6(0x1ee)+_0x22e47d+':\x20'+_0x4c823b);}}),_0x532b52['loading']=![];}),new page['Route'](plugin['id']+_0x12c651(0x216),function(_0x5d5724,_0x1188e6){var _0x4dd568=_0x12c651;_0x5d5724[_0x4dd568(0x1df)]=!![];var _0x153226=INVIDIOUS_INSTANCE+_0x4dd568(0x1d4)+_0x1188e6,_0x181257=http['request'](_0x153226),_0x19eba5=JSON[_0x4dd568(0x21b)](_0x181257);setPageHeader(_0x5d5724,'Available\x20Video\x20Qualities\x20for:\x20'+decodeURIComponent(_0x19eba5[_0x4dd568(0x1dc)]));if(_0x19eba5&&_0x19eba5[_0x4dd568(0x208)]){var _0x1ad9c1=null;_0x19eba5[_0x4dd568(0x208)][_0x4dd568(0x1f5)](function(_0x319f1f){var _0x3a89a4=_0x4dd568;if(service[_0x3a89a4(0x1ff)]==_0x3a89a4(0x1ec)&&/720p/i['test'](_0x319f1f[_0x3a89a4(0x20a)]))return;_0x1ad9c1=_0x319f1f[_0x3a89a4(0x227)];});if(_0x1ad9c1){var _0x31b0a0=_0x4dd568(0x21f)+JSON[_0x4dd568(0x1d3)]({'title':_0x19eba5[_0x4dd568(0x1dc)],'canonicalUrl':_0x1ad9c1,'no_fs_scan':!![],'sources':_0x19eba5[_0x4dd568(0x208)]['map'](function(_0xa0eb32){var _0x2e39d1=_0x4dd568;return{'url':_0xa0eb32[_0x2e39d1(0x227)],'quality':_0xa0eb32['resolution']};})});_0x5d5724['redirect'](_0x31b0a0);}}addVideoIdToHistory(_0x1188e6),_0x5d5724[_0x4dd568(0x1df)]=![];});