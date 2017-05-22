// Garden Gnome Software - Skin
// Pano2VR 5.1/15722
// Filename: DynamicCommercialSkin.ggsk
// Generated Mon May 22 14:56:14 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._list=document.createElement('div');
		this._list.ggId="List";
		this._list.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._list.ggVisible=true;
		this._list.className='ggskin ggskin_container ';
		this._list.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 510px;';
		hs+='pointer-events:none;';
		this._list.setAttribute('style',hs);
		this._list.style[domTransform + 'Origin']='0% 0%';
		me._list.ggIsActive=function() {
			return false;
		}
		me._list.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._list.ggCurrentLogicStateScaling = -1;
		this._list.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 768)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._list.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._list.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._list.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._list.ggCurrentLogicStateScaling == 0) {
					me._list.ggParameter.sx = 0.8;
					me._list.ggParameter.sy = 0.8;
					me._list.style[domTransform]=parameterToTransform(me._list.ggParameter);
				}
				else {
					me._list.ggParameter.sx = 1;
					me._list.ggParameter.sy = 1;
					me._list.style[domTransform]=parameterToTransform(me._list.ggParameter);
				}
			}
		}
		this._list.ggUpdatePosition=function (useTransition) {
			me._list.ggUpdateConditionResize();
		}
		this._tour_menu=document.createElement('div');
		this._tour_menu.ggId="Tour Menu";
		this._tour_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tour_menu.ggVisible=true;
		this._tour_menu.className='ggskin ggskin_container ';
		this._tour_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._tour_menu.setAttribute('style',hs);
		this._tour_menu.style[domTransform + 'Origin']='50% 50%';
		me._tour_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tour_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tour_menu.ggUpdatePosition=function (useTransition) {
		}
		this._topbanner=document.createElement('div');
		this._topbanner.ggId="TopBanner";
		this._topbanner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._topbanner.ggVisible=true;
		this._topbanner.className='ggskin ggskin_rectangle ';
		this._topbanner.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		this._topbanner.setAttribute('style',hs);
		this._topbanner.style[domTransform + 'Origin']='50% 50%';
		me._topbanner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._topbanner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._topbanner.ggUpdatePosition=function (useTransition) {
		}
		this._play_button=document.createElement('div');
		this._play_button.ggId="Play Button";
		this._play_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._play_button.ggVisible=false;
		this._play_button.className='ggskin ggskin_rectangle ';
		this._play_button.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._play_button.setAttribute('style',hs);
		this._play_button.style[domTransform + 'Origin']='50% 50%';
		me._play_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._play_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._play_button.onclick=function (e) {
			me._play_button.style[domTransition]='none';
			me._play_button.style.visibility='hidden';
			me._play_button.ggVisible=false;
			me.player.startAutorotate("-0.1","3");
			me._pause_button.style[domTransition]='none';
			me._pause_button.style.visibility=(Number(me._pause_button.style.opacity)>0||!me._pause_button.style.opacity)?'inherit':'hidden';
			me._pause_button.ggVisible=true;
		}
		this._play_button.onmouseover=function (e) {
			me.elementMouseOver['play_button']=true;
		}
		this._play_button.onmouseout=function (e) {
			me.elementMouseOver['play_button']=false;
		}
		this._play_button.ontouchend=function (e) {
			me.elementMouseOver['play_button']=false;
		}
		this._play_button.ggUpdatePosition=function (useTransition) {
		}
		this._play_icon=document.createElement('div');
		this._play_icon__img=document.createElement('img');
		this._play_icon__img.className='ggskin ggskin_svg';
		this._play_icon__img.setAttribute('src',basePath + 'images/play_icon.svg');
		this._play_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._play_icon__img['ondragstart']=function() { return false; };
		this._play_icon.appendChild(this._play_icon__img);
		this._play_icon.ggId="Play Icon";
		this._play_icon.ggLeft=-15;
		this._play_icon.ggTop=-15;
		this._play_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._play_icon.ggVisible=true;
		this._play_icon.className='ggskin ggskin_svg ';
		this._play_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._play_icon.setAttribute('style',hs);
		this._play_icon.style[domTransform + 'Origin']='50% 50%';
		me._play_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._play_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._play_icon.ggCurrentLogicStateScaling = -1;
		this._play_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['play_button'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._play_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._play_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._play_icon.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._play_icon.ggCurrentLogicStateScaling == 0) {
					me._play_icon.ggParameter.sx = 0.9;
					me._play_icon.ggParameter.sy = 0.9;
					me._play_icon.style[domTransform]=parameterToTransform(me._play_icon.ggParameter);
				}
				else {
					me._play_icon.ggParameter.sx = 1;
					me._play_icon.ggParameter.sy = 1;
					me._play_icon.style[domTransform]=parameterToTransform(me._play_icon.ggParameter);
				}
			}
		}
		this._play_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._play_button.appendChild(this._play_icon);
		this._topbanner.appendChild(this._play_button);
		this._pause_button=document.createElement('div');
		this._pause_button.ggId="Pause Button";
		this._pause_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pause_button.ggVisible=true;
		this._pause_button.className='ggskin ggskin_rectangle ';
		this._pause_button.ggType='rectangle';
		hs ='';
		hs+='background : #508264;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._pause_button.setAttribute('style',hs);
		this._pause_button.style[domTransform + 'Origin']='50% 50%';
		me._pause_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pause_button.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pause_button.onclick=function (e) {
			me._pause_button.style[domTransition]='none';
			me._pause_button.style.visibility='hidden';
			me._pause_button.ggVisible=false;
			me.player.stopAutorotate();
			me._play_button.style[domTransition]='none';
			me._play_button.style.visibility=(Number(me._play_button.style.opacity)>0||!me._play_button.style.opacity)?'inherit':'hidden';
			me._play_button.ggVisible=true;
		}
		this._pause_button.onmouseover=function (e) {
			me.elementMouseOver['pause_button']=true;
		}
		this._pause_button.onmouseout=function (e) {
			me.elementMouseOver['pause_button']=false;
		}
		this._pause_button.ontouchend=function (e) {
			me.elementMouseOver['pause_button']=false;
		}
		this._pause_button.ggUpdatePosition=function (useTransition) {
		}
		this._pause_icon=document.createElement('div');
		this._pause_icon__img=document.createElement('img');
		this._pause_icon__img.className='ggskin ggskin_svg';
		this._pause_icon__img.setAttribute('src',basePath + 'images/pause_icon.svg');
		this._pause_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._pause_icon__img['ondragstart']=function() { return false; };
		this._pause_icon.appendChild(this._pause_icon__img);
		this._pause_icon.ggId="Pause Icon";
		this._pause_icon.ggLeft=-15;
		this._pause_icon.ggTop=-15;
		this._pause_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pause_icon.ggVisible=true;
		this._pause_icon.className='ggskin ggskin_svg ';
		this._pause_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._pause_icon.setAttribute('style',hs);
		this._pause_icon.style[domTransform + 'Origin']='50% 50%';
		me._pause_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pause_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._pause_icon.ggCurrentLogicStateScaling = -1;
		this._pause_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['pause_button'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._pause_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._pause_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._pause_icon.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._pause_icon.ggCurrentLogicStateScaling == 0) {
					me._pause_icon.ggParameter.sx = 0.9;
					me._pause_icon.ggParameter.sy = 0.9;
					me._pause_icon.style[domTransform]=parameterToTransform(me._pause_icon.ggParameter);
				}
				else {
					me._pause_icon.ggParameter.sx = 1;
					me._pause_icon.ggParameter.sy = 1;
					me._pause_icon.style[domTransform]=parameterToTransform(me._pause_icon.ggParameter);
				}
			}
		}
		this._pause_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._pause_button.appendChild(this._pause_icon);
		this._topbanner.appendChild(this._pause_button);
		this._tour_menu.appendChild(this._topbanner);
		this._tour_menu_title_background=document.createElement('div');
		this._tour_menu_title_background.ggId="Tour Menu Title Background";
		this._tour_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tour_menu_title_background.ggVisible=true;
		this._tour_menu_title_background.className='ggskin ggskin_rectangle ';
		this._tour_menu_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._tour_menu_title_background.setAttribute('style',hs);
		this._tour_menu_title_background.style[domTransform + 'Origin']='50% 50%';
		me._tour_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tour_menu_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tour_menu_title_background.onclick=function (e) {
			me._menu_open_icon.ggVisible = !me._menu_open_icon.ggVisible;
			var flag=me._menu_open_icon.ggVisible;
			me._menu_open_icon.style[domTransition]='none';
			me._menu_open_icon.style.visibility=((flag)&&(Number(me._menu_open_icon.style.opacity)>0||!me._menu_open_icon.style.opacity))?'inherit':'hidden';
			me._menu_close_icon.ggVisible = !me._menu_close_icon.ggVisible;
			var flag=me._menu_close_icon.ggVisible;
			me._menu_close_icon.style[domTransition]='none';
			me._menu_close_icon.style.visibility=((flag)&&(Number(me._menu_close_icon.style.opacity)>0||!me._menu_close_icon.style.opacity))?'inherit':'hidden';
			var flag=me._tour_menu_title_background.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._tour_menu_title_background.style[domTransition]='none';
			} else {
				me._tour_menu_title_background.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._tour_menu_title_background.ggParameter.rx=0;me._tour_menu_title_background.ggParameter.ry=0;
				me._tour_menu_title_background.style[domTransform]=parameterToTransform(me._tour_menu_title_background.ggParameter);
			} else {
				me._tour_menu_title_background.ggParameter.rx=-200;me._tour_menu_title_background.ggParameter.ry=0;
				me._tour_menu_title_background.style[domTransform]=parameterToTransform(me._tour_menu_title_background.ggParameter);
			}
			me._tour_menu_title_background.ggPositonActive=!flag;
			var flag=me._main_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._main_location_icon.ggParameter.rx=0;me._main_location_icon.ggParameter.ry=0;
				me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			} else {
				me._main_location_icon.ggParameter.rx=200;me._main_location_icon.ggParameter.ry=0;
				me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			}
			me._main_location_icon.ggPositonActive=!flag;
			var flag=me._main_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._main_menu.style[domTransition]='none';
			} else {
				me._main_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._main_menu.ggParameter.rx=0;me._main_menu.ggParameter.ry=0;
				me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
			} else {
				me._main_menu.ggParameter.rx=-200;me._main_menu.ggParameter.ry=0;
				me._main_menu.style[domTransform]=parameterToTransform(me._main_menu.ggParameter);
			}
			me._main_menu.ggPositonActive=!flag;
			var flag=me._occupied_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._occupied_location_icon.ggParameter.rx=0;me._occupied_location_icon.ggParameter.ry=0;
				me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			} else {
				me._occupied_location_icon.ggParameter.rx=200;me._occupied_location_icon.ggParameter.ry=0;
				me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			}
			me._occupied_location_icon.ggPositonActive=!flag;
			var flag=me._occupied_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._occupied_menu.style[domTransition]='none';
			} else {
				me._occupied_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._occupied_menu.ggParameter.rx=0;me._occupied_menu.ggParameter.ry=0;
				me._occupied_menu.style[domTransform]=parameterToTransform(me._occupied_menu.ggParameter);
			} else {
				me._occupied_menu.ggParameter.rx=-200;me._occupied_menu.ggParameter.ry=0;
				me._occupied_menu.style[domTransform]=parameterToTransform(me._occupied_menu.ggParameter);
			}
			me._occupied_menu.ggPositonActive=!flag;
			var flag=me._vacant_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._vacant_location_icon.ggParameter.rx=0;me._vacant_location_icon.ggParameter.ry=0;
				me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			} else {
				me._vacant_location_icon.ggParameter.rx=200;me._vacant_location_icon.ggParameter.ry=0;
				me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			}
			me._vacant_location_icon.ggPositonActive=!flag;
			var flag=me._vacant_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._vacant_menu.style[domTransition]='none';
			} else {
				me._vacant_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._vacant_menu.ggParameter.rx=0;me._vacant_menu.ggParameter.ry=0;
				me._vacant_menu.style[domTransform]=parameterToTransform(me._vacant_menu.ggParameter);
			} else {
				me._vacant_menu.ggParameter.rx=-200;me._vacant_menu.ggParameter.ry=0;
				me._vacant_menu.style[domTransform]=parameterToTransform(me._vacant_menu.ggParameter);
			}
			me._vacant_menu.ggPositonActive=!flag;
			var flag=me._stats_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._stats_location_icon.style[domTransition]='none';
			} else {
				me._stats_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._stats_location_icon.ggParameter.rx=0;me._stats_location_icon.ggParameter.ry=0;
				me._stats_location_icon.style[domTransform]=parameterToTransform(me._stats_location_icon.ggParameter);
			} else {
				me._stats_location_icon.ggParameter.rx=200;me._stats_location_icon.ggParameter.ry=0;
				me._stats_location_icon.style[domTransform]=parameterToTransform(me._stats_location_icon.ggParameter);
			}
			me._stats_location_icon.ggPositonActive=!flag;
			var flag=me._stats_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._stats_menu.style[domTransition]='none';
			} else {
				me._stats_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._stats_menu.ggParameter.rx=0;me._stats_menu.ggParameter.ry=0;
				me._stats_menu.style[domTransform]=parameterToTransform(me._stats_menu.ggParameter);
			} else {
				me._stats_menu.ggParameter.rx=-200;me._stats_menu.ggParameter.ry=0;
				me._stats_menu.style[domTransform]=parameterToTransform(me._stats_menu.ggParameter);
			}
			me._stats_menu.ggPositonActive=!flag;
			var flag=me._contact_menu.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._contact_menu.style[domTransition]='none';
			} else {
				me._contact_menu.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._contact_menu.ggParameter.rx=0;me._contact_menu.ggParameter.ry=0;
				me._contact_menu.style[domTransform]=parameterToTransform(me._contact_menu.ggParameter);
			} else {
				me._contact_menu.ggParameter.rx=-200;me._contact_menu.ggParameter.ry=0;
				me._contact_menu.style[domTransform]=parameterToTransform(me._contact_menu.ggParameter);
			}
			me._contact_menu.ggPositonActive=!flag;
			var flag=me._contact_name_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._contact_name_location_icon.style[domTransition]='none';
			} else {
				me._contact_name_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._contact_name_location_icon.ggParameter.rx=0;me._contact_name_location_icon.ggParameter.ry=0;
				me._contact_name_location_icon.style[domTransform]=parameterToTransform(me._contact_name_location_icon.ggParameter);
			} else {
				me._contact_name_location_icon.ggParameter.rx=200;me._contact_name_location_icon.ggParameter.ry=0;
				me._contact_name_location_icon.style[domTransform]=parameterToTransform(me._contact_name_location_icon.ggParameter);
			}
			me._contact_name_location_icon.ggPositonActive=!flag;
			var flag=me._contact_phone_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._contact_phone_location_icon.style[domTransition]='none';
			} else {
				me._contact_phone_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._contact_phone_location_icon.ggParameter.rx=0;me._contact_phone_location_icon.ggParameter.ry=0;
				me._contact_phone_location_icon.style[domTransform]=parameterToTransform(me._contact_phone_location_icon.ggParameter);
			} else {
				me._contact_phone_location_icon.ggParameter.rx=200;me._contact_phone_location_icon.ggParameter.ry=0;
				me._contact_phone_location_icon.style[domTransform]=parameterToTransform(me._contact_phone_location_icon.ggParameter);
			}
			me._contact_phone_location_icon.ggPositonActive=!flag;
			var flag=me._contact_email_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._contact_email_location_icon.style[domTransition]='none';
			} else {
				me._contact_email_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._contact_email_location_icon.ggParameter.rx=0;me._contact_email_location_icon.ggParameter.ry=0;
				me._contact_email_location_icon.style[domTransform]=parameterToTransform(me._contact_email_location_icon.ggParameter);
			} else {
				me._contact_email_location_icon.ggParameter.rx=200;me._contact_email_location_icon.ggParameter.ry=0;
				me._contact_email_location_icon.style[domTransform]=parameterToTransform(me._contact_email_location_icon.ggParameter);
			}
			me._contact_email_location_icon.ggPositonActive=!flag;
			var flag=me._topbanner.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._topbanner.style[domTransition]='none';
			} else {
				me._topbanner.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._topbanner.ggParameter.rx=0;me._topbanner.ggParameter.ry=0;
				me._topbanner.style[domTransform]=parameterToTransform(me._topbanner.ggParameter);
			} else {
				me._topbanner.ggParameter.rx=-200;me._topbanner.ggParameter.ry=0;
				me._topbanner.style[domTransform]=parameterToTransform(me._topbanner.ggParameter);
			}
			me._topbanner.ggPositonActive=!flag;
		}
		this._tour_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['tour_menu_title_background']=true;
		}
		this._tour_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['tour_menu_title_background']=false;
		}
		this._tour_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['tour_menu_title_background']=false;
		}
		me._tour_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		this._tour_menu_title_background.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['tour_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._tour_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._tour_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._tour_menu_title_background.style[domTransition]='background-color none';
				if (me._tour_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._tour_menu_title_background.style.backgroundColor="rgba(80,130,100,1)";
				}
				else {
					me._tour_menu_title_background.style.backgroundColor="rgba(80,160,120,1)";
				}
			}
		}
		this._tour_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._tour_menu_background=document.createElement('div');
		this._tour_menu_background.ggId="Tour Menu Background";
		this._tour_menu_background.ggLeft=-250;
		this._tour_menu_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tour_menu_background.ggVisible=true;
		this._tour_menu_background.className='ggskin ggskin_rectangle ';
		this._tour_menu_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,160,120,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 1080px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._tour_menu_background.setAttribute('style',hs);
		this._tour_menu_background.style[domTransform + 'Origin']='50% 50%';
		me._tour_menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tour_menu_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tour_menu_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._sc_logo=document.createElement('div');
		this._sc_logo__img=document.createElement('img');
		this._sc_logo__img.className='ggskin ggskin_image';
		this._sc_logo__img.setAttribute('src',basePath + 'images/sc_logo.png');
		this._sc_logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._sc_logo__img.className='ggskin ggskin_image';
		this._sc_logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._sc_logo__img);
		this._sc_logo.appendChild(this._sc_logo__img);
		this._sc_logo.ggId="SC Logo";
		this._sc_logo.ggLeft=-55;
		this._sc_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._sc_logo.ggVisible=true;
		this._sc_logo.className='ggskin ggskin_image ';
		this._sc_logo.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._sc_logo.setAttribute('style',hs);
		this._sc_logo.style[domTransform + 'Origin']='50% 50%';
		me._sc_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._sc_logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._sc_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._tour_menu_background.appendChild(this._sc_logo);
		this._about_54_degrees_design=document.createElement('div');
		this._about_54_degrees_design__text=document.createElement('div');
		this._about_54_degrees_design.className='ggskin ggskin_textdiv';
		this._about_54_degrees_design.ggTextDiv=this._about_54_degrees_design__text;
		this._about_54_degrees_design.ggId="About 54 Degrees Design";
		this._about_54_degrees_design.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._about_54_degrees_design.ggVisible=true;
		this._about_54_degrees_design.className='ggskin ggskin_text ';
		this._about_54_degrees_design.ggType='text';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 610px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
		hs+='pointer-events:auto;';
		this._about_54_degrees_design.setAttribute('style',hs);
		this._about_54_degrees_design.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 248px;';
		hs+='height: 50px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 20px 21px 20px 21px;';
		hs+='overflow: hidden;';
		this._about_54_degrees_design__text.setAttribute('style',hs);
		this._about_54_degrees_design__text.innerHTML="<span style=\"font-size: 8px;\">Created By 54 Degrees Design<\/span>";
		this._about_54_degrees_design.appendChild(this._about_54_degrees_design__text);
		me._about_54_degrees_design.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._about_54_degrees_design.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._about_54_degrees_design.onclick=function (e) {
			me.player.openUrl("http:\/\/www.54degreesdesign.com\/","");
		}
		this._about_54_degrees_design.ggUpdatePosition=function (useTransition) {
		}
		this._tour_menu_background.appendChild(this._about_54_degrees_design);
		this._tour_menu_title_background.appendChild(this._tour_menu_background);
		this._dropdown_menu_title=document.createElement('div');
		this._dropdown_menu_title__text=document.createElement('div');
		this._dropdown_menu_title.className='ggskin ggskin_textdiv';
		this._dropdown_menu_title.ggTextDiv=this._dropdown_menu_title__text;
		this._dropdown_menu_title.ggId="Dropdown Menu Title";
		this._dropdown_menu_title.ggLeft=-240;
		this._dropdown_menu_title.ggTop=-10;
		this._dropdown_menu_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title.ggVisible=true;
		this._dropdown_menu_title.className='ggskin ggskin_text ';
		this._dropdown_menu_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 196px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_title.setAttribute('style',hs);
		this._dropdown_menu_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 196px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_title__text.setAttribute('style',hs);
		this._dropdown_menu_title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		this._dropdown_menu_title.appendChild(this._dropdown_menu_title__text);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tour_menu_title_background.appendChild(this._dropdown_menu_title);
		this._menu_open_icon=document.createElement('div');
		this._menu_open_icon__img=document.createElement('img');
		this._menu_open_icon__img.className='ggskin ggskin_svg';
		this._menu_open_icon__img.setAttribute('src',basePath + 'images/menu_open_icon.svg');
		this._menu_open_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._menu_open_icon__img['ondragstart']=function() { return false; };
		this._menu_open_icon.appendChild(this._menu_open_icon__img);
		this._menu_open_icon.ggId="Menu Open Icon";
		this._menu_open_icon.ggLeft=-36;
		this._menu_open_icon.ggTop=-13;
		this._menu_open_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_open_icon.ggVisible=false;
		this._menu_open_icon.className='ggskin ggskin_svg ';
		this._menu_open_icon.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -36px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._menu_open_icon.setAttribute('style',hs);
		this._menu_open_icon.style[domTransform + 'Origin']='50% 50%';
		me._menu_open_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_open_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_open_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tour_menu_title_background.appendChild(this._menu_open_icon);
		this._menu_close_icon=document.createElement('div');
		this._menu_close_icon__img=document.createElement('img');
		this._menu_close_icon__img.className='ggskin ggskin_svg';
		this._menu_close_icon__img.setAttribute('src',basePath + 'images/menu_close_icon.svg');
		this._menu_close_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._menu_close_icon__img['ondragstart']=function() { return false; };
		this._menu_close_icon.appendChild(this._menu_close_icon__img);
		this._menu_close_icon.ggId="Menu Close Icon";
		this._menu_close_icon.ggLeft=-33;
		this._menu_close_icon.ggTop=-10;
		this._menu_close_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_close_icon.ggVisible=true;
		this._menu_close_icon.className='ggskin ggskin_svg ';
		this._menu_close_icon.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -33px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._menu_close_icon.setAttribute('style',hs);
		this._menu_close_icon.style[domTransform + 'Origin']='50% 50%';
		me._menu_close_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._menu_close_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._menu_close_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._tour_menu_title_background.appendChild(this._menu_close_icon);
		this._tour_menu.appendChild(this._tour_menu_title_background);
		this._list.appendChild(this._tour_menu);
		this._stats_menu=document.createElement('div');
		this._stats_menu.ggId="Stats Menu";
		this._stats_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_menu.ggVisible=true;
		this._stats_menu.className='ggskin ggskin_container ';
		this._stats_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 340px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._stats_menu.setAttribute('style',hs);
		this._stats_menu.style[domTransform + 'Origin']='50% 50%';
		me._stats_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stats_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stats_menu.ggUpdatePosition=function (useTransition) {
		}
		this._stats_title_background=document.createElement('div');
		this._stats_title_background.ggId="Stats Title Background";
		this._stats_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_title_background.ggVisible=true;
		this._stats_title_background.className='ggskin ggskin_rectangle ';
		this._stats_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #508264;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._stats_title_background.setAttribute('style',hs);
		this._stats_title_background.style[domTransform + 'Origin']='50% 50%';
		me._stats_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stats_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stats_title_background.onclick=function (e) {
			me.player.openUrl("https:\/\/app.powerbi.com\/view?r=eyJrIjoiN2NjZjUzMjYtNmQ4OC00Y2NkLTkzMDUtNDY4M2ZlZmZkYzczIiwidCI6ImJiODI0YWU3LWViMjEtNDkyYy05OWVjLTg3NmI3OWU1YzJhZSIsImMiOjh9","_blank");
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._stats_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._stats_title_container=document.createElement('div');
		this._stats_title_container.ggId="Stats Title Container";
		this._stats_title_container.ggLeft=-360;
		this._stats_title_container.ggTop=-20;
		this._stats_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_title_container.ggVisible=true;
		this._stats_title_container.className='ggskin ggskin_container ';
		this._stats_title_container.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -360px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		this._stats_title_container.setAttribute('style',hs);
		this._stats_title_container.style[domTransform + 'Origin']='50% 50%';
		me._stats_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stats_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stats_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._stats_menu_title_text=document.createElement('div');
		this._stats_menu_title_text__text=document.createElement('div');
		this._stats_menu_title_text.className='ggskin ggskin_textdiv';
		this._stats_menu_title_text.ggTextDiv=this._stats_menu_title_text__text;
		this._stats_menu_title_text.ggId="Stats Menu Title Text";
		this._stats_menu_title_text.ggLeft=-210;
		this._stats_menu_title_text.ggTop=-10;
		this._stats_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_menu_title_text.ggVisible=true;
		this._stats_menu_title_text.className='ggskin ggskin_text ';
		this._stats_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._stats_menu_title_text.setAttribute('style',hs);
		this._stats_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._stats_menu_title_text__text.setAttribute('style',hs);
		this._stats_menu_title_text__text.innerHTML="<b>Statistics<\/b>";
		this._stats_menu_title_text.appendChild(this._stats_menu_title_text__text);
		me._stats_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stats_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stats_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._stats_title_container.appendChild(this._stats_menu_title_text);
		this._stats_location_icon=document.createElement('div');
		this._stats_location_icon__img=document.createElement('img');
		this._stats_location_icon__img.className='ggskin ggskin_svg';
		this._stats_location_icon__img.setAttribute('src',basePath + 'images/stats_location_icon.svg');
		this._stats_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stats_location_icon__img['ondragstart']=function() { return false; };
		this._stats_location_icon.appendChild(this._stats_location_icon__img);
		this._stats_location_icon.ggId="Stats Location Icon";
		this._stats_location_icon.ggLeft=-240;
		this._stats_location_icon.ggTop=-13;
		this._stats_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_location_icon.ggVisible=true;
		this._stats_location_icon.className='ggskin ggskin_svg ';
		this._stats_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._stats_location_icon.setAttribute('style',hs);
		this._stats_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._stats_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stats_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stats_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._stats_title_container.appendChild(this._stats_location_icon);
		this._stats_title_background.appendChild(this._stats_title_container);
		this._stats_menu.appendChild(this._stats_title_background);
		this._list.appendChild(this._stats_menu);
		this._contact_menu=document.createElement('div');
		this._contact_menu.ggId="Contact Menu";
		this._contact_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_menu.ggVisible=true;
		this._contact_menu.className='ggskin ggskin_container ';
		this._contact_menu.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 490px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._contact_menu.setAttribute('style',hs);
		this._contact_menu.style[domTransform + 'Origin']='50% 50%';
		me._contact_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_menu.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background=document.createElement('div');
		this._contact_title_background.ggId="Contact Title Background";
		this._contact_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_title_background.ggVisible=true;
		this._contact_title_background.className='ggskin ggskin_rectangle ';
		this._contact_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #508264;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._contact_title_background.setAttribute('style',hs);
		this._contact_title_background.style[domTransform + 'Origin']='50% 50%';
		me._contact_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_title_background.onclick=function (e) {
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._contact_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._contact_email_title_container=document.createElement('div');
		this._contact_email_title_container.ggId="Contact email Title Container";
		this._contact_email_title_container.ggLeft=-250;
		this._contact_email_title_container.ggTop=20;
		this._contact_email_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_email_title_container.ggVisible=true;
		this._contact_email_title_container.className='ggskin ggskin_container ';
		this._contact_email_title_container.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._contact_email_title_container.setAttribute('style',hs);
		this._contact_email_title_container.style[domTransform + 'Origin']='50% 50%';
		me._contact_email_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_email_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_email_title_container.onclick=function (e) {
			me.player.openUrl("mailto:info@54degreesdesign.com","");
		}
		this._contact_email_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_email_menu_title_text=document.createElement('div');
		this._contact_email_menu_title_text__text=document.createElement('div');
		this._contact_email_menu_title_text.className='ggskin ggskin_textdiv';
		this._contact_email_menu_title_text.ggTextDiv=this._contact_email_menu_title_text__text;
		this._contact_email_menu_title_text.ggId="Contact email Menu Title Text";
		this._contact_email_menu_title_text.ggLeft=-210;
		this._contact_email_menu_title_text.ggTop=-10;
		this._contact_email_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_email_menu_title_text.ggVisible=true;
		this._contact_email_menu_title_text.className='ggskin ggskin_text ';
		this._contact_email_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._contact_email_menu_title_text.setAttribute('style',hs);
		this._contact_email_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._contact_email_menu_title_text__text.setAttribute('style',hs);
		this._contact_email_menu_title_text__text.innerHTML="<span style=\"font-size: 10px;\">info@54degreesdesign.com<\/span>";
		this._contact_email_menu_title_text.appendChild(this._contact_email_menu_title_text__text);
		me._contact_email_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_email_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_email_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_email_title_container.appendChild(this._contact_email_menu_title_text);
		this._contact_email_location_icon=document.createElement('div');
		this._contact_email_location_icon__img=document.createElement('img');
		this._contact_email_location_icon__img.className='ggskin ggskin_svg';
		this._contact_email_location_icon__img.setAttribute('src',basePath + 'images/contact_email_location_icon.svg');
		this._contact_email_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_email_location_icon__img['ondragstart']=function() { return false; };
		this._contact_email_location_icon.appendChild(this._contact_email_location_icon__img);
		this._contact_email_location_icon.ggId="Contact email Location Icon";
		this._contact_email_location_icon.ggLeft=-240;
		this._contact_email_location_icon.ggTop=-10;
		this._contact_email_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_email_location_icon.ggVisible=true;
		this._contact_email_location_icon.className='ggskin ggskin_svg ';
		this._contact_email_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		this._contact_email_location_icon.setAttribute('style',hs);
		this._contact_email_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_email_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_email_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_email_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_email_title_container.appendChild(this._contact_email_location_icon);
		this._contact_title_background.appendChild(this._contact_email_title_container);
		this._contact_phone_title_container=document.createElement('div');
		this._contact_phone_title_container.ggId="Contact Phone Title Container";
		this._contact_phone_title_container.ggLeft=-250;
		this._contact_phone_title_container.ggTop=-20;
		this._contact_phone_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_phone_title_container.ggVisible=true;
		this._contact_phone_title_container.className='ggskin ggskin_container ';
		this._contact_phone_title_container.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._contact_phone_title_container.setAttribute('style',hs);
		this._contact_phone_title_container.style[domTransform + 'Origin']='50% 50%';
		me._contact_phone_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_phone_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_phone_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_phone_menu_title_text=document.createElement('div');
		this._contact_phone_menu_title_text__text=document.createElement('div');
		this._contact_phone_menu_title_text.className='ggskin ggskin_textdiv';
		this._contact_phone_menu_title_text.ggTextDiv=this._contact_phone_menu_title_text__text;
		this._contact_phone_menu_title_text.ggId="Contact Phone Menu Title Text";
		this._contact_phone_menu_title_text.ggLeft=-210;
		this._contact_phone_menu_title_text.ggTop=-10;
		this._contact_phone_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_phone_menu_title_text.ggVisible=true;
		this._contact_phone_menu_title_text.className='ggskin ggskin_text ';
		this._contact_phone_menu_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._contact_phone_menu_title_text.setAttribute('style',hs);
		this._contact_phone_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._contact_phone_menu_title_text__text.setAttribute('style',hs);
		this._contact_phone_menu_title_text__text.innerHTML="<span style=\"font-size: 10px;\">01 2345 6789<\/span>";
		this._contact_phone_menu_title_text.appendChild(this._contact_phone_menu_title_text__text);
		me._contact_phone_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_phone_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_phone_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_phone_title_container.appendChild(this._contact_phone_menu_title_text);
		this._contact_phone_location_icon=document.createElement('div');
		this._contact_phone_location_icon__img=document.createElement('img');
		this._contact_phone_location_icon__img.className='ggskin ggskin_svg';
		this._contact_phone_location_icon__img.setAttribute('src',basePath + 'images/contact_phone_location_icon.svg');
		this._contact_phone_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_phone_location_icon__img['ondragstart']=function() { return false; };
		this._contact_phone_location_icon.appendChild(this._contact_phone_location_icon__img);
		this._contact_phone_location_icon.ggId="Contact Phone Location Icon";
		this._contact_phone_location_icon.ggLeft=-240;
		this._contact_phone_location_icon.ggTop=-10;
		this._contact_phone_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_phone_location_icon.ggVisible=true;
		this._contact_phone_location_icon.className='ggskin ggskin_svg ';
		this._contact_phone_location_icon.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		this._contact_phone_location_icon.setAttribute('style',hs);
		this._contact_phone_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_phone_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_phone_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_phone_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_phone_title_container.appendChild(this._contact_phone_location_icon);
		this._contact_title_background.appendChild(this._contact_phone_title_container);
		this._contact_name_title_container=document.createElement('div');
		this._contact_name_title_container.ggId="Contact Name Title Container";
		this._contact_name_title_container.ggLeft=-250;
		this._contact_name_title_container.ggTop=-60;
		this._contact_name_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_name_title_container.ggVisible=true;
		this._contact_name_title_container.className='ggskin ggskin_container ';
		this._contact_name_title_container.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._contact_name_title_container.setAttribute('style',hs);
		this._contact_name_title_container.style[domTransform + 'Origin']='50% 50%';
		me._contact_name_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_name_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_name_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_name_menu_title_text=document.createElement('div');
		this._contact_name_menu_title_text__text=document.createElement('div');
		this._contact_name_menu_title_text.className='ggskin ggskin_textdiv';
		this._contact_name_menu_title_text.ggTextDiv=this._contact_name_menu_title_text__text;
		this._contact_name_menu_title_text.ggId="Contact Name Menu Title Text";
		this._contact_name_menu_title_text.ggLeft=-210;
		this._contact_name_menu_title_text.ggTop=-10;
		this._contact_name_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_name_menu_title_text.ggVisible=true;
		this._contact_name_menu_title_text.className='ggskin ggskin_text ';
		this._contact_name_menu_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._contact_name_menu_title_text.setAttribute('style',hs);
		this._contact_name_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._contact_name_menu_title_text__text.setAttribute('style',hs);
		this._contact_name_menu_title_text__text.innerHTML="<span style=\"font-size: 10px;\"><b>Paul Smith<\/b><\/span>";
		this._contact_name_menu_title_text.appendChild(this._contact_name_menu_title_text__text);
		me._contact_name_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_name_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_name_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_name_title_container.appendChild(this._contact_name_menu_title_text);
		this._contact_name_location_icon=document.createElement('div');
		this._contact_name_location_icon__img=document.createElement('img');
		this._contact_name_location_icon__img.className='ggskin ggskin_svg';
		this._contact_name_location_icon__img.setAttribute('src',basePath + 'images/contact_name_location_icon.svg');
		this._contact_name_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_name_location_icon__img['ondragstart']=function() { return false; };
		this._contact_name_location_icon.appendChild(this._contact_name_location_icon__img);
		this._contact_name_location_icon.ggId="Contact Name Location Icon";
		this._contact_name_location_icon.ggLeft=-240;
		this._contact_name_location_icon.ggTop=-10;
		this._contact_name_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_name_location_icon.ggVisible=true;
		this._contact_name_location_icon.className='ggskin ggskin_svg ';
		this._contact_name_location_icon.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		this._contact_name_location_icon.setAttribute('style',hs);
		this._contact_name_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_name_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_name_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_name_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._contact_name_title_container.appendChild(this._contact_name_location_icon);
		this._contact_title_background.appendChild(this._contact_name_title_container);
		this._real_icon=document.createElement('div');
		this._real_icon__img=document.createElement('img');
		this._real_icon__img.className='ggskin ggskin_image';
		this._real_icon__img.setAttribute('src',basePath + 'images/real_icon.png');
		this._real_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._real_icon__img.className='ggskin ggskin_image';
		this._real_icon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._real_icon__img);
		this._real_icon.appendChild(this._real_icon__img);
		this._real_icon.ggId="Real Icon";
		this._real_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._real_icon.ggVisible=true;
		this._real_icon.className='ggskin ggskin_image ';
		this._real_icon.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._real_icon.setAttribute('style',hs);
		this._real_icon.style[domTransform + 'Origin']='50% 50%';
		me._real_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._real_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._real_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._real_icon);
		this._contact_menu.appendChild(this._contact_title_background);
		this._list.appendChild(this._contact_menu);
		this._vacant_menu=document.createElement('div');
		this._vacant_menu.ggId="Vacant Menu";
		this._vacant_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_menu.ggVisible=true;
		this._vacant_menu.className='ggskin ggskin_container ';
		this._vacant_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 290px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._vacant_menu.setAttribute('style',hs);
		this._vacant_menu.style[domTransform + 'Origin']='50% 50%';
		me._vacant_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_menu.ggUpdatePosition=function (useTransition) {
		}
		this._vacant_dropdown_background=document.createElement('div');
		this._vacant_dropdown_background.ggId="Vacant Dropdown Background";
		this._vacant_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_dropdown_background.ggVisible=false;
		this._vacant_dropdown_background.className='ggskin ggskin_rectangle ';
		this._vacant_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._vacant_dropdown_background.setAttribute('style',hs);
		this._vacant_dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._vacant_dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_dropdown_background.onclick=function (e) {
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._vacant_dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		this._vacant_dropdown_scrollarea=document.createElement('div');
		this._vacant_dropdown_scrollarea__content=document.createElement('div');
		this._vacant_dropdown_scrollarea.ggContent=this._vacant_dropdown_scrollarea__content;
		this._vacant_dropdown_scrollarea.appendChild(this._vacant_dropdown_scrollarea__content);
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._vacant_dropdown_scrollarea__content.setAttribute('style',hs);
		this._vacant_dropdown_scrollarea.ggId="Vacant Dropdown Scrollarea";
		this._vacant_dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_dropdown_scrollarea.ggVisible=true;
		this._vacant_dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._vacant_dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._vacant_dropdown_scrollarea.setAttribute('style',hs);
		this._vacant_dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._vacant_dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._vacant_dropdown_cloner=document.createElement('div');
		this._vacant_dropdown_cloner.ggNumRepeat = 1;
		this._vacant_dropdown_cloner.ggWidth = 240;
		this._vacant_dropdown_cloner.ggHeight = 40;
		this._vacant_dropdown_cloner.ggUpdating = false;
		this._vacant_dropdown_cloner.ggFilter = [];
		this._vacant_dropdown_cloner.ggUpdate = function(filter) {
			if(me._vacant_dropdown_cloner.ggUpdating == true) return;
			me._vacant_dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._vacant_dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._vacant_dropdown_cloner.ggFilter;
			};
			if (me._vacant_dropdown_cloner.hasChildNodes() == true) {
				while (me._vacant_dropdown_cloner.firstChild) {
					me._vacant_dropdown_cloner.removeChild(me._vacant_dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._vacant_dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._vacant_dropdown_cloner__node = document.createElement('div');
					me._vacant_dropdown_cloner.appendChild(me._vacant_dropdown_cloner__node);
					me._vacant_dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._vacant_dropdown_cloner.ggHeight) + 'px; left:' + (column * me._vacant_dropdown_cloner.ggWidth) + 'px; height: ' + me._vacant_dropdown_cloner.ggHeight + 'px; width: ' + me._vacant_dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_vacant_dropdown_cloner_Class(nodeId, me);
					me._vacant_dropdown_cloner__node.appendChild(inst.__div);
					me._vacant_dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._vacant_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._vacant_dropdown_cloner.ggUpdating = false;
		}
		this._vacant_dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._vacant_dropdown_cloner.childNodes.length; i++) {
				stack.push(me._vacant_dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._vacant_dropdown_cloner.ggTags = [];
		this._vacant_dropdown_cloner.ggTags[0] = "Vacant";
		this._vacant_dropdown_cloner.ggId="Vacant Dropdown Cloner";
		this._vacant_dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_dropdown_cloner.ggVisible=true;
		this._vacant_dropdown_cloner.className='ggskin ggskin_cloner ';
		this._vacant_dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		this._vacant_dropdown_cloner.setAttribute('style',hs);
		this._vacant_dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._vacant_dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._vacant_dropdown_cloner.childNodes.length; i++) {
				var child=me._vacant_dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._vacant_dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._vacant_dropdown_cloner.ggLastSize) || (me._vacant_dropdown_cloner.ggLastSize.w!=w) || (me._vacant_dropdown_cloner.ggLastSize.h!=h)) {
				me._vacant_dropdown_cloner.ggLastSize={ w:w, h:h };
				me._vacant_dropdown_cloner.ggUpdate();
			}
		}
		this._vacant_dropdown_cloner.ggNodeChange=function () {
			me._vacant_dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._vacant_dropdown_scrollarea__content.appendChild(this._vacant_dropdown_cloner);
		this._vacant_dropdown_background.appendChild(this._vacant_dropdown_scrollarea);
		this._vacant_menu.appendChild(this._vacant_dropdown_background);
		this._vacant_title_background=document.createElement('div');
		this._vacant_title_background.ggId="Vacant Title Background";
		this._vacant_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_title_background.ggVisible=true;
		this._vacant_title_background.className='ggskin ggskin_rectangle ';
		this._vacant_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._vacant_title_background.setAttribute('style',hs);
		this._vacant_title_background.style[domTransform + 'Origin']='50% 50%';
		me._vacant_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_title_background.onclick=function (e) {
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility=(Number(me._vacant_dropdown_background.style.opacity)>0||!me._vacant_dropdown_background.style.opacity)?'inherit':'hidden';
			me._vacant_dropdown_background.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="270.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=20;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
		}
		this._vacant_title_background.ondblclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._vacant_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._vacant_title_container=document.createElement('div');
		this._vacant_title_container.ggId="Vacant Title Container";
		this._vacant_title_container.ggLeft=-250;
		this._vacant_title_container.ggTop=-25;
		this._vacant_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_title_container.ggVisible=true;
		this._vacant_title_container.className='ggskin ggskin_container ';
		this._vacant_title_container.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._vacant_title_container.setAttribute('style',hs);
		this._vacant_title_container.style[domTransform + 'Origin']='50% 50%';
		me._vacant_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._vacant_menu_title_text=document.createElement('div');
		this._vacant_menu_title_text__text=document.createElement('div');
		this._vacant_menu_title_text.className='ggskin ggskin_textdiv';
		this._vacant_menu_title_text.ggTextDiv=this._vacant_menu_title_text__text;
		this._vacant_menu_title_text.ggId="Vacant Menu Title Text";
		this._vacant_menu_title_text.ggLeft=-210;
		this._vacant_menu_title_text.ggTop=-10;
		this._vacant_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_menu_title_text.ggVisible=true;
		this._vacant_menu_title_text.className='ggskin ggskin_text ';
		this._vacant_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._vacant_menu_title_text.setAttribute('style',hs);
		this._vacant_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._vacant_menu_title_text__text.setAttribute('style',hs);
		this._vacant_menu_title_text__text.innerHTML="<b>Vacant Units<\/b>";
		this._vacant_menu_title_text.appendChild(this._vacant_menu_title_text__text);
		me._vacant_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._vacant_title_container.appendChild(this._vacant_menu_title_text);
		this._vacant_select_icon=document.createElement('div');
		this._vacant_select_icon__img=document.createElement('img');
		this._vacant_select_icon__img.className='ggskin ggskin_svg';
		this._vacant_select_icon__img.setAttribute('src',basePath + 'images/vacant_select_icon.svg');
		this._vacant_select_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._vacant_select_icon__img['ondragstart']=function() { return false; };
		this._vacant_select_icon.appendChild(this._vacant_select_icon__img);
		this._vacant_select_icon.ggId="Vacant Select Icon";
		this._vacant_select_icon.ggLeft=-22;
		this._vacant_select_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_select_icon.ggVisible=true;
		this._vacant_select_icon.className='ggskin ggskin_svg ';
		this._vacant_select_icon.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._vacant_select_icon.setAttribute('style',hs);
		this._vacant_select_icon.style[domTransform + 'Origin']='50% 50%';
		me._vacant_select_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_select_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_select_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._vacant_title_container.appendChild(this._vacant_select_icon);
		this._vacant_location_icon=document.createElement('div');
		this._vacant_location_icon__img=document.createElement('img');
		this._vacant_location_icon__img.className='ggskin ggskin_svg';
		this._vacant_location_icon__img.setAttribute('src',basePath + 'images/vacant_location_icon.svg');
		this._vacant_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._vacant_location_icon__img['ondragstart']=function() { return false; };
		this._vacant_location_icon.appendChild(this._vacant_location_icon__img);
		this._vacant_location_icon.ggId="Vacant Location Icon";
		this._vacant_location_icon.ggLeft=-240;
		this._vacant_location_icon.ggTop=-12;
		this._vacant_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_location_icon.ggVisible=true;
		this._vacant_location_icon.className='ggskin ggskin_svg ';
		this._vacant_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._vacant_location_icon.setAttribute('style',hs);
		this._vacant_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._vacant_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._vacant_title_container.appendChild(this._vacant_location_icon);
		this._vacant_title_background.appendChild(this._vacant_title_container);
		this._vacant_menu.appendChild(this._vacant_title_background);
		this._list.appendChild(this._vacant_menu);
		this._occupied_menu=document.createElement('div');
		this._occupied_menu.ggId="Occupied Menu";
		this._occupied_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_menu.ggVisible=true;
		this._occupied_menu.className='ggskin ggskin_container ';
		this._occupied_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._occupied_menu.setAttribute('style',hs);
		this._occupied_menu.style[domTransform + 'Origin']='50% 50%';
		me._occupied_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_menu.ggUpdatePosition=function (useTransition) {
		}
		this._occupied_dropdown_background=document.createElement('div');
		this._occupied_dropdown_background.ggId="Occupied Dropdown Background";
		this._occupied_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_dropdown_background.ggVisible=false;
		this._occupied_dropdown_background.className='ggskin ggskin_rectangle ';
		this._occupied_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._occupied_dropdown_background.setAttribute('style',hs);
		this._occupied_dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._occupied_dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_dropdown_background.onclick=function (e) {
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
		}
		this._occupied_dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		this._occupied_dropdown_scrollarea=document.createElement('div');
		this._occupied_dropdown_scrollarea__content=document.createElement('div');
		this._occupied_dropdown_scrollarea.ggContent=this._occupied_dropdown_scrollarea__content;
		this._occupied_dropdown_scrollarea.appendChild(this._occupied_dropdown_scrollarea__content);
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._occupied_dropdown_scrollarea__content.setAttribute('style',hs);
		this._occupied_dropdown_scrollarea.ggId="Occupied Dropdown Scrollarea";
		this._occupied_dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_dropdown_scrollarea.ggVisible=true;
		this._occupied_dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._occupied_dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._occupied_dropdown_scrollarea.setAttribute('style',hs);
		this._occupied_dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._occupied_dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._occupied_dropdown_cloner=document.createElement('div');
		this._occupied_dropdown_cloner.ggNumRepeat = 1;
		this._occupied_dropdown_cloner.ggWidth = 240;
		this._occupied_dropdown_cloner.ggHeight = 40;
		this._occupied_dropdown_cloner.ggUpdating = false;
		this._occupied_dropdown_cloner.ggFilter = [];
		this._occupied_dropdown_cloner.ggUpdate = function(filter) {
			if(me._occupied_dropdown_cloner.ggUpdating == true) return;
			me._occupied_dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._occupied_dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._occupied_dropdown_cloner.ggFilter;
			};
			if (me._occupied_dropdown_cloner.hasChildNodes() == true) {
				while (me._occupied_dropdown_cloner.firstChild) {
					me._occupied_dropdown_cloner.removeChild(me._occupied_dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._occupied_dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._occupied_dropdown_cloner__node = document.createElement('div');
					me._occupied_dropdown_cloner.appendChild(me._occupied_dropdown_cloner__node);
					me._occupied_dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._occupied_dropdown_cloner.ggHeight) + 'px; left:' + (column * me._occupied_dropdown_cloner.ggWidth) + 'px; height: ' + me._occupied_dropdown_cloner.ggHeight + 'px; width: ' + me._occupied_dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_occupied_dropdown_cloner_Class(nodeId, me);
					me._occupied_dropdown_cloner__node.appendChild(inst.__div);
					me._occupied_dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._occupied_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._occupied_dropdown_cloner.ggUpdating = false;
		}
		this._occupied_dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._occupied_dropdown_cloner.childNodes.length; i++) {
				stack.push(me._occupied_dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._occupied_dropdown_cloner.ggTags = [];
		this._occupied_dropdown_cloner.ggTags[0] = "Occupied";
		this._occupied_dropdown_cloner.ggId="Occupied Dropdown Cloner";
		this._occupied_dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_dropdown_cloner.ggVisible=true;
		this._occupied_dropdown_cloner.className='ggskin ggskin_cloner ';
		this._occupied_dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		this._occupied_dropdown_cloner.setAttribute('style',hs);
		this._occupied_dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._occupied_dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._occupied_dropdown_cloner.childNodes.length; i++) {
				var child=me._occupied_dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._occupied_dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._occupied_dropdown_cloner.ggLastSize) || (me._occupied_dropdown_cloner.ggLastSize.w!=w) || (me._occupied_dropdown_cloner.ggLastSize.h!=h)) {
				me._occupied_dropdown_cloner.ggLastSize={ w:w, h:h };
				me._occupied_dropdown_cloner.ggUpdate();
			}
		}
		this._occupied_dropdown_cloner.ggNodeChange=function () {
			me._occupied_dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._occupied_dropdown_scrollarea__content.appendChild(this._occupied_dropdown_cloner);
		this._occupied_dropdown_background.appendChild(this._occupied_dropdown_scrollarea);
		this._occupied_menu.appendChild(this._occupied_dropdown_background);
		this._occupied_title_background=document.createElement('div');
		this._occupied_title_background.ggId="Occupied Title Background";
		this._occupied_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_title_background.ggVisible=true;
		this._occupied_title_background.className='ggskin ggskin_rectangle ';
		this._occupied_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._occupied_title_background.setAttribute('style',hs);
		this._occupied_title_background.style[domTransform + 'Origin']='50% 50%';
		me._occupied_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_title_background.onclick=function (e) {
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility=(Number(me._occupied_dropdown_background.style.opacity)>0||!me._occupied_dropdown_background.style.opacity)?'inherit':'hidden';
			me._occupied_dropdown_background.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="270.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=20;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._occupied_title_background.ondblclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
		}
		this._occupied_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._occupied_title_container=document.createElement('div');
		this._occupied_title_container.ggId="Occupied Title Container";
		this._occupied_title_container.ggLeft=-250;
		this._occupied_title_container.ggTop=-25;
		this._occupied_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_title_container.ggVisible=true;
		this._occupied_title_container.className='ggskin ggskin_container ';
		this._occupied_title_container.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._occupied_title_container.setAttribute('style',hs);
		this._occupied_title_container.style[domTransform + 'Origin']='50% 50%';
		me._occupied_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._occupied_select_icon=document.createElement('div');
		this._occupied_select_icon__img=document.createElement('img');
		this._occupied_select_icon__img.className='ggskin ggskin_svg';
		this._occupied_select_icon__img.setAttribute('src',basePath + 'images/occupied_select_icon.svg');
		this._occupied_select_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._occupied_select_icon__img['ondragstart']=function() { return false; };
		this._occupied_select_icon.appendChild(this._occupied_select_icon__img);
		this._occupied_select_icon.ggId="Occupied Select Icon";
		this._occupied_select_icon.ggLeft=-22;
		this._occupied_select_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_select_icon.ggVisible=true;
		this._occupied_select_icon.className='ggskin ggskin_svg ';
		this._occupied_select_icon.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._occupied_select_icon.setAttribute('style',hs);
		this._occupied_select_icon.style[domTransform + 'Origin']='50% 50%';
		me._occupied_select_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_select_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_select_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._occupied_title_container.appendChild(this._occupied_select_icon);
		this._occupied_location_icon=document.createElement('div');
		this._occupied_location_icon__img=document.createElement('img');
		this._occupied_location_icon__img.className='ggskin ggskin_svg';
		this._occupied_location_icon__img.setAttribute('src',basePath + 'images/occupied_location_icon.svg');
		this._occupied_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._occupied_location_icon__img['ondragstart']=function() { return false; };
		this._occupied_location_icon.appendChild(this._occupied_location_icon__img);
		this._occupied_location_icon.ggId="Occupied Location Icon";
		this._occupied_location_icon.ggLeft=-240;
		this._occupied_location_icon.ggTop=-12;
		this._occupied_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_location_icon.ggVisible=true;
		this._occupied_location_icon.className='ggskin ggskin_svg ';
		this._occupied_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._occupied_location_icon.setAttribute('style',hs);
		this._occupied_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._occupied_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._occupied_title_container.appendChild(this._occupied_location_icon);
		this._occupied_menu_title_text=document.createElement('div');
		this._occupied_menu_title_text__text=document.createElement('div');
		this._occupied_menu_title_text.className='ggskin ggskin_textdiv';
		this._occupied_menu_title_text.ggTextDiv=this._occupied_menu_title_text__text;
		this._occupied_menu_title_text.ggId="Occupied Menu Title Text";
		this._occupied_menu_title_text.ggLeft=-210;
		this._occupied_menu_title_text.ggTop=-10;
		this._occupied_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_menu_title_text.ggVisible=true;
		this._occupied_menu_title_text.className='ggskin ggskin_text ';
		this._occupied_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._occupied_menu_title_text.setAttribute('style',hs);
		this._occupied_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._occupied_menu_title_text__text.setAttribute('style',hs);
		this._occupied_menu_title_text__text.innerHTML="<b>Current Tennents<\/b>";
		this._occupied_menu_title_text.appendChild(this._occupied_menu_title_text__text);
		me._occupied_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._occupied_title_container.appendChild(this._occupied_menu_title_text);
		this._occupied_title_background.appendChild(this._occupied_title_container);
		this._occupied_menu.appendChild(this._occupied_title_background);
		this._list.appendChild(this._occupied_menu);
		this._main_menu=document.createElement('div');
		this._main_menu.ggId="Main Menu";
		this._main_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_menu.ggVisible=true;
		this._main_menu.className='ggskin ggskin_container ';
		this._main_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 190px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._main_menu.setAttribute('style',hs);
		this._main_menu.style[domTransform + 'Origin']='50% 50%';
		me._main_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_menu.ggUpdatePosition=function (useTransition) {
		}
		this._main_dropdown_background=document.createElement('div');
		this._main_dropdown_background.ggId="Main Dropdown Background";
		this._main_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_dropdown_background.ggVisible=false;
		this._main_dropdown_background.className='ggskin ggskin_rectangle ';
		this._main_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 160px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._main_dropdown_background.setAttribute('style',hs);
		this._main_dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._main_dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_dropdown_background.onclick=function (e) {
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
		}
		this._main_dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		this._main_dropdown_scrollarea=document.createElement('div');
		this._main_dropdown_scrollarea__content=document.createElement('div');
		this._main_dropdown_scrollarea.ggContent=this._main_dropdown_scrollarea__content;
		this._main_dropdown_scrollarea.appendChild(this._main_dropdown_scrollarea__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._main_dropdown_scrollarea__content.setAttribute('style',hs);
		this._main_dropdown_scrollarea.ggId="Main Dropdown Scrollarea";
		this._main_dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_dropdown_scrollarea.ggVisible=true;
		this._main_dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._main_dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 160px;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._main_dropdown_scrollarea.setAttribute('style',hs);
		this._main_dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._main_dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._main_dropdown_cloner=document.createElement('div');
		this._main_dropdown_cloner.ggNumRepeat = 1;
		this._main_dropdown_cloner.ggWidth = 240;
		this._main_dropdown_cloner.ggHeight = 40;
		this._main_dropdown_cloner.ggUpdating = false;
		this._main_dropdown_cloner.ggFilter = [];
		this._main_dropdown_cloner.ggUpdate = function(filter) {
			if(me._main_dropdown_cloner.ggUpdating == true) return;
			me._main_dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._main_dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._main_dropdown_cloner.ggFilter;
			};
			if (me._main_dropdown_cloner.hasChildNodes() == true) {
				while (me._main_dropdown_cloner.firstChild) {
					me._main_dropdown_cloner.removeChild(me._main_dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._main_dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._main_dropdown_cloner__node = document.createElement('div');
					me._main_dropdown_cloner.appendChild(me._main_dropdown_cloner__node);
					me._main_dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._main_dropdown_cloner.ggHeight) + 'px; left:' + (column * me._main_dropdown_cloner.ggWidth) + 'px; height: ' + me._main_dropdown_cloner.ggHeight + 'px; width: ' + me._main_dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_main_dropdown_cloner_Class(nodeId, me);
					me._main_dropdown_cloner__node.appendChild(inst.__div);
					me._main_dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._main_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._main_dropdown_cloner.ggUpdating = false;
		}
		this._main_dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._main_dropdown_cloner.childNodes.length; i++) {
				stack.push(me._main_dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._main_dropdown_cloner.ggTags = [];
		this._main_dropdown_cloner.ggTags[0] = "main";
		this._main_dropdown_cloner.ggId="Main Dropdown Cloner";
		this._main_dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_dropdown_cloner.ggVisible=true;
		this._main_dropdown_cloner.className='ggskin ggskin_cloner ';
		this._main_dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 239px;';
		hs+='pointer-events:none;';
		this._main_dropdown_cloner.setAttribute('style',hs);
		this._main_dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._main_dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._main_dropdown_cloner.childNodes.length; i++) {
				var child=me._main_dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._main_dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._main_dropdown_cloner.ggLastSize) || (me._main_dropdown_cloner.ggLastSize.w!=w) || (me._main_dropdown_cloner.ggLastSize.h!=h)) {
				me._main_dropdown_cloner.ggLastSize={ w:w, h:h };
				me._main_dropdown_cloner.ggUpdate();
			}
		}
		this._main_dropdown_cloner.ggNodeChange=function () {
			me._main_dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._main_dropdown_scrollarea__content.appendChild(this._main_dropdown_cloner);
		this._main_dropdown_background.appendChild(this._main_dropdown_scrollarea);
		this._main_menu.appendChild(this._main_dropdown_background);
		this._main_title_background=document.createElement('div');
		this._main_title_background.ggId="Main Title Background";
		this._main_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_title_background.ggVisible=true;
		this._main_title_background.className='ggskin ggskin_rectangle ';
		this._main_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._main_title_background.setAttribute('style',hs);
		this._main_title_background.style[domTransform + 'Origin']='50% 50%';
		me._main_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_title_background.onclick=function (e) {
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility=(Number(me._main_dropdown_background.style.opacity)>0||!me._main_dropdown_background.style.opacity)?'inherit':'hidden';
			me._main_dropdown_background.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="270.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=20;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me._occupied_dropdown_background.style[domTransition]='none';
			me._occupied_dropdown_background.style.visibility='hidden';
			me._occupied_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._occupied_location_icon.style[domTransition]='none';
			} else {
				me._occupied_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_location_icon.ggParameter.a="0.0000";
			me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._occupied_title_container.style[domTransition]='none';
			} else {
				me._occupied_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._occupied_title_container.ggParameter.rx=0;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
			me._vacant_dropdown_background.style[domTransition]='none';
			me._vacant_dropdown_background.style.visibility='hidden';
			me._vacant_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._vacant_location_icon.style[domTransition]='none';
			} else {
				me._vacant_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_location_icon.ggParameter.a="0.0000";
			me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._vacant_title_container.style[domTransition]='none';
			} else {
				me._vacant_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._vacant_title_container.ggParameter.rx=0;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
		}
		this._main_title_background.ondblclick=function (e) {
			me._main_dropdown_background.style[domTransition]='none';
			me._main_dropdown_background.style.visibility='hidden';
			me._main_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._main_location_icon.style[domTransition]='none';
			} else {
				me._main_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_location_icon.ggParameter.a="0.0000";
			me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._main_title_container.style[domTransition]='none';
			} else {
				me._main_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._main_title_container.ggParameter.rx=0;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
		}
		this._main_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._main_title_container=document.createElement('div');
		this._main_title_container.ggId="Main Title Container";
		this._main_title_container.ggLeft=-250;
		this._main_title_container.ggTop=-25;
		this._main_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_title_container.ggVisible=true;
		this._main_title_container.className='ggskin ggskin_container ';
		this._main_title_container.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._main_title_container.setAttribute('style',hs);
		this._main_title_container.style[domTransform + 'Origin']='50% 50%';
		me._main_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_title_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._main_select_icon=document.createElement('div');
		this._main_select_icon__img=document.createElement('img');
		this._main_select_icon__img.className='ggskin ggskin_svg';
		this._main_select_icon__img.setAttribute('src',basePath + 'images/main_select_icon.svg');
		this._main_select_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._main_select_icon__img['ondragstart']=function() { return false; };
		this._main_select_icon.appendChild(this._main_select_icon__img);
		this._main_select_icon.ggId="Main Select Icon";
		this._main_select_icon.ggLeft=-22;
		this._main_select_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_select_icon.ggVisible=true;
		this._main_select_icon.className='ggskin ggskin_svg ';
		this._main_select_icon.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._main_select_icon.setAttribute('style',hs);
		this._main_select_icon.style[domTransform + 'Origin']='50% 50%';
		me._main_select_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_select_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_select_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._main_title_container.appendChild(this._main_select_icon);
		this._main_location_icon=document.createElement('div');
		this._main_location_icon__img=document.createElement('img');
		this._main_location_icon__img.className='ggskin ggskin_svg';
		this._main_location_icon__img.setAttribute('src',basePath + 'images/main_location_icon.svg');
		this._main_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._main_location_icon__img['ondragstart']=function() { return false; };
		this._main_location_icon.appendChild(this._main_location_icon__img);
		this._main_location_icon.ggId="Main Location Icon";
		this._main_location_icon.ggLeft=-240;
		this._main_location_icon.ggTop=-12;
		this._main_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_location_icon.ggVisible=true;
		this._main_location_icon.className='ggskin ggskin_svg ';
		this._main_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._main_location_icon.setAttribute('style',hs);
		this._main_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._main_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._main_title_container.appendChild(this._main_location_icon);
		this._main_menu_title_text=document.createElement('div');
		this._main_menu_title_text__text=document.createElement('div');
		this._main_menu_title_text.className='ggskin ggskin_textdiv';
		this._main_menu_title_text.ggTextDiv=this._main_menu_title_text__text;
		this._main_menu_title_text.ggId="Main Menu Title Text";
		this._main_menu_title_text.ggLeft=-210;
		this._main_menu_title_text.ggTop=-10;
		this._main_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_menu_title_text.ggVisible=true;
		this._main_menu_title_text.className='ggskin ggskin_text ';
		this._main_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._main_menu_title_text.setAttribute('style',hs);
		this._main_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._main_menu_title_text__text.setAttribute('style',hs);
		this._main_menu_title_text__text.innerHTML="<b>Shopping Village<\/b>";
		this._main_menu_title_text.appendChild(this._main_menu_title_text__text);
		me._main_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._main_title_container.appendChild(this._main_menu_title_text);
		this._main_title_background.appendChild(this._main_title_container);
		this._main_menu.appendChild(this._main_title_background);
		this._list.appendChild(this._main_menu);
		this.divSkin.appendChild(this._list);
		this._map=document.createElement('div');
		this._map.ggId="Map";
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		this._map.className='ggskin ggskin_container ';
		this._map.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		this._map.setAttribute('style',hs);
		this._map.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		me._map.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._map.ggCurrentLogicStateVisible = -1;
		this._map.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width <= 768)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style[domTransition]='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
				else {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					me._map.ggVisible=true;
				}
			}
		}
		this._map.ggUpdatePosition=function (useTransition) {
			me._map.ggUpdateConditionResize();
		}
		this._map_plan_menu=document.createElement('div');
		this._map_plan_menu.ggId="Map Plan Menu";
		this._map_plan_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_plan_menu.ggVisible=false;
		this._map_plan_menu.className='ggskin ggskin_container ';
		this._map_plan_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 860px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		this._map_plan_menu.setAttribute('style',hs);
		this._map_plan_menu.style[domTransform + 'Origin']='50% 50%';
		me._map_plan_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_plan_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_plan_menu.ggUpdatePosition=function (useTransition) {
		}
		this._map_01_image=document.createElement('div');
		this._map_01_image__img=document.createElement('img');
		this._map_01_image__img.className='ggskin ggskin_image';
		this._map_01_image__img.setAttribute('src',basePath + 'images/map_01_image.png');
		this._map_01_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_01_image__img.className='ggskin ggskin_image';
		this._map_01_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_01_image__img);
		this._map_01_image.appendChild(this._map_01_image__img);
		this._map_01_image.ggId="Map 01 Image";
		this._map_01_image.ggLeft=-620;
		this._map_01_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_image.ggVisible=false;
		this._map_01_image.className='ggskin ggskin_image ';
		this._map_01_image.ggType='image';
		hs ='';
		hs+='height : 675px;';
		hs+='left : -620px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1140px;';
		hs+='pointer-events:auto;';
		this._map_01_image.setAttribute('style',hs);
		this._map_01_image.style[domTransform + 'Origin']='50% 50%';
		me._map_01_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._map_plan_menu.appendChild(this._map_01_image);
		this._map_00_image=document.createElement('div');
		this._map_00_image__img=document.createElement('img');
		this._map_00_image__img.className='ggskin ggskin_image';
		this._map_00_image__img.setAttribute('src',basePath + 'images/map_00_image.png');
		this._map_00_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_00_image__img.className='ggskin ggskin_image';
		this._map_00_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_00_image__img);
		this._map_00_image.appendChild(this._map_00_image__img);
		this._map_00_image.ggId="Map 00 Image";
		this._map_00_image.ggLeft=-620;
		this._map_00_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_image.ggVisible=false;
		this._map_00_image.className='ggskin ggskin_image ';
		this._map_00_image.ggType='image';
		hs ='';
		hs+='height : 675px;';
		hs+='left : -620px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 1140px;';
		hs+='pointer-events:auto;';
		this._map_00_image.setAttribute('style',hs);
		this._map_00_image.style[domTransform + 'Origin']='50% 50%';
		me._map_00_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.__00_entrance_marker=document.createElement('div');
		this.__00_entrance_marker.ggMarkerNodeId='{node14}';
		nodeMarker.push(this.__00_entrance_marker);
		this.__00_entrance_marker.ggId="00 Entrance Marker";
		this.__00_entrance_marker.ggLeft=-25;
		this.__00_entrance_marker.ggTop=-443;
		this.__00_entrance_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_entrance_marker.ggVisible=true;
		this.__00_entrance_marker.className='ggskin ggskin_mark ';
		this.__00_entrance_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -443px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__00_entrance_marker.setAttribute('style',hs);
		this.__00_entrance_marker.style[domTransform + 'Origin']='50% 50%';
		me.__00_entrance_marker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__00_entrance_marker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__00_entrance_marker.onclick=function (e) {
			me._map_menu_title_background.onclick();
			me.player.openNext("{node14}","");
		}
		this.__00_entrance_marker.ggUpdateConditionNodeChange=function () {
				me.__00_entrance_marker__normal.ggNodeChangeMain();
				me.__00_entrance_marker__active.ggNodeChangeMain();
		}
		this.__00_entrance_marker.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__00_entrance_marker.ggNodeChange=function () {
			me.__00_entrance_marker.ggUpdateConditionNodeChange();
		}
		this._map_00_image.appendChild(this.__00_entrance_marker);
		this.__00_dye_house_marker=document.createElement('div');
		this.__00_dye_house_marker.ggMarkerNodeId='{node4}';
		nodeMarker.push(this.__00_dye_house_marker);
		this.__00_dye_house_marker.ggId="00 Dye House Marker";
		this.__00_dye_house_marker.ggLeft=-328;
		this.__00_dye_house_marker.ggTop=-445;
		this.__00_dye_house_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_dye_house_marker.ggVisible=true;
		this.__00_dye_house_marker.className='ggskin ggskin_mark ';
		this.__00_dye_house_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -328px;';
		hs+='position : absolute;';
		hs+='top : -445px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__00_dye_house_marker.setAttribute('style',hs);
		this.__00_dye_house_marker.style[domTransform + 'Origin']='50% 50%';
		me.__00_dye_house_marker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__00_dye_house_marker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__00_dye_house_marker.onclick=function (e) {
			me._map_menu_title_background.onclick();
			me.player.openNext("{node4}","");
		}
		this.__00_dye_house_marker.ggUpdateConditionNodeChange=function () {
				me.__00_dye_house_marker__normal.ggNodeChangeMain();
				me.__00_dye_house_marker__active.ggNodeChangeMain();
		}
		this.__00_dye_house_marker.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__00_dye_house_marker.ggNodeChange=function () {
			me.__00_dye_house_marker.ggUpdateConditionNodeChange();
		}
		this._map_00_image.appendChild(this.__00_dye_house_marker);
		this.__00_the_frame_house_marker=document.createElement('div');
		this.__00_the_frame_house_marker.ggMarkerNodeId='{node12}';
		nodeMarker.push(this.__00_the_frame_house_marker);
		this.__00_the_frame_house_marker.ggId="00 The Frame House Marker";
		this.__00_the_frame_house_marker.ggLeft=304;
		this.__00_the_frame_house_marker.ggTop=-345;
		this.__00_the_frame_house_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_the_frame_house_marker.ggVisible=true;
		this.__00_the_frame_house_marker.className='ggskin ggskin_mark ';
		this.__00_the_frame_house_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 304px;';
		hs+='position : absolute;';
		hs+='top : -345px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this.__00_the_frame_house_marker.setAttribute('style',hs);
		this.__00_the_frame_house_marker.style[domTransform + 'Origin']='50% 50%';
		me.__00_the_frame_house_marker.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me.__00_the_frame_house_marker.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this.__00_the_frame_house_marker.onclick=function (e) {
			me._map_menu_title_background.onclick();
			me.player.openNext("{node12}","");
		}
		this.__00_the_frame_house_marker.ggUpdateConditionNodeChange=function () {
				me.__00_the_frame_house_marker__normal.ggNodeChangeMain();
				me.__00_the_frame_house_marker__active.ggNodeChangeMain();
		}
		this.__00_the_frame_house_marker.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.__00_the_frame_house_marker.ggNodeChange=function () {
			me.__00_the_frame_house_marker.ggUpdateConditionNodeChange();
		}
		this._map_00_image.appendChild(this.__00_the_frame_house_marker);
		this._map_plan_menu.appendChild(this._map_00_image);
		this._map_01_menu_background=document.createElement('div');
		this._map_01_menu_background.ggId="Map 01 Menu Background";
		this._map_01_menu_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_menu_background.ggVisible=true;
		this._map_01_menu_background.className='ggskin ggskin_rectangle ';
		this._map_01_menu_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,160,120,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -180px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._map_01_menu_background.setAttribute('style',hs);
		this._map_01_menu_background.style[domTransform + 'Origin']='50% 50%';
		me._map_01_menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_menu_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_menu_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_01_title_text=document.createElement('div');
		this._map_01_title_text__text=document.createElement('div');
		this._map_01_title_text.className='ggskin ggskin_textdiv';
		this._map_01_title_text.ggTextDiv=this._map_01_title_text__text;
		this._map_01_title_text.ggId="Map 01 Title Text";
		this._map_01_title_text.ggLeft=-90;
		this._map_01_title_text.ggTop=-10;
		this._map_01_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_title_text.ggVisible=true;
		this._map_01_title_text.className='ggskin ggskin_text ';
		this._map_01_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._map_01_title_text.setAttribute('style',hs);
		this._map_01_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 176px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._map_01_title_text__text.setAttribute('style',hs);
		this._map_01_title_text__text.innerHTML="<b>First Floor<\/b>";
		this._map_01_title_text.appendChild(this._map_01_title_text__text);
		me._map_01_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_01_menu_background.appendChild(this._map_01_title_text);
		this._map_plan_menu.appendChild(this._map_01_menu_background);
		this._map_00_menu_background=document.createElement('div');
		this._map_00_menu_background.ggId="Map 00 Menu Background";
		this._map_00_menu_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_menu_background.ggVisible=true;
		this._map_00_menu_background.className='ggskin ggskin_rectangle ';
		this._map_00_menu_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,160,120,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -180px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._map_00_menu_background.setAttribute('style',hs);
		this._map_00_menu_background.style[domTransform + 'Origin']='50% 50%';
		me._map_00_menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_menu_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_menu_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_00_title_text=document.createElement('div');
		this._map_00_title_text__text=document.createElement('div');
		this._map_00_title_text.className='ggskin ggskin_textdiv';
		this._map_00_title_text.ggTextDiv=this._map_00_title_text__text;
		this._map_00_title_text.ggId="Map 00 Title Text";
		this._map_00_title_text.ggLeft=-90;
		this._map_00_title_text.ggTop=-10;
		this._map_00_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_title_text.ggVisible=true;
		this._map_00_title_text.className='ggskin ggskin_text ';
		this._map_00_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._map_00_title_text.setAttribute('style',hs);
		this._map_00_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 176px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._map_00_title_text__text.setAttribute('style',hs);
		this._map_00_title_text__text.innerHTML="<b>Ground Floor<\/b>";
		this._map_00_title_text.appendChild(this._map_00_title_text__text);
		me._map_00_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_00_menu_background.appendChild(this._map_00_title_text);
		this._map_plan_menu.appendChild(this._map_00_menu_background);
		this._map_01_title_background=document.createElement('div');
		this._map_01_title_background.ggId="Map 01 Title Background";
		this._map_01_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_title_background.ggVisible=true;
		this._map_01_title_background.className='ggskin ggskin_rectangle ';
		this._map_01_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		this._map_01_title_background.setAttribute('style',hs);
		this._map_01_title_background.style[domTransform + 'Origin']='50% 50%';
		me._map_01_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_title_background.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._map_01_location_icon.style[domTransition]='none';
			} else {
				me._map_01_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_01_location_icon.ggParameter.a="0.0000";
			me._map_01_location_icon.style[domTransform]=parameterToTransform(me._map_01_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._map_01_menu_background.style[domTransition]='none';
			} else {
				me._map_01_menu_background.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_01_menu_background.ggParameter.rx=0;me._map_01_menu_background.ggParameter.ry=50;
			me._map_01_menu_background.style[domTransform]=parameterToTransform(me._map_01_menu_background.ggParameter);
			me._map_01_image.style[domTransition]='none';
			me._map_01_image.style.visibility=(Number(me._map_01_image.style.opacity)>0||!me._map_01_image.style.opacity)?'inherit':'hidden';
			me._map_01_image.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._map_00_menu_background.style[domTransition]='none';
			} else {
				me._map_00_menu_background.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_00_menu_background.ggParameter.rx=0;me._map_00_menu_background.ggParameter.ry=0;
			me._map_00_menu_background.style[domTransform]=parameterToTransform(me._map_00_menu_background.ggParameter);
			me._map_00_image.style[domTransition]='none';
			me._map_00_image.style.visibility='hidden';
			me._map_00_image.ggVisible=false;
		}
		this._map_01_title_background.onmouseover=function (e) {
			me._map_01_pop_text.style[domTransition]='none';
			me._map_01_pop_text.style.visibility=(Number(me._map_01_pop_text.style.opacity)>0||!me._map_01_pop_text.style.opacity)?'inherit':'hidden';
			me._map_01_pop_text.ggVisible=true;
		}
		this._map_01_title_background.onmouseout=function (e) {
			me._map_01_pop_text.style[domTransition]='none';
			me._map_01_pop_text.style.visibility='hidden';
			me._map_01_pop_text.ggVisible=false;
			me.elementMouseDown['map_01_title_background']=false;
		}
		this._map_01_title_background.onmousedown=function (e) {
			me.elementMouseDown['map_01_title_background']=true;
		}
		this._map_01_title_background.onmouseup=function (e) {
			me.elementMouseDown['map_01_title_background']=false;
		}
		this._map_01_title_background.ontouchend=function (e) {
			me.elementMouseDown['map_01_title_background']=false;
		}
		this._map_01_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_01_location_icon=document.createElement('div');
		this._map_01_location_icon__img=document.createElement('img');
		this._map_01_location_icon__img.className='ggskin ggskin_svg';
		this._map_01_location_icon__img.setAttribute('src',basePath + 'images/map_01_location_icon.svg');
		this._map_01_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_01_location_icon__img['ondragstart']=function() { return false; };
		this._map_01_location_icon.appendChild(this._map_01_location_icon__img);
		this._map_01_location_icon.ggId="Map 01 Location Icon";
		this._map_01_location_icon.ggLeft=-15;
		this._map_01_location_icon.ggTop=-15;
		this._map_01_location_icon.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		this._map_01_location_icon.ggVisible=true;
		this._map_01_location_icon.className='ggskin ggskin_svg ';
		this._map_01_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._map_01_location_icon.setAttribute('style',hs);
		this._map_01_location_icon.style[domTransform + 'Origin']='50% 50%';
		this._map_01_location_icon.style[domTransform]=parameterToTransform(this._map_01_location_icon.ggParameter);
		me._map_01_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_01_title_background.appendChild(this._map_01_location_icon);
		this._map_01_pop_text=document.createElement('div');
		this._map_01_pop_text__text=document.createElement('div');
		this._map_01_pop_text.className='ggskin ggskin_textdiv';
		this._map_01_pop_text.ggTextDiv=this._map_01_pop_text__text;
		this._map_01_pop_text.ggId="Map 01 Pop Text";
		this._map_01_pop_text.ggLeft=30;
		this._map_01_pop_text.ggTop=-10;
		this._map_01_pop_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_pop_text.ggVisible=false;
		this._map_01_pop_text.className='ggskin ggskin_text ';
		this._map_01_pop_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : hidden;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._map_01_pop_text.setAttribute('style',hs);
		this._map_01_pop_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 176px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._map_01_pop_text__text.setAttribute('style',hs);
		this._map_01_pop_text__text.innerHTML="<b>First Floor<\/b>";
		this._map_01_pop_text.appendChild(this._map_01_pop_text__text);
		me._map_01_pop_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_pop_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_pop_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_01_title_background.appendChild(this._map_01_pop_text);
		this._map_plan_menu.appendChild(this._map_01_title_background);
		this._map_00_title_background=document.createElement('div');
		this._map_00_title_background.ggId="Map 00 Title Background";
		this._map_00_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_title_background.ggVisible=true;
		this._map_00_title_background.className='ggskin ggskin_rectangle ';
		this._map_00_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		this._map_00_title_background.setAttribute('style',hs);
		this._map_00_title_background.style[domTransform + 'Origin']='50% 50%';
		me._map_00_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_title_background.onclick=function (e) {
			var flag=me._map_00_location_icon.ggAngleActive;
			if (me.player.transitionsDisabled) {
				me._map_00_location_icon.style[domTransition]='none';
			} else {
				me._map_00_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_00_location_icon.ggParameter.a=90;
				me._map_00_location_icon.style[domTransform]=parameterToTransform(me._map_00_location_icon.ggParameter);
			} else {
				me._map_00_location_icon.ggParameter.a="0.0000";
				me._map_00_location_icon.style[domTransform]=parameterToTransform(me._map_00_location_icon.ggParameter);
			}
			me._map_00_location_icon.ggAngleActive=!flag;
			if (me.player.transitionsDisabled) {
				me._map_00_menu_background.style[domTransition]='none';
			} else {
				me._map_00_menu_background.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_00_menu_background.ggParameter.rx=0;me._map_00_menu_background.ggParameter.ry=50;
			me._map_00_menu_background.style[domTransform]=parameterToTransform(me._map_00_menu_background.ggParameter);
			me._map_00_image.style[domTransition]='none';
			me._map_00_image.style.visibility=(Number(me._map_00_image.style.opacity)>0||!me._map_00_image.style.opacity)?'inherit':'hidden';
			me._map_00_image.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._map_01_menu_background.style[domTransition]='none';
			} else {
				me._map_01_menu_background.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_01_menu_background.ggParameter.rx=0;me._map_01_menu_background.ggParameter.ry=0;
			me._map_01_menu_background.style[domTransform]=parameterToTransform(me._map_01_menu_background.ggParameter);
			me._map_01_image.style[domTransition]='none';
			me._map_01_image.style.visibility='hidden';
			me._map_01_image.ggVisible=false;
		}
		this._map_00_title_background.onmouseover=function (e) {
			me._map_00_pop_text.style[domTransition]='none';
			me._map_00_pop_text.style.visibility=(Number(me._map_00_pop_text.style.opacity)>0||!me._map_00_pop_text.style.opacity)?'inherit':'hidden';
			me._map_00_pop_text.ggVisible=true;
		}
		this._map_00_title_background.onmouseout=function (e) {
			me._map_00_pop_text.style[domTransition]='none';
			me._map_00_pop_text.style.visibility='hidden';
			me._map_00_pop_text.ggVisible=false;
			me.elementMouseDown['map_00_title_background']=false;
		}
		this._map_00_title_background.onmousedown=function (e) {
			me.elementMouseDown['map_00_title_background']=true;
		}
		this._map_00_title_background.onmouseup=function (e) {
			me.elementMouseDown['map_00_title_background']=false;
		}
		this._map_00_title_background.ontouchend=function (e) {
			me.elementMouseDown['map_00_title_background']=false;
		}
		this._map_00_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_00_location_icon=document.createElement('div');
		this._map_00_location_icon__img=document.createElement('img');
		this._map_00_location_icon__img.className='ggskin ggskin_svg';
		this._map_00_location_icon__img.setAttribute('src',basePath + 'images/map_00_location_icon.svg');
		this._map_00_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_00_location_icon__img['ondragstart']=function() { return false; };
		this._map_00_location_icon.appendChild(this._map_00_location_icon__img);
		this._map_00_location_icon.ggId="Map 00 Location Icon";
		this._map_00_location_icon.ggLeft=-15;
		this._map_00_location_icon.ggTop=-15;
		this._map_00_location_icon.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		this._map_00_location_icon.ggVisible=true;
		this._map_00_location_icon.className='ggskin ggskin_svg ';
		this._map_00_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._map_00_location_icon.setAttribute('style',hs);
		this._map_00_location_icon.style[domTransform + 'Origin']='50% 50%';
		this._map_00_location_icon.style[domTransform]=parameterToTransform(this._map_00_location_icon.ggParameter);
		me._map_00_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_location_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_00_title_background.appendChild(this._map_00_location_icon);
		this._map_00_pop_text=document.createElement('div');
		this._map_00_pop_text__text=document.createElement('div');
		this._map_00_pop_text.className='ggskin ggskin_textdiv';
		this._map_00_pop_text.ggTextDiv=this._map_00_pop_text__text;
		this._map_00_pop_text.ggId="Map 00 Pop Text";
		this._map_00_pop_text.ggLeft=90;
		this._map_00_pop_text.ggTop=-10;
		this._map_00_pop_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_pop_text.ggVisible=false;
		this._map_00_pop_text.className='ggskin ggskin_text ';
		this._map_00_pop_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : hidden;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._map_00_pop_text.setAttribute('style',hs);
		this._map_00_pop_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 176px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._map_00_pop_text__text.setAttribute('style',hs);
		this._map_00_pop_text__text.innerHTML="<b>Ground Floor<\/b>";
		this._map_00_pop_text.appendChild(this._map_00_pop_text__text);
		me._map_00_pop_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_pop_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_pop_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_00_title_background.appendChild(this._map_00_pop_text);
		this._map_plan_menu.appendChild(this._map_00_title_background);
		this._map.appendChild(this._map_plan_menu);
		this._map_menu_title_background=document.createElement('div');
		this._map_menu_title_background.ggId="Map Menu Title Background";
		this._map_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu_title_background.ggVisible=true;
		this._map_menu_title_background.className='ggskin ggskin_rectangle ';
		this._map_menu_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #50a078;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 680px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		this._map_menu_title_background.setAttribute('style',hs);
		this._map_menu_title_background.style[domTransform + 'Origin']='50% 50%';
		me._map_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_menu_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_menu_title_background.onclick=function (e) {
			me._map_menu_close_icon.ggVisible = !me._map_menu_close_icon.ggVisible;
			var flag=me._map_menu_close_icon.ggVisible;
			me._map_menu_close_icon.style[domTransition]='none';
			me._map_menu_close_icon.style.visibility=((flag)&&(Number(me._map_menu_close_icon.style.opacity)>0||!me._map_menu_close_icon.style.opacity))?'inherit':'hidden';
			me._map_menu_open_icon.ggVisible = !me._map_menu_open_icon.ggVisible;
			var flag=me._map_menu_open_icon.ggVisible;
			me._map_menu_open_icon.style[domTransition]='none';
			me._map_menu_open_icon.style.visibility=((flag)&&(Number(me._map_menu_open_icon.style.opacity)>0||!me._map_menu_open_icon.style.opacity))?'inherit':'hidden';
			me._map_plan_menu.ggVisible = !me._map_plan_menu.ggVisible;
			var flag=me._map_plan_menu.ggVisible;
			me._map_plan_menu.style[domTransition]='none';
			me._map_plan_menu.style.visibility=((flag)&&(Number(me._map_plan_menu.style.opacity)>0||!me._map_plan_menu.style.opacity))?'inherit':'hidden';
			me._map_00_menu_background.style[domTransition]='none';
			me._map_00_menu_background.ggParameter.rx=0;me._map_00_menu_background.ggParameter.ry=0;
			me._map_00_menu_background.style[domTransform]=parameterToTransform(me._map_00_menu_background.ggParameter);
			me._map_00_image.style[domTransition]='none';
			me._map_00_image.style.visibility='hidden';
			me._map_00_image.ggVisible=false;
			me._map_01_menu_background.style[domTransition]='none';
			me._map_01_menu_background.ggParameter.rx=0;me._map_01_menu_background.ggParameter.ry=0;
			me._map_01_menu_background.style[domTransform]=parameterToTransform(me._map_01_menu_background.ggParameter);
			me._map_01_image.style[domTransition]='none';
			me._map_01_image.style.visibility='hidden';
			me._map_01_image.ggVisible=false;
		}
		this._map_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['map_menu_title_background']=true;
		}
		this._map_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['map_menu_title_background']=false;
		}
		this._map_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['map_menu_title_background']=false;
		}
		me._map_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		this._map_menu_title_background.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['map_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_menu_title_background.style[domTransition]='background-color none';
				if (me._map_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_menu_title_background.style.backgroundColor="rgba(80,130,100,1)";
				}
				else {
					me._map_menu_title_background.style.backgroundColor="rgba(80,160,120,1)";
				}
			}
		}
		this._map_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_menu_open_icon=document.createElement('div');
		this._map_menu_open_icon__img=document.createElement('img');
		this._map_menu_open_icon__img.className='ggskin ggskin_svg';
		this._map_menu_open_icon__img.setAttribute('src',basePath + 'images/map_menu_open_icon.svg');
		this._map_menu_open_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_menu_open_icon__img['ondragstart']=function() { return false; };
		this._map_menu_open_icon.appendChild(this._map_menu_open_icon__img);
		this._map_menu_open_icon.ggId="Map Menu Open Icon";
		this._map_menu_open_icon.ggLeft=-45;
		this._map_menu_open_icon.ggTop=-15;
		this._map_menu_open_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu_open_icon.ggVisible=true;
		this._map_menu_open_icon.className='ggskin ggskin_svg ';
		this._map_menu_open_icon.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -45px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._map_menu_open_icon.setAttribute('style',hs);
		this._map_menu_open_icon.style[domTransform + 'Origin']='50% 50%';
		me._map_menu_open_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_menu_open_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_menu_open_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_menu_title_background.appendChild(this._map_menu_open_icon);
		this._map_menu_close_icon=document.createElement('div');
		this._map_menu_close_icon__img=document.createElement('img');
		this._map_menu_close_icon__img.className='ggskin ggskin_svg';
		this._map_menu_close_icon__img.setAttribute('src',basePath + 'images/map_menu_close_icon.svg');
		this._map_menu_close_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_menu_close_icon__img['ondragstart']=function() { return false; };
		this._map_menu_close_icon.appendChild(this._map_menu_close_icon__img);
		this._map_menu_close_icon.ggId="Map Menu Close Icon";
		this._map_menu_close_icon.ggLeft=-40;
		this._map_menu_close_icon.ggTop=-10;
		this._map_menu_close_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu_close_icon.ggVisible=false;
		this._map_menu_close_icon.className='ggskin ggskin_svg ';
		this._map_menu_close_icon.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._map_menu_close_icon.setAttribute('style',hs);
		this._map_menu_close_icon.style[domTransform + 'Origin']='50% 50%';
		me._map_menu_close_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_menu_close_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_menu_close_icon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_menu_title_background.appendChild(this._map_menu_close_icon);
		this._map_menu_title_text=document.createElement('div');
		this._map_menu_title_text__text=document.createElement('div');
		this._map_menu_title_text.className='ggskin ggskin_textdiv';
		this._map_menu_title_text.ggTextDiv=this._map_menu_title_text__text;
		this._map_menu_title_text.ggId="Map Menu Title Text";
		this._map_menu_title_text.ggLeft=-160;
		this._map_menu_title_text.ggTop=-10;
		this._map_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu_title_text.ggVisible=true;
		this._map_menu_title_text.className='ggskin ggskin_text ';
		this._map_menu_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -160px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		this._map_menu_title_text.setAttribute('style',hs);
		this._map_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 96px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._map_menu_title_text__text.setAttribute('style',hs);
		this._map_menu_title_text__text.innerHTML="<b>Floor Plans<\/b>";
		this._map_menu_title_text.appendChild(this._map_menu_title_text__text);
		me._map_menu_title_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_menu_title_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_menu_title_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._map_menu_title_background.appendChild(this._map_menu_title_text);
		this._map.appendChild(this._map_menu_title_background);
		this.divSkin.appendChild(this._map);
		this._instructions=document.createElement('div');
		this._instructions.ggId="Instructions";
		this._instructions.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._instructions.ggVisible=true;
		this._instructions.className='ggskin ggskin_container ';
		this._instructions.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		this._instructions.setAttribute('style',hs);
		this._instructions.style[domTransform + 'Origin']='50% 50%';
		me._instructions.ggIsActive=function() {
			return false;
		}
		me._instructions.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._instructions.ggCurrentLogicStateScaling = -1;
		this._instructions.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 768)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._instructions.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._instructions.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._instructions.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._instructions.ggCurrentLogicStateScaling == 0) {
					me._instructions.ggParameter.sx = 0.8;
					me._instructions.ggParameter.sy = 0.8;
					me._instructions.style[domTransform]=parameterToTransform(me._instructions.ggParameter);
				}
				else {
					me._instructions.ggParameter.sx = 1;
					me._instructions.ggParameter.sy = 1;
					me._instructions.style[domTransform]=parameterToTransform(me._instructions.ggParameter);
				}
			}
		}
		this._instructions.ggUpdatePosition=function (useTransition) {
			me._instructions.ggUpdateConditionResize();
		}
		this._instructions_image=document.createElement('div');
		this._instructions_image__img=document.createElement('img');
		this._instructions_image__img.className='ggskin ggskin_image';
		this._instructions_image__img.setAttribute('src',basePath + 'images/instructions_image.png');
		this._instructions_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._instructions_image__img.className='ggskin ggskin_image';
		this._instructions_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._instructions_image__img);
		this._instructions_image.appendChild(this._instructions_image__img);
		this._instructions_image.ggId="Instructions Image";
		this._instructions_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._instructions_image.ggVisible=false;
		this._instructions_image.className='ggskin ggskin_image ';
		this._instructions_image.ggType='image';
		hs ='';
		hs+='height : 900px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		this._instructions_image.setAttribute('style',hs);
		this._instructions_image.style[domTransform + 'Origin']='50% 50%';
		me._instructions_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._instructions_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._instructions_image.ggUpdatePosition=function (useTransition) {
		}
		this._instructions.appendChild(this._instructions_image);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 631px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._rectangle_1.onmouseover=function (e) {
			me._instructions_image.style[domTransition]='none';
			me._instructions_image.style.visibility=(Number(me._instructions_image.style.opacity)>0||!me._instructions_image.style.opacity)?'inherit':'hidden';
			me._instructions_image.ggVisible=true;
		}
		this._rectangle_1.onmouseout=function (e) {
			me._instructions_image.style[domTransition]='none';
			me._instructions_image.style.visibility='hidden';
			me._instructions_image.ggVisible=false;
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._info_icon=document.createElement('div');
		this._info_icon__img=document.createElement('img');
		this._info_icon__img.className='ggskin ggskin_svg';
		this._info_icon__img.setAttribute('src',basePath + 'images/info_icon.svg');
		this._info_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_icon__img['ondragstart']=function() { return false; };
		this._info_icon.appendChild(this._info_icon__img);
		this._info_icon__imgo=document.createElement('img');
		this._info_icon__imgo.className='ggskin ggskin_svg';
		this._info_icon__imgo.setAttribute('src',basePath + 'images/info_icon__o.svg');
		this._info_icon__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info_icon__imgo['ondragstart']=function() { return false; };
		this._info_icon.appendChild(this._info_icon__imgo);
		this._info_icon.ggId="Info Icon";
		this._info_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_icon.ggVisible=true;
		this._info_icon.className='ggskin ggskin_svg ';
		this._info_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._info_icon.setAttribute('style',hs);
		this._info_icon.style[domTransform + 'Origin']='50% 50%';
		me._info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_icon.onmouseover=function (e) {
			me._info_icon__img.style.visibility='hidden';
			me._info_icon__imgo.style.visibility='inherit';
		}
		this._info_icon.onmouseout=function (e) {
			me._info_icon__img.style.visibility='inherit';
			me._info_icon__imgo.style.visibility='hidden';
		}
		this._info_icon.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.appendChild(this._info_icon);
		this._instructions.appendChild(this._rectangle_1);
		this.divSkin.appendChild(this._instructions);
		this._screentint_info=document.createElement('div');
		this._screentint_info.ggId="screentint_info";
		this._screentint_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint_info.ggVisible=false;
		this._screentint_info.className='ggskin ggskin_rectangle ';
		this._screentint_info.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint_info.setAttribute('style',hs);
		this._screentint_info.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		me._screentint_info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint_info.onclick=function (e) {
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint_info.style[domTransition]='none';
			me._screentint_info.style.visibility='hidden';
			me._screentint_info.ggVisible=false;
			me._play_button.onclick();
		}
		this._screentint_info.onmouseover=function (e) {
			me.elementMouseOver['screentint_info']=true;
		}
		this._screentint_info.onmouseout=function (e) {
			me.elementMouseOver['screentint_info']=false;
		}
		this._screentint_info.ontouchend=function (e) {
			me.elementMouseOver['screentint_info']=false;
		}
		this._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint_info);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 600px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._information.ggCurrentLogicStatePosition = -1;
		this._information.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 768)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._information.style[domTransition]='left none, top none';
				if (me._information.ggCurrentLogicStatePosition == 0) {
					me._information.style.left='40px';
					me._information.style.top='40px';
				}
				else {
					me._information.style.left='600px';
					me._information.style.top='300px';
				}
			}
		}
		this._information.ggUpdatePosition=function (useTransition) {
			me._information.ggUpdateConditionResize();
		}
		this._information_bg=document.createElement('div');
		this._information_bg.ggId="information_bg";
		this._information_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information_bg.ggVisible=true;
		this._information_bg.className='ggskin ggskin_rectangle ';
		this._information_bg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,130,100,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._information_bg.setAttribute('style',hs);
		this._information_bg.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._information_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._information_bg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._information_bg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		hs+='pointer-events:auto;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 298px;';
		hs+='height: 150px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
		hs+='pointer-events:auto;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 248px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_title);
		this._info_popup_close=document.createElement('div');
		this._info_popup_close__img=document.createElement('img');
		this._info_popup_close__img.className='ggskin ggskin_svg';
		this._info_popup_close__img.setAttribute('src',basePath + 'images/info_popup_close.svg');
		this._info_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_popup_close__img['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__img);
		this._info_popup_close__imgo=document.createElement('img');
		this._info_popup_close__imgo.className='ggskin ggskin_svg';
		this._info_popup_close__imgo.setAttribute('src',basePath + 'images/info_popup_close__o.svg');
		this._info_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info_popup_close__imgo['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__imgo);
		this._info_popup_close.ggId="info_popup_close";
		this._info_popup_close.ggLeft=-290;
		this._info_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_popup_close.ggVisible=false;
		this._info_popup_close.className='ggskin ggskin_svg ';
		this._info_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -290px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._info_popup_close.setAttribute('style',hs);
		this._info_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_popup_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_popup_close.onclick=function (e) {
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint_info.style[domTransition]='none';
			me._screentint_info.style.visibility='hidden';
			me._screentint_info.ggVisible=false;
			me._play_button.onclick();
		}
		this._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		this._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		this._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._information.appendChild(this._info_popup_close);
		this.divSkin.appendChild(this._information);
		this.__00_entrance_marker__normal=new SkinElement_hotspotmapicon_Class(this,this.__00_entrance_marker);
		this.__00_entrance_marker__normal.style.visibility='inherit';
		this.__00_entrance_marker__normal.style.left='-15px';
		this.__00_entrance_marker__normal.style.top='-15px';
		this.__00_entrance_marker.ggMarkerNormal=this.__00_entrance_marker__normal;
		this.__00_entrance_marker__active=new SkinElement_hotspotmaptext_Class(this,this.__00_entrance_marker);
		this.__00_entrance_marker__active.style.visibility='hidden';
		this.__00_entrance_marker__active.style.left='-48px';
		this.__00_entrance_marker__active.style.top='-11px';
		this.__00_entrance_marker.ggMarkerActive=this.__00_entrance_marker__active;
		if (this.__00_entrance_marker.firstChild) {
			this.__00_entrance_marker.insertBefore(this.__00_entrance_marker__active,this.__00_entrance_marker.firstChild);
		} else {
			this.__00_entrance_marker.appendChild(this.__00_entrance_marker__active);
		}
		if (this.__00_entrance_marker.firstChild) {
			this.__00_entrance_marker.insertBefore(this.__00_entrance_marker__normal,this.__00_entrance_marker.firstChild);
		} else {
			this.__00_entrance_marker.appendChild(this.__00_entrance_marker__normal);
		}
		this.__00_dye_house_marker__normal=new SkinElement_hotspotmapicon_Class(this,this.__00_dye_house_marker);
		this.__00_dye_house_marker__normal.style.visibility='inherit';
		this.__00_dye_house_marker__normal.style.left='-15px';
		this.__00_dye_house_marker__normal.style.top='-15px';
		this.__00_dye_house_marker.ggMarkerNormal=this.__00_dye_house_marker__normal;
		this.__00_dye_house_marker__active=new SkinElement_hotspotmaptext_Class(this,this.__00_dye_house_marker);
		this.__00_dye_house_marker__active.style.visibility='hidden';
		this.__00_dye_house_marker__active.style.left='-48px';
		this.__00_dye_house_marker__active.style.top='-11px';
		this.__00_dye_house_marker.ggMarkerActive=this.__00_dye_house_marker__active;
		if (this.__00_dye_house_marker.firstChild) {
			this.__00_dye_house_marker.insertBefore(this.__00_dye_house_marker__active,this.__00_dye_house_marker.firstChild);
		} else {
			this.__00_dye_house_marker.appendChild(this.__00_dye_house_marker__active);
		}
		if (this.__00_dye_house_marker.firstChild) {
			this.__00_dye_house_marker.insertBefore(this.__00_dye_house_marker__normal,this.__00_dye_house_marker.firstChild);
		} else {
			this.__00_dye_house_marker.appendChild(this.__00_dye_house_marker__normal);
		}
		this.__00_the_frame_house_marker__normal=new SkinElement_hotspotmapicon_Class(this,this.__00_the_frame_house_marker);
		this.__00_the_frame_house_marker__normal.style.visibility='inherit';
		this.__00_the_frame_house_marker__normal.style.left='-15px';
		this.__00_the_frame_house_marker__normal.style.top='-15px';
		this.__00_the_frame_house_marker.ggMarkerNormal=this.__00_the_frame_house_marker__normal;
		this.__00_the_frame_house_marker__active=new SkinElement_hotspotmaptext_Class(this,this.__00_the_frame_house_marker);
		this.__00_the_frame_house_marker__active.style.visibility='hidden';
		this.__00_the_frame_house_marker__active.style.left='-48px';
		this.__00_the_frame_house_marker__active.style.top='-11px';
		this.__00_the_frame_house_marker.ggMarkerActive=this.__00_the_frame_house_marker__active;
		if (this.__00_the_frame_house_marker.firstChild) {
			this.__00_the_frame_house_marker.insertBefore(this.__00_the_frame_house_marker__active,this.__00_the_frame_house_marker.firstChild);
		} else {
			this.__00_the_frame_house_marker.appendChild(this.__00_the_frame_house_marker__active);
		}
		if (this.__00_the_frame_house_marker.firstChild) {
			this.__00_the_frame_house_marker.insertBefore(this.__00_the_frame_house_marker__normal,this.__00_the_frame_house_marker.firstChild);
		} else {
			this.__00_the_frame_house_marker.appendChild(this.__00_the_frame_house_marker__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._vacant_dropdown_cloner.ggUpdate(me._vacant_dropdown_cloner.ggTags);
			me._occupied_dropdown_cloner.ggUpdate(me._occupied_dropdown_cloner.ggTags);
			me._main_dropdown_cloner.ggUpdate(me._main_dropdown_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._vacant_dropdown_cloner.ggNodeChange();
		me._occupied_dropdown_cloner.ggNodeChange();
		me._main_dropdown_cloner.ggNodeChange();
		me.__00_entrance_marker.ggNodeChange();
		me.__00_dye_house_marker.ggNodeChange();
		me.__00_the_frame_house_marker.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['play_button']) {
		}
		me._play_icon.ggUpdateConditionTimer();
		if (me.elementMouseOver['pause_button']) {
		}
		me._pause_icon.ggUpdateConditionTimer();
		if (me.elementMouseOver['tour_menu_title_background']) {
		}
		me._tour_menu_title_background.ggUpdateConditionTimer();
		me._dropdown_menu_title.ggUpdateText();
		me._vacant_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._occupied_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._main_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseDown['map_01_title_background']) {
			me._map_01_pop_text.style[domTransition]='none';
			me._map_01_pop_text.style.visibility='hidden';
			me._map_01_pop_text.ggVisible=false;
		}
		if (me.elementMouseDown['map_00_title_background']) {
			me._map_00_pop_text.style[domTransition]='none';
			me._map_00_pop_text.style.visibility='hidden';
			me._map_00_pop_text.ggVisible=false;
		}
		if (me.elementMouseOver['map_menu_title_background']) {
		}
		me._map_menu_title_background.ggUpdateConditionTimer();
		if (me.elementMouseOver['screentint_info']) {
			me._pause_button.onclick();
		}
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='HotSpot') {
			this.__div=document.createElement('div');
			this.__div.ggId="HotSpot";
			this.__div.ggLeft=-460;
			this.__div.ggTop=-580;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -460px;';
			hs+='position : absolute;';
			hs+='top : -580px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin._pause_button.onclick();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin._play_button.onclick();
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this._hotspoticon=document.createElement('div');
			this._hotspoticon__img=document.createElement('img');
			this._hotspoticon__img.className='ggskin ggskin_svg';
			this._hotspoticon__img.setAttribute('src',basePath + 'images/hotspoticon.svg');
			this._hotspoticon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspoticon__img['ondragstart']=function() { return false; };
			this._hotspoticon.appendChild(this._hotspoticon__img);
			this._hotspoticon__imgo=document.createElement('img');
			this._hotspoticon__imgo.className='ggskin ggskin_svg';
			this._hotspoticon__imgo.setAttribute('src',basePath + 'images/hotspoticon__o.svg');
			this._hotspoticon__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._hotspoticon__imgo['ondragstart']=function() { return false; };
			this._hotspoticon.appendChild(this._hotspoticon__imgo);
			this._hotspoticon.ggId="HotSpotIcon";
			this._hotspoticon.ggLeft=-26;
			this._hotspoticon.ggTop=-45;
			this._hotspoticon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspoticon.ggVisible=true;
			this._hotspoticon.className='ggskin ggskin_svg ';
			this._hotspoticon.ggType='svg';
			hs ='';
			hs+='height : 48px;';
			hs+='left : -26px;';
			hs+='position : absolute;';
			hs+='top : -45px;';
			hs+='visibility : inherit;';
			hs+='width : 48px;';
			hs+='pointer-events:auto;';
			this._hotspoticon.setAttribute('style',hs);
			this._hotspoticon.style[domTransform + 'Origin']='50% 50%';
			me._hotspoticon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspoticon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspoticon.onmouseover=function (e) {
				me._hotspoticon__img.style.visibility='hidden';
				me._hotspoticon__imgo.style.visibility='inherit';
			}
			this._hotspoticon.onmouseout=function (e) {
				me._hotspoticon__img.style.visibility='inherit';
				me._hotspoticon__imgo.style.visibility='hidden';
			}
			this._hotspoticon.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this.__div.appendChild(this._hotspoticon);
			this._hotspottext=document.createElement('div');
			this._hotspottext__text=document.createElement('div');
			this._hotspottext.className='ggskin ggskin_textdiv';
			this._hotspottext.ggTextDiv=this._hotspottext__text;
			this._hotspottext.ggId="HotSpotText";
			this._hotspottext.ggTop=-45;
			this._hotspottext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspottext.ggVisible=true;
			this._hotspottext.className='ggskin ggskin_text ';
			this._hotspottext.ggType='text';
			hs ='';
			hs+='height : 34px;';
			hs+='left : 35px;';
			hs+='position : absolute;';
			hs+='top : -45px;';
			hs+='visibility : inherit;';
			hs+='width : 137px;';
			hs+='pointer-events:auto;';
			this._hotspottext.setAttribute('style',hs);
			this._hotspottext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 137px;';
			hs+='height: 34px;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.392157);';
			hs+='border: 1px solid #000000;';
			hs+='border: 1px solid rgba(0,0,0,0);';
			hs+=cssPrefix + 'background-clip: padding-box;';
			hs+='background-clip: padding-box;';
			hs+='border-radius: 3px;';
			hs+=cssPrefix + 'border-radius: 3px;';
			hs+='color: #000000;';
			hs+='text-align: left;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 5px 6px 5px 6px;';
			hs+='overflow: hidden;';
			this._hotspottext__text.setAttribute('style',hs);
			this._hotspottext.ggUpdateText=function() {
				var hs=me.ggUserdata.title;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._hotspottext.ggUpdateText();
			this._hotspottext.appendChild(this._hotspottext__text);
			me._hotspottext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspottext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspottext.ggCurrentLogicStateBackgroundColor = -1;
			this._hotspottext.ggUpdateConditionTimer=function () {
				var newLogicStateBackgroundColor;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateBackgroundColor = 0;
				}
				else {
					newLogicStateBackgroundColor = -1;
				}
				if (me._hotspottext.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
					me._hotspottext.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
					me._hotspottext__text.style[domTransition]='background-color none';
					if (me._hotspottext.ggCurrentLogicStateBackgroundColor == 0) {
						me._hotspottext__text.style.backgroundColor="rgba(255,255,255,1)";
					}
					else {
						me._hotspottext__text.style.backgroundColor="rgba(255,255,255,0.392157)";
					}
				}
			}
			this._hotspottext.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this.__div.appendChild(this._hotspottext);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspottext.ggUpdateText();
				me._hotspottext.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='HotSpotDoor') {
			this.__div=document.createElement('div');
			this.__div.ggId="HotSpotDoor";
			this.__div.ggLeft=-460;
			this.__div.ggTop=-480;
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : -460px;';
			hs+='position : absolute;';
			hs+='top : -480px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin._pause_button.onclick();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin._play_button.onclick();
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this._hotspotdooricon=document.createElement('div');
			this._hotspotdooricon__img=document.createElement('img');
			this._hotspotdooricon__img.className='ggskin ggskin_svg';
			this._hotspotdooricon__img.setAttribute('src',basePath + 'images/hotspotdooricon.svg');
			this._hotspotdooricon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hotspotdooricon__img['ondragstart']=function() { return false; };
			this._hotspotdooricon.appendChild(this._hotspotdooricon__img);
			this._hotspotdooricon__imgo=document.createElement('img');
			this._hotspotdooricon__imgo.className='ggskin ggskin_svg';
			this._hotspotdooricon__imgo.setAttribute('src',basePath + 'images/hotspotdooricon__o.svg');
			this._hotspotdooricon__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._hotspotdooricon__imgo['ondragstart']=function() { return false; };
			this._hotspotdooricon.appendChild(this._hotspotdooricon__imgo);
			this._hotspotdooricon.ggId="HotSpotDoorIcon";
			this._hotspotdooricon.ggLeft=-22;
			this._hotspotdooricon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspotdooricon.ggVisible=true;
			this._hotspotdooricon.className='ggskin ggskin_svg ';
			this._hotspotdooricon.ggType='svg';
			hs ='';
			hs+='height : 40px;';
			hs+='left : -22px;';
			hs+='position : absolute;';
			hs+='top : -48px;';
			hs+='visibility : inherit;';
			hs+='width : 40px;';
			hs+='pointer-events:auto;';
			this._hotspotdooricon.setAttribute('style',hs);
			this._hotspotdooricon.style[domTransform + 'Origin']='50% 50%';
			me._hotspotdooricon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspotdooricon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hotspotdooricon.onmouseover=function (e) {
				me._hotspotdooricon__img.style.visibility='hidden';
				me._hotspotdooricon__imgo.style.visibility='inherit';
			}
			this._hotspotdooricon.onmouseout=function (e) {
				me._hotspotdooricon__img.style.visibility='inherit';
				me._hotspotdooricon__imgo.style.visibility='hidden';
			}
			this._hotspotdooricon.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				}
			}
			this.__div.appendChild(this._hotspotdooricon);
			this._hotspotdoortext=document.createElement('div');
			this._hotspotdoortext__text=document.createElement('div');
			this._hotspotdoortext.className='ggskin ggskin_textdiv';
			this._hotspotdoortext.ggTextDiv=this._hotspotdoortext__text;
			this._hotspotdoortext.ggId="HotSpotDoorText";
			this._hotspotdoortext.ggTop=-50;
			this._hotspotdoortext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspotdoortext.ggVisible=true;
			this._hotspotdoortext.className='ggskin ggskin_text ';
			this._hotspotdoortext.ggType='text';
			hs ='';
			hs+='height : 34px;';
			hs+='left : 35px;';
			hs+='position : absolute;';
			hs+='top : -50px;';
			hs+='visibility : inherit;';
			hs+='width : 137px;';
			hs+='pointer-events:auto;';
			this._hotspotdoortext.setAttribute('style',hs);
			this._hotspotdoortext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 137px;';
			hs+='height: 34px;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.392157);';
			hs+='border: 1px solid #000000;';
			hs+='border: 1px solid rgba(0,0,0,0);';
			hs+=cssPrefix + 'background-clip: padding-box;';
			hs+='background-clip: padding-box;';
			hs+='border-radius: 3px;';
			hs+=cssPrefix + 'border-radius: 3px;';
			hs+='color: #000000;';
			hs+='text-align: left;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 5px 6px 5px 6px;';
			hs+='overflow: hidden;';
			this._hotspotdoortext__text.setAttribute('style',hs);
			this._hotspotdoortext.ggUpdateText=function() {
				var hs=me.ggUserdata.title;
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
					if (this.ggUpdatePosition) this.ggUpdatePosition();
				}
			}
			me._hotspotdoortext.ggUpdateText();
			this._hotspotdoortext.appendChild(this._hotspotdoortext__text);
			me._hotspotdoortext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspotdoortext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspotdoortext.ggCurrentLogicStateBackgroundColor = -1;
			this._hotspotdoortext.ggUpdateConditionTimer=function () {
				var newLogicStateBackgroundColor;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateBackgroundColor = 0;
				}
				else {
					newLogicStateBackgroundColor = -1;
				}
				if (me._hotspotdoortext.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
					me._hotspotdoortext.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
					me._hotspotdoortext__text.style[domTransition]='background-color none';
					if (me._hotspotdoortext.ggCurrentLogicStateBackgroundColor == 0) {
						me._hotspotdoortext__text.style.backgroundColor="rgba(255,255,255,1)";
					}
					else {
						me._hotspotdoortext__text.style.backgroundColor="rgba(255,255,255,0.392157)";
					}
				}
			}
			this._hotspotdoortext.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h) + 'px';
				}
			}
			this.__div.appendChild(this._hotspotdoortext);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspotdoortext.ggUpdateText();
				me._hotspotdoortext.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="HotSpotInfo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 500px;';
			hs+='position : absolute;';
			hs+='top : 400px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_title.ggUpdatePosition) {
					me.skin._info_title.ggUpdatePosition();
				}
				me.skin._info_title.ggTextDiv.scrollTop = 0;
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body.ggTextDiv.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_text_body.ggUpdatePosition) {
					me.skin._info_text_body.ggUpdatePosition();
				}
				me.skin._info_text_body.ggTextDiv.scrollTop = 0;
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity)?'inherit':'hidden';
				me.skin._information.ggVisible=true;
				me.skin._screentint_info.style[domTransition]='none';
				me.skin._screentint_info.style.visibility=(Number(me.skin._screentint_info.style.opacity)>0||!me.skin._screentint_info.style.opacity)?'inherit':'hidden';
				me.skin._screentint_info.ggVisible=true;
				me.skin._info_popup_close.style[domTransition]='none';
				me.skin._info_popup_close.style.visibility=(Number(me.skin._info_popup_close.style.opacity)>0||!me.skin._info_popup_close.style.opacity)?'inherit':'hidden';
				me.skin._info_popup_close.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin._pause_button.onclick();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin._play_button.onclick();
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image__imgo=document.createElement('img');
			this._ht_info_image__imgo.className='ggskin ggskin_svg';
			this._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
			this._ht_info_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_info_image__imgo['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__imgo);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 40px;';
			hs+='left : -20px;';
			hs+='position : absolute;';
			hs+='top : -37px;';
			hs+='visibility : inherit;';
			hs+='width : 40px;';
			hs+='pointer-events:auto;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.onmouseover=function (e) {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
			}
			this._ht_info_image.onmouseout=function (e) {
				me._ht_info_image__img.style.visibility='inherit';
				me._ht_info_image__imgo.style.visibility='hidden';
			}
			this._ht_info_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=true;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 34px;';
			hs+='left : 36px;';
			hs+='position : absolute;';
			hs+='top : -35px;';
			hs+='visibility : inherit;';
			hs+='width : 137px;';
			hs+='pointer-events:auto;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 137px;';
			hs+='height: 34px;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.392157);';
			hs+='border: 1px solid #ffffff;';
			hs+='border: 1px solid rgba(255,255,255,0);';
			hs+=cssPrefix + 'background-clip: padding-box;';
			hs+='background-clip: padding-box;';
			hs+='border-radius: 3px;';
			hs+=cssPrefix + 'border-radius: 3px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: left;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 5px 6px 5px 6px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateBackgroundColor = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateBackgroundColor;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateBackgroundColor = 0;
				}
				else {
					newLogicStateBackgroundColor = -1;
				}
				if (me._tt_information.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
					me._tt_information.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
					me._tt_information__text.style[domTransition]='background-color none';
					if (me._tt_information.ggCurrentLogicStateBackgroundColor == 0) {
						me._tt_information__text.style.backgroundColor="rgba(255,255,255,1)";
					}
					else {
						me._tt_information__text.style.backgroundColor="rgba(255,255,255,0.392157)";
					}
				}
			}
			this._tt_information.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_hotspotmaptext_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._hotspotmaptext=document.createElement('div');
		this._hotspotmaptext__text=document.createElement('div');
		this._hotspotmaptext.className='ggskin ggskin_textdiv';
		this._hotspotmaptext.ggTextDiv=this._hotspotmaptext__text;
		this._hotspotmaptext.ggId="HotSpotMapText";
		this._hotspotmaptext.ggLeft=-483;
		this._hotspotmaptext.ggTop=-267;
		this._hotspotmaptext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspotmaptext.ggVisible=true;
		this._hotspotmaptext.className='ggskin ggskin_text ';
		this._hotspotmaptext.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -483px;';
		hs+='position : absolute;';
		hs+='top : -267px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		this._hotspotmaptext.setAttribute('style',hs);
		this._hotspotmaptext.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.392157);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._hotspotmaptext__text.setAttribute('style',hs);
		this._hotspotmaptext__text.innerHTML="You are here!";
		this._hotspotmaptext.appendChild(this._hotspotmaptext__text);
		me._hotspotmaptext.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hotspotmaptext.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._hotspotmaptext.ggCurrentLogicStateBackgroundColor = -1;
		this._hotspotmaptext.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['rootElement'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._hotspotmaptext.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._hotspotmaptext.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._hotspotmaptext__text.style[domTransition]='background-color none';
				if (me._hotspotmaptext.ggCurrentLogicStateBackgroundColor == 0) {
					me._hotspotmaptext__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._hotspotmaptext__text.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		this._hotspotmaptext.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((96-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._hotspotmaptext.ggUpdateConditionTimer=function() {
			me._hotspotmaptext.ggUpdateConditionTimer();
		}
		this._hotspotmaptext.ggNodeChangeMain=function() {
		}
		return this._hotspotmaptext;
	};
	function SkinElement_hotspotmapicon_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._hotspotmapicon=document.createElement('div');
		this._hotspotmapicon__img=document.createElement('img');
		this._hotspotmapicon__img.className='ggskin ggskin_svg';
		this._hotspotmapicon__img.setAttribute('src',basePath + 'images/hotspotmapicon.svg');
		this._hotspotmapicon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._hotspotmapicon__img['ondragstart']=function() { return false; };
		this._hotspotmapicon.appendChild(this._hotspotmapicon__img);
		this._hotspotmapicon__imgo=document.createElement('img');
		this._hotspotmapicon__imgo.className='ggskin ggskin_svg';
		this._hotspotmapicon__imgo.setAttribute('src',basePath + 'images/hotspotmapicon__o.svg');
		this._hotspotmapicon__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._hotspotmapicon__imgo['ondragstart']=function() { return false; };
		this._hotspotmapicon.appendChild(this._hotspotmapicon__imgo);
		this._hotspotmapicon.ggId="HotSpotMapIcon";
		this._hotspotmapicon.ggLeft=-453;
		this._hotspotmapicon.ggTop=-237;
		this._hotspotmapicon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspotmapicon.ggVisible=true;
		this._hotspotmapicon.className='ggskin ggskin_svg ';
		this._hotspotmapicon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -453px;';
		hs+='position : absolute;';
		hs+='top : -237px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._hotspotmapicon.setAttribute('style',hs);
		this._hotspotmapicon.style[domTransform + 'Origin']='50% 50%';
		me._hotspotmapicon.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._hotspotmapicon.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._hotspotmapicon.onmouseover=function (e) {
			me._hotspotmapicon__img.style.visibility='hidden';
			me._hotspotmapicon__imgo.style.visibility='inherit';
		}
		this._hotspotmapicon.onmouseout=function (e) {
			me._hotspotmapicon__img.style.visibility='inherit';
			me._hotspotmapicon__imgo.style.visibility='hidden';
		}
		this._hotspotmapicon.ggUpdatePosition=function (useTransition) {
		}
		this._hotspotmapicon.ggNodeChangeMain=function() {
		}
		return this._hotspotmapicon;
	};
	function SkinCloner_vacant_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 240px; height: 40px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._vacant_dropdown_menu_text=document.createElement('div');
		this._vacant_dropdown_menu_text__text=document.createElement('div');
		this._vacant_dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._vacant_dropdown_menu_text.ggTextDiv=this._vacant_dropdown_menu_text__text;
		this._vacant_dropdown_menu_text.ggId="Vacant Dropdown Menu Text";
		this._vacant_dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_dropdown_menu_text.ggVisible=true;
		this._vacant_dropdown_menu_text.className='ggskin ggskin_text ';
		this._vacant_dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._vacant_dropdown_menu_text.setAttribute('style',hs);
		this._vacant_dropdown_menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='background: #508264;';
		hs+='background: rgba(80,130,100,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 31px 10px 31px;';
		hs+='overflow: hidden;';
		this._vacant_dropdown_menu_text__text.setAttribute('style',hs);
		this._vacant_dropdown_menu_text__text.innerHTML="<span style=\"font-size: 12px;\">"+me.ggUserdata.title+"<\/span>";
		this._vacant_dropdown_menu_text.appendChild(this._vacant_dropdown_menu_text__text);
		me._vacant_dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._vacant_dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._vacant_dropdown_menu_text.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._vacant_dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['vacant_dropdown_menu_text']=true;
		}
		this._vacant_dropdown_menu_text.onmouseout=function (e) {
			me.elementMouseOver['vacant_dropdown_menu_text']=false;
		}
		this._vacant_dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['vacant_dropdown_menu_text']=false;
		}
		me._vacant_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		this._vacant_dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['vacant_dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._vacant_dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._vacant_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._vacant_dropdown_menu_text__text.style[domTransition]='background-color none';
				if (me._vacant_dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._vacant_dropdown_menu_text__text.style.backgroundColor="rgba(80,130,100,1)";
				}
				else {
					me._vacant_dropdown_menu_text__text.style.backgroundColor="rgba(80,130,100,0)";
				}
			}
		}
		this._vacant_dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._vacant_dropdown_menu_text);
	};
	function SkinCloner_occupied_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 240px; height: 40px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._occupied_dropdown_menu_text=document.createElement('div');
		this._occupied_dropdown_menu_text__text=document.createElement('div');
		this._occupied_dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._occupied_dropdown_menu_text.ggTextDiv=this._occupied_dropdown_menu_text__text;
		this._occupied_dropdown_menu_text.ggId="Occupied Dropdown Menu Text";
		this._occupied_dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_dropdown_menu_text.ggVisible=true;
		this._occupied_dropdown_menu_text.className='ggskin ggskin_text ';
		this._occupied_dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._occupied_dropdown_menu_text.setAttribute('style',hs);
		this._occupied_dropdown_menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='background: #50a078;';
		hs+='background: rgba(80,160,120,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 31px 10px 31px;';
		hs+='overflow: hidden;';
		this._occupied_dropdown_menu_text__text.setAttribute('style',hs);
		this._occupied_dropdown_menu_text__text.innerHTML="<span style=\"font-size: 12px;\">"+me.ggUserdata.title+"<\/span>";
		this._occupied_dropdown_menu_text.appendChild(this._occupied_dropdown_menu_text__text);
		me._occupied_dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._occupied_dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._occupied_dropdown_menu_text.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._occupied_dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['occupied_dropdown_menu_text']=true;
		}
		this._occupied_dropdown_menu_text.onmouseout=function (e) {
			me.elementMouseOver['occupied_dropdown_menu_text']=false;
		}
		this._occupied_dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['occupied_dropdown_menu_text']=false;
		}
		me._occupied_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		this._occupied_dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['occupied_dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._occupied_dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._occupied_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._occupied_dropdown_menu_text__text.style[domTransition]='background-color none';
				if (me._occupied_dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._occupied_dropdown_menu_text__text.style.backgroundColor="rgba(80,130,100,1)";
				}
				else {
					me._occupied_dropdown_menu_text__text.style.backgroundColor="rgba(80,160,120,0)";
				}
			}
		}
		this._occupied_dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._occupied_dropdown_menu_text);
	};
	function SkinCloner_main_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 240px; height: 40px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._main_dropdown_menu_text=document.createElement('div');
		this._main_dropdown_menu_text__text=document.createElement('div');
		this._main_dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._main_dropdown_menu_text.ggTextDiv=this._main_dropdown_menu_text__text;
		this._main_dropdown_menu_text.ggId="Main Dropdown Menu Text";
		this._main_dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_dropdown_menu_text.ggVisible=true;
		this._main_dropdown_menu_text.className='ggskin ggskin_text ';
		this._main_dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._main_dropdown_menu_text.setAttribute('style',hs);
		this._main_dropdown_menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 31px 10px 31px;';
		hs+='overflow: hidden;';
		this._main_dropdown_menu_text__text.setAttribute('style',hs);
		this._main_dropdown_menu_text__text.innerHTML="<span style=\"font-size: 12px;\">"+me.ggUserdata.title+"<\/span>";
		this._main_dropdown_menu_text.appendChild(this._main_dropdown_menu_text__text);
		me._main_dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._main_dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._main_dropdown_menu_text.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._main_dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['main_dropdown_menu_text']=true;
		}
		this._main_dropdown_menu_text.onmouseout=function (e) {
			me.elementMouseOver['main_dropdown_menu_text']=false;
		}
		this._main_dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['main_dropdown_menu_text']=false;
		}
		me._main_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		this._main_dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['main_dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._main_dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._main_dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._main_dropdown_menu_text__text.style[domTransition]='background-color none';
				if (me._main_dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._main_dropdown_menu_text__text.style.backgroundColor="rgba(80,130,100,1)";
				}
				else {
					me._main_dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0)";
				}
			}
		}
		this._main_dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._main_dropdown_menu_text);
	};
	this.addSkin();
};