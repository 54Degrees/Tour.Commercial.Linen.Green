// Garden Gnome Software - Skin
// Pano2VR 5.1/15722
// Filename: DynamicSkin2.2.ggsk
// Generated Sun Jun 11 00:31:50 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['FrameTimer'] = 0;
	ggSkinVars['OccelateTimer'] = false;
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
		hs+='width : 490px;';
		hs+='pointer-events:none;';
		this._list.setAttribute('style',hs);
		this._list.style[domTransform + 'Origin']='0% 0%';
		me._list.ggIsActive=function() {
			return false;
		}
		me._list.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._list.ggUpdatePosition=function (useTransition) {
		}
		this.__0closeall=document.createElement('div');
		this.__0closeall.ggId="0CLOSEALL";
		this.__0closeall.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0closeall.ggVisible=false;
		this.__0closeall.className='ggskin ggskin_rectangle ';
		this.__0closeall.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #0064aa;';
		hs+='cursor : default;';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 2120px;';
		hs+='pointer-events:auto;';
		this.__0closeall.setAttribute('style',hs);
		this.__0closeall.style[domTransform + 'Origin']='50% 50%';
		me.__0closeall.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__0closeall.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__0closeall.onclick=function (e) {
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
			me._map_dropdown_background.style[domTransition]='none';
			me._map_dropdown_background.style.visibility='hidden';
			me._map_dropdown_background.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._map_location_icon.style[domTransition]='none';
			} else {
				me._map_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_location_icon.ggParameter.a="0.0000";
			me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._map_title_container.style[domTransition]='none';
			} else {
				me._map_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_title_container.ggParameter.rx=0;me._map_title_container.ggParameter.ry=0;
			me._map_title_container.style[domTransform]=parameterToTransform(me._map_title_container.ggParameter);
			me._map_00_image.style[domTransition]='none';
			me._map_00_image.style.visibility='hidden';
			me._map_00_image.ggVisible=false;
			me._map_01_image.style[domTransition]='none';
			me._map_01_image.style.visibility='hidden';
			me._map_01_image.ggVisible=false;
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility='hidden';
			me.__0closeall.ggVisible=false;
		}
		this.__0closeall.ggUpdatePosition=function (useTransition) {
		}
		this._list.appendChild(this.__0closeall);
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
		hs+='background : rgba(0,100,170,0.784314);';
		hs+='border : 0px solid #0064aa;';
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
		hs+='background : #0064aa;';
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
			me.player.startAutorotate("-0.1","4");
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
				me._play_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
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
		hs+='background : #0064aa;';
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
				me._pause_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
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
		this._pano_title=document.createElement('div');
		this._pano_title__text=document.createElement('div');
		this._pano_title.className='ggskin ggskin_textdiv';
		this._pano_title.ggTextDiv=this._pano_title__text;
		this._pano_title.ggId="Pano Title";
		this._pano_title.ggLeft=-1860;
		this._pano_title.ggTop=-10;
		this._pano_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pano_title.ggVisible=true;
		this._pano_title.className='ggskin ggskin_text ';
		this._pano_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1860px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 316px;';
		hs+='pointer-events:auto;';
		this._pano_title.setAttribute('style',hs);
		this._pano_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 316px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._pano_title__text.setAttribute('style',hs);
		this._pano_title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pano_title.ggUpdateText();
		this._pano_title.appendChild(this._pano_title__text);
		me._pano_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._pano_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._pano_title.ggUpdatePosition=function (useTransition) {
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
		this._topbanner.appendChild(this._pano_title);
		this._tour_menu.appendChild(this._topbanner);
		this._tour_menu_background=document.createElement('div');
		this._tour_menu_background.ggId="Tour Menu Background";
		this._tour_menu_background.ggLeft=-250;
		this._tour_menu_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tour_menu_background.ggVisible=true;
		this._tour_menu_background.className='ggskin ggskin_rectangle ';
		this._tour_menu_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,100,170,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 190px;';
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
		this._sc_logo.style[domTransform + 'Origin']='50% 0%';
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
		me._sc_logo.ggCurrentLogicStateScaling = -1;
		this._sc_logo.ggUpdateConditionResize=function () {
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
			if (me._sc_logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._sc_logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._sc_logo.style[domTransition]='' + cssPrefix + 'transform none';
				if (me._sc_logo.ggCurrentLogicStateScaling == 0) {
					me._sc_logo.ggParameter.sx = 0.6;
					me._sc_logo.ggParameter.sy = 0.6;
					me._sc_logo.style[domTransform]=parameterToTransform(me._sc_logo.ggParameter);
				}
				else {
					me._sc_logo.ggParameter.sx = 1;
					me._sc_logo.ggParameter.sy = 1;
					me._sc_logo.style[domTransform]=parameterToTransform(me._sc_logo.ggParameter);
				}
			}
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
			me._sc_logo.ggUpdateConditionResize();
		}
		this._tour_menu_background.appendChild(this._sc_logo);
		this._tour_menu.appendChild(this._tour_menu_background);
		this._tour_menu_title_background=document.createElement('div');
		this._tour_menu_title_background.ggId="Tour Menu Title Background";
		this._tour_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tour_menu_title_background.ggVisible=true;
		this._tour_menu_title_background.className='ggskin ggskin_rectangle ';
		this._tour_menu_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
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
			var flag=me._list.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._list.style[domTransition]='none';
			} else {
				me._list.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._list.ggParameter.rx=0;me._list.ggParameter.ry=0;
				me._list.style[domTransform]=parameterToTransform(me._list.ggParameter);
			} else {
				me._list.ggParameter.rx=-200;me._list.ggParameter.ry=0;
				me._list.style[domTransform]=parameterToTransform(me._list.ggParameter);
			}
			me._list.ggPositonActive=!flag;
			var flag=me._instructions.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._instructions.style[domTransition]='none';
			} else {
				me._instructions.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._instructions.ggParameter.rx=0;me._instructions.ggParameter.ry=0;
				me._instructions.style[domTransform]=parameterToTransform(me._instructions.ggParameter);
			} else {
				me._instructions.ggParameter.rx=-200;me._instructions.ggParameter.ry=0;
				me._instructions.style[domTransform]=parameterToTransform(me._instructions.ggParameter);
			}
			me._instructions.ggPositonActive=!flag;
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
			var flag=me._map_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._map_location_icon.style[domTransition]='none';
			} else {
				me._map_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._map_location_icon.ggParameter.rx=0;me._map_location_icon.ggParameter.ry=0;
				me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
			} else {
				me._map_location_icon.ggParameter.rx=200;me._map_location_icon.ggParameter.ry=0;
				me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
			}
			me._map_location_icon.ggPositonActive=!flag;
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
			var flag=me._contact_mail_location_icon.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._contact_mail_location_icon.style[domTransition]='none';
			} else {
				me._contact_mail_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._contact_mail_location_icon.ggParameter.rx=0;me._contact_mail_location_icon.ggParameter.ry=0;
				me._contact_mail_location_icon.style[domTransform]=parameterToTransform(me._contact_mail_location_icon.ggParameter);
			} else {
				me._contact_mail_location_icon.ggParameter.rx=180;me._contact_mail_location_icon.ggParameter.ry=0;
				me._contact_mail_location_icon.style[domTransform]=parameterToTransform(me._contact_mail_location_icon.ggParameter);
			}
			me._contact_mail_location_icon.ggPositonActive=!flag;
			me._contact_google_location_icon.ggVisible = !me._contact_google_location_icon.ggVisible;
			var flag=me._contact_google_location_icon.ggVisible;
			me._contact_google_location_icon.style[domTransition]='none';
			me._contact_google_location_icon.style.visibility=((flag)&&(Number(me._contact_google_location_icon.style.opacity)>0||!me._contact_google_location_icon.style.opacity))?'inherit':'hidden';
			me._contact_email_menu_title_text.ggVisible = !me._contact_email_menu_title_text.ggVisible;
			var flag=me._contact_email_menu_title_text.ggVisible;
			me._contact_email_menu_title_text.style[domTransition]='none';
			me._contact_email_menu_title_text.style.visibility=((flag)&&(Number(me._contact_email_menu_title_text.style.opacity)>0||!me._contact_email_menu_title_text.style.opacity))?'inherit':'hidden';
			var flag=me._statanimation.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._statanimation.style[domTransition]='none';
			} else {
				me._statanimation.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._statanimation.ggParameter.rx=0;me._statanimation.ggParameter.ry=0;
				me._statanimation.style[domTransform]=parameterToTransform(me._statanimation.ggParameter);
			} else {
				me._statanimation.ggParameter.rx=200;me._statanimation.ggParameter.ry=0;
				me._statanimation.style[domTransform]=parameterToTransform(me._statanimation.ggParameter);
			}
			me._statanimation.ggPositonActive=!flag;
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
		this._tour_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_title__text.setAttribute('style',hs);
		this._dropdown_menu_title__text.innerHTML="<b>Linen Green<\/b>";
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
		this._menu_open_icon.ggLeft=-38;
		this._menu_open_icon.ggTop=-13;
		this._menu_open_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_open_icon.ggVisible=false;
		this._menu_open_icon.className='ggskin ggskin_svg ';
		this._menu_open_icon.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -38px;';
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
		me._menu_open_icon.ggCurrentLogicStateScaling = -1;
		this._menu_open_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['tour_menu_title_background'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu_open_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_open_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_open_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._menu_open_icon.ggCurrentLogicStateScaling == 0) {
					me._menu_open_icon.ggParameter.sx = 0.9;
					me._menu_open_icon.ggParameter.sy = 0.9;
					me._menu_open_icon.style[domTransform]=parameterToTransform(me._menu_open_icon.ggParameter);
				}
				else {
					me._menu_open_icon.ggParameter.sx = 1;
					me._menu_open_icon.ggParameter.sy = 1;
					me._menu_open_icon.style[domTransform]=parameterToTransform(me._menu_open_icon.ggParameter);
				}
			}
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
		this._menu_close_icon.ggLeft=-40;
		this._menu_close_icon.ggTop=-15;
		this._menu_close_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_close_icon.ggVisible=true;
		this._menu_close_icon.className='ggskin ggskin_svg ';
		this._menu_close_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
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
		me._menu_close_icon.ggCurrentLogicStateScaling = -1;
		this._menu_close_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['tour_menu_title_background'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu_close_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_close_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_close_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._menu_close_icon.ggCurrentLogicStateScaling == 0) {
					me._menu_close_icon.ggParameter.sx = 0.9;
					me._menu_close_icon.ggParameter.sy = 0.9;
					me._menu_close_icon.style[domTransform]=parameterToTransform(me._menu_close_icon.ggParameter);
				}
				else {
					me._menu_close_icon.ggParameter.sx = 1;
					me._menu_close_icon.ggParameter.sy = 1;
					me._menu_close_icon.style[domTransform]=parameterToTransform(me._menu_close_icon.ggParameter);
				}
			}
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
		hs+='top : 540px;';
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
		me._contact_menu.ggCurrentLogicStatePosition = -1;
		this._contact_menu.ggUpdateConditionResize=function () {
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
			if (me._contact_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._contact_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._contact_menu.style[domTransition]='left none, top none';
				if (me._contact_menu.ggCurrentLogicStatePosition == 0) {
					me._contact_menu.style.left='0px';
					me._contact_menu.style.top='450px';
				}
				else {
					me._contact_menu.style.left='0px';
					me._contact_menu.style.top='540px';
				}
			}
		}
		this._contact_menu.ggUpdatePosition=function (useTransition) {
			me._contact_menu.ggUpdateConditionResize();
		}
		this._contact_title_background=document.createElement('div');
		this._contact_title_background.ggId="Contact Title Background";
		this._contact_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_title_background.ggVisible=true;
		this._contact_title_background.className='ggskin ggskin_rectangle ';
		this._contact_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 150px;';
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
			me.__0closeall.onclick();
		}
		this._contact_title_background.ggUpdatePosition=function (useTransition) {
		}
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
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
		hs+='pointer-events:auto;';
		this._about_54_degrees_design.setAttribute('style',hs);
		this._about_54_degrees_design.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0064aa;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._about_54_degrees_design__text.setAttribute('style',hs);
		this._about_54_degrees_design__text.innerHTML="<span style=\"font-size: 6px;\">Created By 54 Degrees Design<\/span>";
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
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((248-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._contact_title_background.appendChild(this._about_54_degrees_design);
		this._contact_google_location_icon=document.createElement('div');
		this._contact_google_location_icon__img=document.createElement('img');
		this._contact_google_location_icon__img.className='ggskin ggskin_svg';
		this._contact_google_location_icon__img.setAttribute('src',basePath + 'images/contact_google_location_icon.svg');
		this._contact_google_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_google_location_icon__img['ondragstart']=function() { return false; };
		this._contact_google_location_icon.appendChild(this._contact_google_location_icon__img);
		this._contact_google_location_icon.ggId="Contact Google Location Icon";
		this._contact_google_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_google_location_icon.ggVisible=true;
		this._contact_google_location_icon.className='ggskin ggskin_svg ';
		this._contact_google_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._contact_google_location_icon.setAttribute('style',hs);
		this._contact_google_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_google_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_google_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_google_location_icon.onclick=function (e) {
			me.player.openUrl("https:\/\/plus.google.com\/112639299291925078517","_blank");
		}
		this._contact_google_location_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._contact_google_location_icon);
		this._contact_linkedin_location_icon=document.createElement('div');
		this._contact_linkedin_location_icon__img=document.createElement('img');
		this._contact_linkedin_location_icon__img.className='ggskin ggskin_svg';
		this._contact_linkedin_location_icon__img.setAttribute('src',basePath + 'images/contact_linkedin_location_icon.svg');
		this._contact_linkedin_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_linkedin_location_icon__img['ondragstart']=function() { return false; };
		this._contact_linkedin_location_icon.appendChild(this._contact_linkedin_location_icon__img);
		this._contact_linkedin_location_icon.ggId="Contact LinkedIn Location Icon";
		this._contact_linkedin_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_linkedin_location_icon.ggVisible=true;
		this._contact_linkedin_location_icon.className='ggskin ggskin_svg ';
		this._contact_linkedin_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 150px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._contact_linkedin_location_icon.setAttribute('style',hs);
		this._contact_linkedin_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_linkedin_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_linkedin_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_linkedin_location_icon.onclick=function (e) {
			me.player.openUrl("https:\/\/uk.linkedin.com\/in\/pat-walsh-3b805847","_blank");
		}
		this._contact_linkedin_location_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._contact_linkedin_location_icon);
		this._contact_facebook_location_icon=document.createElement('div');
		this._contact_facebook_location_icon__img=document.createElement('img');
		this._contact_facebook_location_icon__img.className='ggskin ggskin_svg';
		this._contact_facebook_location_icon__img.setAttribute('src',basePath + 'images/contact_facebook_location_icon.svg');
		this._contact_facebook_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_facebook_location_icon__img['ondragstart']=function() { return false; };
		this._contact_facebook_location_icon.appendChild(this._contact_facebook_location_icon__img);
		this._contact_facebook_location_icon.ggId="Contact Facebook Location Icon";
		this._contact_facebook_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_facebook_location_icon.ggVisible=true;
		this._contact_facebook_location_icon.className='ggskin ggskin_svg ';
		this._contact_facebook_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._contact_facebook_location_icon.setAttribute('style',hs);
		this._contact_facebook_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_facebook_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_facebook_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_facebook_location_icon.onclick=function (e) {
			me.player.openUrl("https:\/\/www.facebook.com\/54DegreesDesign\/","_blank");
		}
		this._contact_facebook_location_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._contact_facebook_location_icon);
		this._contact_phone_location_icon=document.createElement('div');
		this._contact_phone_location_icon__img=document.createElement('img');
		this._contact_phone_location_icon__img.className='ggskin ggskin_svg';
		this._contact_phone_location_icon__img.setAttribute('src',basePath + 'images/contact_phone_location_icon.svg');
		this._contact_phone_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_phone_location_icon__img['ondragstart']=function() { return false; };
		this._contact_phone_location_icon.appendChild(this._contact_phone_location_icon__img);
		this._contact_phone_location_icon.ggId="Contact Phone Location Icon";
		this._contact_phone_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_phone_location_icon.ggVisible=true;
		this._contact_phone_location_icon.className='ggskin ggskin_svg ';
		this._contact_phone_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
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
		this._contact_phone_location_icon.onclick=function (e) {
			me.player.openUrl("tel:+447484786050","_blank");
		}
		this._contact_phone_location_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._contact_phone_location_icon);
		this._contact_mail_location_icon=document.createElement('div');
		this._contact_mail_location_icon__img=document.createElement('img');
		this._contact_mail_location_icon__img.className='ggskin ggskin_svg';
		this._contact_mail_location_icon__img.setAttribute('src',basePath + 'images/contact_mail_location_icon.svg');
		this._contact_mail_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._contact_mail_location_icon__img['ondragstart']=function() { return false; };
		this._contact_mail_location_icon.appendChild(this._contact_mail_location_icon__img);
		this._contact_mail_location_icon.ggId="Contact Mail Location Icon";
		this._contact_mail_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_mail_location_icon.ggVisible=true;
		this._contact_mail_location_icon.className='ggskin ggskin_svg ';
		this._contact_mail_location_icon.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		this._contact_mail_location_icon.setAttribute('style',hs);
		this._contact_mail_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._contact_mail_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contact_mail_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contact_mail_location_icon.onclick=function (e) {
			me.player.openUrl("mailto:pat.walsh@54degreesdesign.com","_blank");
		}
		this._contact_mail_location_icon.ggUpdatePosition=function (useTransition) {
		}
		this._contact_title_background.appendChild(this._contact_mail_location_icon);
		this._contact_email_menu_title_text=document.createElement('div');
		this._contact_email_menu_title_text__text=document.createElement('div');
		this._contact_email_menu_title_text.className='ggskin ggskin_textdiv';
		this._contact_email_menu_title_text.ggTextDiv=this._contact_email_menu_title_text__text;
		this._contact_email_menu_title_text.ggId="Contact email Menu Title Text";
		this._contact_email_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_email_menu_title_text.ggVisible=true;
		this._contact_email_menu_title_text.className='ggskin ggskin_text ';
		this._contact_email_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		this._contact_email_menu_title_text.setAttribute('style',hs);
		this._contact_email_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 21px 22px 21px 22px;';
		hs+='overflow: hidden;';
		this._contact_email_menu_title_text__text.setAttribute('style',hs);
		this._contact_email_menu_title_text__text.innerHTML="<span style=\"font-size: 11px;\">pat.walsh@54degreesdesign.com<\/span>";
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
		this._contact_email_menu_title_text.onclick=function (e) {
			me.player.openUrl("mailto:pat.walsh@54degreesdesign.com","_blank");
		}
		this._contact_email_menu_title_text.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((248-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._contact_title_background.appendChild(this._contact_email_menu_title_text);
		this._contact_name_menu_title_text=document.createElement('div');
		this._contact_name_menu_title_text__text=document.createElement('div');
		this._contact_name_menu_title_text.className='ggskin ggskin_textdiv';
		this._contact_name_menu_title_text.ggTextDiv=this._contact_name_menu_title_text__text;
		this._contact_name_menu_title_text.ggId="Contact Name Menu Title Text";
		this._contact_name_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contact_name_menu_title_text.ggVisible=true;
		this._contact_name_menu_title_text.className='ggskin ggskin_text ';
		this._contact_name_menu_title_text.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		this._contact_name_menu_title_text.setAttribute('style',hs);
		this._contact_name_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 21px 22px 21px 22px;';
		hs+='overflow: hidden;';
		this._contact_name_menu_title_text__text.setAttribute('style',hs);
		this._contact_name_menu_title_text__text.innerHTML="<span style=\"font-size: 14px;\"><b>Pat Walsh<\/b><\/span>";
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
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((248-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._contact_title_background.appendChild(this._contact_name_menu_title_text);
		this._contact_menu.appendChild(this._contact_title_background);
		this._contactimmersivelogobackground=document.createElement('div');
		this._contactimmersivelogobackground.ggId="ContactImmersiveLogoBackground";
		this._contactimmersivelogobackground.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._contactimmersivelogobackground.ggVisible=true;
		this._contactimmersivelogobackground.className='ggskin ggskin_rectangle ';
		this._contactimmersivelogobackground.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #0064aa;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._contactimmersivelogobackground.setAttribute('style',hs);
		this._contactimmersivelogobackground.style[domTransform + 'Origin']='50% 50%';
		me._contactimmersivelogobackground.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._contactimmersivelogobackground.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._contactimmersivelogobackground.ggUpdatePosition=function (useTransition) {
		}
		this._immersive360logo=document.createElement('div');
		this._immersive360logo__img=document.createElement('img');
		this._immersive360logo__img.className='ggskin ggskin_image';
		this._immersive360logo__img.setAttribute('src',basePath + 'images/immersive360logo.png');
		this._immersive360logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._immersive360logo__img.className='ggskin ggskin_image';
		this._immersive360logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._immersive360logo__img);
		this._immersive360logo.appendChild(this._immersive360logo__img);
		this._immersive360logo.ggId="Immersive360Logo";
		this._immersive360logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._immersive360logo.ggVisible=true;
		this._immersive360logo.className='ggskin ggskin_image ';
		this._immersive360logo.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		this._immersive360logo.setAttribute('style',hs);
		this._immersive360logo.style[domTransform + 'Origin']='50% 50%';
		me._immersive360logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._immersive360logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._immersive360logo.onclick=function (e) {
			me.player.openUrl("360.54degreesdesign.com","");
		}
		this._immersive360logo.ggUpdatePosition=function (useTransition) {
		}
		this._contactimmersivelogobackground.appendChild(this._immersive360logo);
		this._contact_menu.appendChild(this._contactimmersivelogobackground);
		this._list.appendChild(this._contact_menu);
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
		hs+='top : 390px;';
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
		me._stats_menu.ggCurrentLogicStatePosition = -1;
		this._stats_menu.ggUpdateConditionResize=function () {
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
			if (me._stats_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._stats_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._stats_menu.style[domTransition]='left none, top none';
				if (me._stats_menu.ggCurrentLogicStatePosition == 0) {
					me._stats_menu.style.left='0px';
					me._stats_menu.style.top='300px';
				}
				else {
					me._stats_menu.style.left='0px';
					me._stats_menu.style.top='390px';
				}
			}
		}
		this._stats_menu.ggUpdatePosition=function (useTransition) {
			me._stats_menu.ggUpdateConditionResize();
		}
		this._stats_title_background=document.createElement('div');
		this._stats_title_background.ggId="Stats Title Background";
		this._stats_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_title_background.ggVisible=true;
		this._stats_title_background.className='ggskin ggskin_rectangle ';
		this._stats_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
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
			me.__0closeall.onclick();
			me.player.openUrl("https:\/\/app.powerbi.com\/view?r=eyJrIjoiN2NjZjUzMjYtNmQ4OC00Y2NkLTkzMDUtNDY4M2ZlZmZkYzczIiwidCI6ImJiODI0YWU3LWViMjEtNDkyYy05OWVjLTg3NmI3OWU1YzJhZSIsImMiOjh9","_blank");
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
		this._stats_title_container.onmouseover=function (e) {
			me.elementMouseOver['stats_title_container']=true;
		}
		this._stats_title_container.onmouseout=function (e) {
			me.elementMouseOver['stats_title_container']=false;
		}
		this._stats_title_container.ontouchend=function (e) {
			me.elementMouseOver['stats_title_container']=false;
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
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,100,170,1);';
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
		this._stats_location_icon.ggTop=-12;
		this._stats_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stats_location_icon.ggVisible=true;
		this._stats_location_icon.className='ggskin ggskin_svg ';
		this._stats_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -12px;';
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
		me._stats_location_icon.ggCurrentLogicStateScaling = -1;
		this._stats_location_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['stats_title_container'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._stats_location_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._stats_location_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._stats_location_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._stats_location_icon.ggCurrentLogicStateScaling == 0) {
					me._stats_location_icon.ggParameter.sx = 1.2;
					me._stats_location_icon.ggParameter.sy = 1.2;
					me._stats_location_icon.style[domTransform]=parameterToTransform(me._stats_location_icon.ggParameter);
				}
				else {
					me._stats_location_icon.ggParameter.sx = 1;
					me._stats_location_icon.ggParameter.sy = 1;
					me._stats_location_icon.style[domTransform]=parameterToTransform(me._stats_location_icon.ggParameter);
				}
			}
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
		this._map_menu=document.createElement('div');
		this._map_menu.ggId="Map Menu";
		this._map_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu.ggVisible=true;
		this._map_menu.className='ggskin ggskin_container ';
		this._map_menu.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 340px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._map_menu.setAttribute('style',hs);
		this._map_menu.style[domTransform + 'Origin']='50% 50%';
		me._map_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_menu.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._map_menu.ggCurrentLogicStateVisible = -1;
		this._map_menu.ggUpdateConditionResize=function () {
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
			if (me._map_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_menu.style[domTransition]='';
				if (me._map_menu.ggCurrentLogicStateVisible == 0) {
					me._map_menu.style.visibility="hidden";
					me._map_menu.ggVisible=false;
				}
				else {
					me._map_menu.style.visibility=(Number(me._map_menu.style.opacity)>0||!me._map_menu.style.opacity)?'inherit':'hidden';
					me._map_menu.ggVisible=true;
				}
			}
		}
		this._map_menu.ggUpdatePosition=function (useTransition) {
			me._map_menu.ggUpdateConditionResize();
		}
		this._map_dropdown_background=document.createElement('div');
		this._map_dropdown_background.ggId="Map Dropdown Background";
		this._map_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_dropdown_background.ggVisible=false;
		this._map_dropdown_background.className='ggskin ggskin_rectangle ';
		this._map_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		this._map_dropdown_background.setAttribute('style',hs);
		this._map_dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._map_dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_dropdown_menu_01_text=document.createElement('div');
		this._map_dropdown_menu_01_text__text=document.createElement('div');
		this._map_dropdown_menu_01_text.className='ggskin ggskin_textdiv';
		this._map_dropdown_menu_01_text.ggTextDiv=this._map_dropdown_menu_01_text__text;
		this._map_dropdown_menu_01_text.ggId="Map Dropdown Menu 01 Text";
		this._map_dropdown_menu_01_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_dropdown_menu_01_text.ggVisible=true;
		this._map_dropdown_menu_01_text.className='ggskin ggskin_text ';
		this._map_dropdown_menu_01_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._map_dropdown_menu_01_text.setAttribute('style',hs);
		this._map_dropdown_menu_01_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 21px 10px 21px;';
		hs+='overflow: hidden;';
		this._map_dropdown_menu_01_text__text.setAttribute('style',hs);
		this._map_dropdown_menu_01_text__text.innerHTML="<span style=\"font-size: 12px;\">First Floor<\/span>";
		this._map_dropdown_menu_01_text.appendChild(this._map_dropdown_menu_01_text__text);
		me._map_dropdown_menu_01_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_dropdown_menu_01_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_dropdown_menu_01_text.onclick=function (e) {
			me.__0closeall.onclick();
			me._map_01_image.style[domTransition]='none';
			me._map_01_image.style.visibility=(Number(me._map_01_image.style.opacity)>0||!me._map_01_image.style.opacity)?'inherit':'hidden';
			me._map_01_image.ggVisible=true;
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
		}
		this._map_dropdown_menu_01_text.onmouseover=function (e) {
			me.elementMouseOver['map_dropdown_menu_01_text']=true;
		}
		this._map_dropdown_menu_01_text.onmouseout=function (e) {
			me.elementMouseOver['map_dropdown_menu_01_text']=false;
		}
		this._map_dropdown_menu_01_text.ontouchend=function (e) {
			me.elementMouseOver['map_dropdown_menu_01_text']=false;
		}
		me._map_dropdown_menu_01_text.ggCurrentLogicStateBackgroundColor = -1;
		this._map_dropdown_menu_01_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['map_dropdown_menu_01_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_dropdown_menu_01_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_dropdown_menu_01_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_dropdown_menu_01_text__text.style[domTransition]='background-color none';
				if (me._map_dropdown_menu_01_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_dropdown_menu_01_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._map_dropdown_menu_01_text__text.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		this._map_dropdown_menu_01_text.ggUpdatePosition=function (useTransition) {
		}
		this._map_dropdown_background.appendChild(this._map_dropdown_menu_01_text);
		this._map_dropdown_menu_00_text=document.createElement('div');
		this._map_dropdown_menu_00_text__text=document.createElement('div');
		this._map_dropdown_menu_00_text.className='ggskin ggskin_textdiv';
		this._map_dropdown_menu_00_text.ggTextDiv=this._map_dropdown_menu_00_text__text;
		this._map_dropdown_menu_00_text.ggId="Map Dropdown Menu 00 Text";
		this._map_dropdown_menu_00_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_dropdown_menu_00_text.ggVisible=true;
		this._map_dropdown_menu_00_text.className='ggskin ggskin_text ';
		this._map_dropdown_menu_00_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 198px;';
		hs+='pointer-events:auto;';
		this._map_dropdown_menu_00_text.setAttribute('style',hs);
		this._map_dropdown_menu_00_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 198px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 21px 10px 21px;';
		hs+='overflow: hidden;';
		this._map_dropdown_menu_00_text__text.setAttribute('style',hs);
		this._map_dropdown_menu_00_text__text.innerHTML="<span style=\"font-size: 12px;\">Ground Floor<\/span>";
		this._map_dropdown_menu_00_text.appendChild(this._map_dropdown_menu_00_text__text);
		me._map_dropdown_menu_00_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_dropdown_menu_00_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_dropdown_menu_00_text.onclick=function (e) {
			me.__0closeall.onclick();
			me._map_00_image.style[domTransition]='none';
			me._map_00_image.style.visibility=(Number(me._map_00_image.style.opacity)>0||!me._map_00_image.style.opacity)?'inherit':'hidden';
			me._map_00_image.ggVisible=true;
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
		}
		this._map_dropdown_menu_00_text.onmouseover=function (e) {
			me.elementMouseOver['map_dropdown_menu_00_text']=true;
		}
		this._map_dropdown_menu_00_text.onmouseout=function (e) {
			me.elementMouseOver['map_dropdown_menu_00_text']=false;
		}
		this._map_dropdown_menu_00_text.ontouchend=function (e) {
			me.elementMouseOver['map_dropdown_menu_00_text']=false;
		}
		me._map_dropdown_menu_00_text.ggCurrentLogicStateBackgroundColor = -1;
		this._map_dropdown_menu_00_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['map_dropdown_menu_00_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._map_dropdown_menu_00_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._map_dropdown_menu_00_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._map_dropdown_menu_00_text__text.style[domTransition]='background-color none';
				if (me._map_dropdown_menu_00_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._map_dropdown_menu_00_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._map_dropdown_menu_00_text__text.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		this._map_dropdown_menu_00_text.ggUpdatePosition=function (useTransition) {
		}
		this._map_dropdown_background.appendChild(this._map_dropdown_menu_00_text);
		this._map_menu.appendChild(this._map_dropdown_background);
		this._map_title_background=document.createElement('div');
		this._map_title_background.ggId="Map Title Background";
		this._map_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_title_background.ggVisible=true;
		this._map_title_background.className='ggskin ggskin_rectangle ';
		this._map_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #0064aa;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		this._map_title_background.setAttribute('style',hs);
		this._map_title_background.style[domTransform + 'Origin']='50% 50%';
		me._map_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_title_background.onclick=function (e) {
			me.__0closeall.onclick();
			me._map_dropdown_background.style[domTransition]='none';
			me._map_dropdown_background.style.visibility=(Number(me._map_dropdown_background.style.opacity)>0||!me._map_dropdown_background.style.opacity)?'inherit':'hidden';
			me._map_dropdown_background.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._map_location_icon.style[domTransition]='none';
			} else {
				me._map_location_icon.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_location_icon.ggParameter.a="270.0000";
			me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
			if (me.player.transitionsDisabled) {
				me._map_title_container.style[domTransition]='none';
			} else {
				me._map_title_container.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._map_title_container.ggParameter.rx=15;me._map_title_container.ggParameter.ry=0;
			me._map_title_container.style[domTransform]=parameterToTransform(me._map_title_container.ggParameter);
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
		}
		this._map_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._map_title_container=document.createElement('div');
		this._map_title_container.ggId="Map Title Container";
		this._map_title_container.ggLeft=-250;
		this._map_title_container.ggTop=-25;
		this._map_title_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_title_container.ggVisible=true;
		this._map_title_container.className='ggskin ggskin_container ';
		this._map_title_container.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		this._map_title_container.setAttribute('style',hs);
		this._map_title_container.style[domTransform + 'Origin']='50% 50%';
		me._map_title_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_title_container.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_title_container.onmouseover=function (e) {
			me.elementMouseOver['map_title_container']=true;
		}
		this._map_title_container.onmouseout=function (e) {
			me.elementMouseOver['map_title_container']=false;
		}
		this._map_title_container.ontouchend=function (e) {
			me.elementMouseOver['map_title_container']=false;
		}
		this._map_title_container.ggUpdatePosition=function (useTransition) {
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
		this._map_select_icon=document.createElement('div');
		this._map_select_icon__img=document.createElement('img');
		this._map_select_icon__img.className='ggskin ggskin_svg';
		this._map_select_icon__img.setAttribute('src',basePath + 'images/map_select_icon.svg');
		this._map_select_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_select_icon__img['ondragstart']=function() { return false; };
		this._map_select_icon.appendChild(this._map_select_icon__img);
		this._map_select_icon.ggId="Map Select Icon";
		this._map_select_icon.ggLeft=-22;
		this._map_select_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_select_icon.ggVisible=true;
		this._map_select_icon.className='ggskin ggskin_svg ';
		this._map_select_icon.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -22px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._map_select_icon.setAttribute('style',hs);
		this._map_select_icon.style[domTransform + 'Origin']='50% 50%';
		me._map_select_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_select_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_select_icon.ggUpdatePosition=function (useTransition) {
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
		this._map_title_container.appendChild(this._map_select_icon);
		this._map_location_icon=document.createElement('div');
		this._map_location_icon__img=document.createElement('img');
		this._map_location_icon__img.className='ggskin ggskin_svg';
		this._map_location_icon__img.setAttribute('src',basePath + 'images/map_location_icon.svg');
		this._map_location_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._map_location_icon__img['ondragstart']=function() { return false; };
		this._map_location_icon.appendChild(this._map_location_icon__img);
		this._map_location_icon.ggId="Map Location Icon";
		this._map_location_icon.ggLeft=-240;
		this._map_location_icon.ggTop=-15;
		this._map_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_location_icon.ggVisible=true;
		this._map_location_icon.className='ggskin ggskin_svg ';
		this._map_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		this._map_location_icon.setAttribute('style',hs);
		this._map_location_icon.style[domTransform + 'Origin']='50% 50%';
		me._map_location_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_location_icon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._map_location_icon.ggCurrentLogicStateScaling = -1;
		this._map_location_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_title_container'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_location_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_location_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_location_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._map_location_icon.ggCurrentLogicStateScaling == 0) {
					me._map_location_icon.ggParameter.sx = 1.2;
					me._map_location_icon.ggParameter.sy = 1.2;
					me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
				}
				else {
					me._map_location_icon.ggParameter.sx = 1;
					me._map_location_icon.ggParameter.sy = 1;
					me._map_location_icon.style[domTransform]=parameterToTransform(me._map_location_icon.ggParameter);
				}
			}
		}
		this._map_location_icon.ggUpdatePosition=function (useTransition) {
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
		this._map_title_container.appendChild(this._map_location_icon);
		this._map_menu_title_text=document.createElement('div');
		this._map_menu_title_text__text=document.createElement('div');
		this._map_menu_title_text.className='ggskin ggskin_textdiv';
		this._map_menu_title_text.ggTextDiv=this._map_menu_title_text__text;
		this._map_menu_title_text.ggId="Map Menu Title Text";
		this._map_menu_title_text.ggLeft=-210;
		this._map_menu_title_text.ggTop=-10;
		this._map_menu_title_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_menu_title_text.ggVisible=true;
		this._map_menu_title_text.className='ggskin ggskin_text ';
		this._map_menu_title_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -210px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		this._map_menu_title_text.setAttribute('style',hs);
		this._map_menu_title_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #0064aa;';
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
		this._map_title_container.appendChild(this._map_menu_title_text);
		this._map_title_background.appendChild(this._map_title_container);
		this._map_menu.appendChild(this._map_title_background);
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
		this._map_01_image.ggLeft=50;
		this._map_01_image.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._map_01_image.ggVisible=false;
		this._map_01_image.className='ggskin ggskin_image ';
		this._map_01_image.ggType='image';
		hs ='';
		hs+='height : 533px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : -240px;';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		this._map_01_image.setAttribute('style',hs);
		this._map_01_image.style[domTransform + 'Origin']='0% 0%';
		this._map_01_image.style[domTransform]=parameterToTransform(this._map_01_image.ggParameter);
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
		this._map_01_image.onclick=function (e) {
			me.__0closeall.onclick();
		}
		me._map_01_image.ggCurrentLogicStateScaling = -1;
		this._map_01_image.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 1600) && 
				(me.player.getViewerSize().width > 1300)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width <= 1300) && 
				(me.player.getViewerSize().width > 1000)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_01_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_01_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_01_image.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._map_01_image.ggCurrentLogicStateScaling == 0) {
					me._map_01_image.ggParameter.sx = 1.25;
					me._map_01_image.ggParameter.sy = 1.25;
					me._map_01_image.style[domTransform]=parameterToTransform(me._map_01_image.ggParameter);
				}
				else if (me._map_01_image.ggCurrentLogicStateScaling == 1) {
					me._map_01_image.ggParameter.sx = 1;
					me._map_01_image.ggParameter.sy = 1;
					me._map_01_image.style[domTransform]=parameterToTransform(me._map_01_image.ggParameter);
				}
				else if (me._map_01_image.ggCurrentLogicStateScaling == 2) {
					me._map_01_image.ggParameter.sx = 0.75;
					me._map_01_image.ggParameter.sy = 0.75;
					me._map_01_image.style[domTransform]=parameterToTransform(me._map_01_image.ggParameter);
				}
				else {
					me._map_01_image.ggParameter.sx = 1.5;
					me._map_01_image.ggParameter.sy = 1.5;
					me._map_01_image.style[domTransform]=parameterToTransform(me._map_01_image.ggParameter);
				}
			}
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
			me._map_01_image.ggUpdateConditionResize();
		}
		this._map_01_title=document.createElement('div');
		this._map_01_title__text=document.createElement('div');
		this._map_01_title.className='ggskin ggskin_textdiv';
		this._map_01_title.ggTextDiv=this._map_01_title__text;
		this._map_01_title.ggId="Map 01 title";
		this._map_01_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_01_title.ggVisible=true;
		this._map_01_title.className='ggskin ggskin_text ';
		this._map_01_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._map_01_title.setAttribute('style',hs);
		this._map_01_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 0px solid #0064aa;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._map_01_title__text.setAttribute('style',hs);
		this._map_01_title__text.innerHTML="First Floor Plan";
		this._map_01_title.appendChild(this._map_01_title__text);
		me._map_01_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_01_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_01_title.ggUpdatePosition=function (useTransition) {
		}
		this._map_01_image.appendChild(this._map_01_title);
		this._map_menu.appendChild(this._map_01_image);
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
		this._map_00_image.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._map_00_image.ggVisible=false;
		this._map_00_image.className='ggskin ggskin_image ';
		this._map_00_image.ggType='image';
		hs ='';
		hs+='height : 533px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : -240px;';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		this._map_00_image.setAttribute('style',hs);
		this._map_00_image.style[domTransform + 'Origin']='0% 0%';
		this._map_00_image.style[domTransform]=parameterToTransform(this._map_00_image.ggParameter);
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
		this._map_00_image.onclick=function (e) {
			me.__0closeall.onclick();
		}
		me._map_00_image.ggCurrentLogicStateScaling = -1;
		this._map_00_image.ggUpdateConditionResize=function () {
			var newLogicStateScaling;
			if (
				(me.player.getViewerSize().width <= 1600) && 
				(me.player.getViewerSize().width > 1300)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getViewerSize().width <= 1300) && 
				(me.player.getViewerSize().width > 1000)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_00_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_00_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_00_image.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._map_00_image.ggCurrentLogicStateScaling == 0) {
					me._map_00_image.ggParameter.sx = 1.25;
					me._map_00_image.ggParameter.sy = 1.25;
					me._map_00_image.style[domTransform]=parameterToTransform(me._map_00_image.ggParameter);
				}
				else if (me._map_00_image.ggCurrentLogicStateScaling == 1) {
					me._map_00_image.ggParameter.sx = 1;
					me._map_00_image.ggParameter.sy = 1;
					me._map_00_image.style[domTransform]=parameterToTransform(me._map_00_image.ggParameter);
				}
				else if (me._map_00_image.ggCurrentLogicStateScaling == 2) {
					me._map_00_image.ggParameter.sx = 0.75;
					me._map_00_image.ggParameter.sy = 0.75;
					me._map_00_image.style[domTransform]=parameterToTransform(me._map_00_image.ggParameter);
				}
				else {
					me._map_00_image.ggParameter.sx = 1.5;
					me._map_00_image.ggParameter.sy = 1.5;
					me._map_00_image.style[domTransform]=parameterToTransform(me._map_00_image.ggParameter);
				}
			}
		}
		this._map_00_image.ggUpdatePosition=function (useTransition) {
			me._map_00_image.ggUpdateConditionResize();
		}
		this.__00_entrance_marker=document.createElement('div');
		this.__00_entrance_marker.ggMarkerNodeId='{node14}';
		nodeMarker.push(this.__00_entrance_marker);
		this.__00_entrance_marker.ggId="00 Entrance Marker";
		this.__00_entrance_marker.ggLeft=-18;
		this.__00_entrance_marker.ggTop=-358;
		this.__00_entrance_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_entrance_marker.ggVisible=true;
		this.__00_entrance_marker.className='ggskin ggskin_mark ';
		this.__00_entrance_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : -358px;';
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
			me.player.openNext("{node14}","");
			me.__0closeall.onclick();
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
		this.__00_dye_house_marker.ggLeft=-245;
		this.__00_dye_house_marker.ggTop=-357;
		this.__00_dye_house_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_dye_house_marker.ggVisible=true;
		this.__00_dye_house_marker.className='ggskin ggskin_mark ';
		this.__00_dye_house_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : -245px;';
		hs+='position : absolute;';
		hs+='top : -357px;';
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
			me.player.openNext("{node4}","");
			me.__0closeall.onclick();
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
		this.__00_the_frame_house_marker.ggLeft=247;
		this.__00_the_frame_house_marker.ggTop=-277;
		this.__00_the_frame_house_marker.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__00_the_frame_house_marker.ggVisible=true;
		this.__00_the_frame_house_marker.className='ggskin ggskin_mark ';
		this.__00_the_frame_house_marker.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : -277px;';
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
			me.player.openNext("{node12}","");
			me.__0closeall.onclick();
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
		this._map_00_title=document.createElement('div');
		this._map_00_title__text=document.createElement('div');
		this._map_00_title.className='ggskin ggskin_textdiv';
		this._map_00_title.ggTextDiv=this._map_00_title__text;
		this._map_00_title.ggId="Map 00 title";
		this._map_00_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_00_title.ggVisible=true;
		this._map_00_title.className='ggskin ggskin_text ';
		this._map_00_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._map_00_title.setAttribute('style',hs);
		this._map_00_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 0px solid #0064aa;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._map_00_title__text.setAttribute('style',hs);
		this._map_00_title__text.innerHTML="Ground Floor Plan";
		this._map_00_title.appendChild(this._map_00_title__text);
		me._map_00_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._map_00_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._map_00_title.ggUpdatePosition=function (useTransition) {
		}
		this._map_00_image.appendChild(this._map_00_title);
		this._map_menu.appendChild(this._map_00_image);
		this._list.appendChild(this._map_menu);
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
		me._vacant_menu.ggCurrentLogicStatePosition = -1;
		this._vacant_menu.ggUpdateConditionResize=function () {
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
			if (me._vacant_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._vacant_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._vacant_menu.style[domTransition]='left none, top none';
				if (me._vacant_menu.ggCurrentLogicStatePosition == 0) {
					me._vacant_menu.style.left='0px';
					me._vacant_menu.style.top='250px';
				}
				else {
					me._vacant_menu.style.left='0px';
					me._vacant_menu.style.top='290px';
				}
			}
		}
		this._vacant_menu.ggUpdatePosition=function (useTransition) {
			me._vacant_menu.ggUpdateConditionResize();
		}
		this._vacant_dropdown_background=document.createElement('div');
		this._vacant_dropdown_background.ggId="Vacant Dropdown Background";
		this._vacant_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_dropdown_background.ggVisible=false;
		this._vacant_dropdown_background.className='ggskin ggskin_rectangle ';
		this._vacant_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
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
			me.__0closeall.onclick();
		}
		this._vacant_dropdown_background.ggUpdatePosition=function (useTransition) {
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
		this._vacant_dropdown_background.appendChild(this._vacant_dropdown_cloner);
		this._vacant_menu.appendChild(this._vacant_dropdown_background);
		this._vacant_title_background=document.createElement('div');
		this._vacant_title_background.ggId="Vacant Title Background";
		this._vacant_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_title_background.ggVisible=true;
		this._vacant_title_background.className='ggskin ggskin_rectangle ';
		this._vacant_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #0064aa;';
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
			me.__0closeall.onclick();
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
			me._vacant_title_container.ggParameter.rx=15;me._vacant_title_container.ggParameter.ry=0;
			me._vacant_title_container.style[domTransform]=parameterToTransform(me._vacant_title_container.ggParameter);
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
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
		this._vacant_title_container.onmouseover=function (e) {
			me.elementMouseOver['vacant_title_container']=true;
		}
		this._vacant_title_container.onmouseout=function (e) {
			me.elementMouseOver['vacant_title_container']=false;
		}
		this._vacant_title_container.ontouchend=function (e) {
			me.elementMouseOver['vacant_title_container']=false;
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
		hs+='border: 0px solid #0064aa;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		this._vacant_menu_title_text__text.setAttribute('style',hs);
		this._vacant_menu_title_text__text.innerHTML="<b>Available Units<\/b>";
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
		this._vacant_location_icon.ggTop=-15;
		this._vacant_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vacant_location_icon.ggVisible=true;
		this._vacant_location_icon.className='ggskin ggskin_svg ';
		this._vacant_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
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
		me._vacant_location_icon.ggCurrentLogicStateScaling = -1;
		this._vacant_location_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['vacant_title_container'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._vacant_location_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._vacant_location_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._vacant_location_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._vacant_location_icon.ggCurrentLogicStateScaling == 0) {
					me._vacant_location_icon.ggParameter.sx = 1.2;
					me._vacant_location_icon.ggParameter.sy = 1.2;
					me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
				}
				else {
					me._vacant_location_icon.ggParameter.sx = 1;
					me._vacant_location_icon.ggParameter.sy = 1;
					me._vacant_location_icon.style[domTransform]=parameterToTransform(me._vacant_location_icon.ggParameter);
				}
			}
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
		me._occupied_menu.ggCurrentLogicStatePosition = -1;
		this._occupied_menu.ggUpdateConditionResize=function () {
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
			if (me._occupied_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._occupied_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._occupied_menu.style[domTransition]='left none, top none';
				if (me._occupied_menu.ggCurrentLogicStatePosition == 0) {
					me._occupied_menu.style.left='0px';
					me._occupied_menu.style.top='200px';
				}
				else {
					me._occupied_menu.style.left='0px';
					me._occupied_menu.style.top='240px';
				}
			}
		}
		this._occupied_menu.ggUpdatePosition=function (useTransition) {
			me._occupied_menu.ggUpdateConditionResize();
		}
		this._occupied_dropdown_background=document.createElement('div');
		this._occupied_dropdown_background.ggId="Occupied Dropdown Background";
		this._occupied_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_dropdown_background.ggVisible=false;
		this._occupied_dropdown_background.className='ggskin ggskin_rectangle ';
		this._occupied_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
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
			me.__0closeall.onclick();
		}
		this._occupied_dropdown_background.ggUpdatePosition=function (useTransition) {
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
		this._occupied_dropdown_background.appendChild(this._occupied_dropdown_cloner);
		this._occupied_menu.appendChild(this._occupied_dropdown_background);
		this._occupied_title_background=document.createElement('div');
		this._occupied_title_background.ggId="Occupied Title Background";
		this._occupied_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_title_background.ggVisible=true;
		this._occupied_title_background.className='ggskin ggskin_rectangle ';
		this._occupied_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #0064aa;';
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
			me.__0closeall.onclick();
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
			me._occupied_title_container.ggParameter.rx=15;me._occupied_title_container.ggParameter.ry=0;
			me._occupied_title_container.style[domTransform]=parameterToTransform(me._occupied_title_container.ggParameter);
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
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
		this._occupied_title_container.onmouseover=function (e) {
			me.elementMouseOver['occupied_title_container']=true;
		}
		this._occupied_title_container.onmouseout=function (e) {
			me.elementMouseOver['occupied_title_container']=false;
		}
		this._occupied_title_container.ontouchend=function (e) {
			me.elementMouseOver['occupied_title_container']=false;
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
		this._occupied_location_icon.ggTop=-15;
		this._occupied_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._occupied_location_icon.ggVisible=true;
		this._occupied_location_icon.className='ggskin ggskin_svg ';
		this._occupied_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
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
		me._occupied_location_icon.ggCurrentLogicStateScaling = -1;
		this._occupied_location_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['occupied_title_container'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._occupied_location_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._occupied_location_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._occupied_location_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._occupied_location_icon.ggCurrentLogicStateScaling == 0) {
					me._occupied_location_icon.ggParameter.sx = 1.2;
					me._occupied_location_icon.ggParameter.sy = 1.2;
					me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
				}
				else {
					me._occupied_location_icon.ggParameter.sx = 1;
					me._occupied_location_icon.ggParameter.sy = 1;
					me._occupied_location_icon.style[domTransform]=parameterToTransform(me._occupied_location_icon.ggParameter);
				}
			}
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
		hs+='border: 0px solid #0064aa;';
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
		me._main_menu.ggCurrentLogicStatePosition = -1;
		this._main_menu.ggUpdateConditionResize=function () {
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
			if (me._main_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._main_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._main_menu.style[domTransition]='left none, top none';
				if (me._main_menu.ggCurrentLogicStatePosition == 0) {
					me._main_menu.style.left='0px';
					me._main_menu.style.top='150px';
				}
				else {
					me._main_menu.style.left='0px';
					me._main_menu.style.top='190px';
				}
			}
		}
		this._main_menu.ggUpdatePosition=function (useTransition) {
			me._main_menu.ggUpdateConditionResize();
		}
		this._main_dropdown_background=document.createElement('div');
		this._main_dropdown_background.ggId="Main Dropdown Background";
		this._main_dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_dropdown_background.ggVisible=false;
		this._main_dropdown_background.className='ggskin ggskin_rectangle ';
		this._main_dropdown_background.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
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
			me.__0closeall.onclick();
		}
		this._main_dropdown_background.ggUpdatePosition=function (useTransition) {
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
		this._main_dropdown_background.appendChild(this._main_dropdown_cloner);
		this._main_menu.appendChild(this._main_dropdown_background);
		this._main_title_background=document.createElement('div');
		this._main_title_background.ggId="Main Title Background";
		this._main_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_title_background.ggVisible=true;
		this._main_title_background.className='ggskin ggskin_rectangle ';
		this._main_title_background.ggType='rectangle';
		hs ='';
		hs+='background : #0064aa;';
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
			me.__0closeall.onclick();
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
			me._main_title_container.ggParameter.rx=15;me._main_title_container.ggParameter.ry=0;
			me._main_title_container.style[domTransform]=parameterToTransform(me._main_title_container.ggParameter);
			me.__0closeall.style[domTransition]='none';
			me.__0closeall.style.visibility=(Number(me.__0closeall.style.opacity)>0||!me.__0closeall.style.opacity)?'inherit':'hidden';
			me.__0closeall.ggVisible=true;
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
		this._main_title_container.onmouseover=function (e) {
			me.elementMouseOver['main_title_container']=true;
		}
		this._main_title_container.onmouseout=function (e) {
			me.elementMouseOver['main_title_container']=false;
		}
		this._main_title_container.ontouchend=function (e) {
			me.elementMouseOver['main_title_container']=false;
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
		this._main_location_icon.ggTop=-15;
		this._main_location_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._main_location_icon.ggVisible=true;
		this._main_location_icon.className='ggskin ggskin_svg ';
		this._main_location_icon.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : -240px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
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
		me._main_location_icon.ggCurrentLogicStateScaling = -1;
		this._main_location_icon.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['main_title_container'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._main_location_icon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._main_location_icon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._main_location_icon.style[domTransition]='' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._main_location_icon.ggCurrentLogicStateScaling == 0) {
					me._main_location_icon.ggParameter.sx = 1.2;
					me._main_location_icon.ggParameter.sy = 1.2;
					me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
				}
				else {
					me._main_location_icon.ggParameter.sx = 1;
					me._main_location_icon.ggParameter.sy = 1;
					me._main_location_icon.style[domTransform]=parameterToTransform(me._main_location_icon.ggParameter);
				}
			}
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
		hs+='border: 0px solid #0064aa;';
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
		this._statanimation=document.createElement('div');
		this._statanimation.ggId="StatAnimation";
		this._statanimation.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._statanimation.ggVisible=true;
		this._statanimation.className='ggskin ggskin_container ';
		this._statanimation.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 1820px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		this._statanimation.setAttribute('style',hs);
		this._statanimation.style[domTransform + 'Origin']='50% 50%';
		this._statanimation.style[domTransform]=parameterToTransform(this._statanimation.ggParameter);
		me._statanimation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statanimation.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._statanimation.onclick=function (e) {
			me.player.openUrl("https:\/\/app.powerbi.com\/view?r=eyJrIjoiN2NjZjUzMjYtNmQ4OC00Y2NkLTkzMDUtNDY4M2ZlZmZkYzczIiwidCI6ImJiODI0YWU3LWViMjEtNDkyYy05OWVjLTg3NmI3OWU1YzJhZSIsImMiOjh9","");
		}
		this._statanimation.onmouseover=function (e) {
			me.elementMouseOver['statanimation']=true;
		}
		this._statanimation.onmouseout=function (e) {
			me.elementMouseOver['statanimation']=false;
		}
		this._statanimation.ontouchend=function (e) {
			me.elementMouseOver['statanimation']=false;
		}
		me._statanimation.ggCurrentLogicStatePosition = -1;
		me._statanimation.ggCurrentLogicStateScaling = -1;
		me._statanimation.ggCurrentLogicStateVisible = -1;
		this._statanimation.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width >= 1820)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getViewerSize().width >= 1720)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getViewerSize().width >= 1620)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getViewerSize().width >= 1520)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getViewerSize().width >= 1420)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getViewerSize().width >= 1320)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(me.player.getViewerSize().width >= 1220)
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				(me.player.getViewerSize().width >= 1120)
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				(me.player.getViewerSize().width >= 1020)
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				(me.player.getViewerSize().width >= 920)
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				(me.player.getViewerSize().width >= 820)
			)
			{
				newLogicStatePosition = 10;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._statanimation.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._statanimation.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._statanimation.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statanimation.ggCurrentLogicStatePosition == 0) {
					me._statanimation.style.left='1720px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 1) {
					me._statanimation.style.left='1620px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 2) {
					me._statanimation.style.left='1520px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 3) {
					me._statanimation.style.left='1420px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 4) {
					me._statanimation.style.left='1320px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 5) {
					me._statanimation.style.left='1220px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 6) {
					me._statanimation.style.left='1120px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 7) {
					me._statanimation.style.left='1020px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 8) {
					me._statanimation.style.left='920px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 9) {
					me._statanimation.style.left='820px';
					me._statanimation.style.top='60px';
				}
				else if (me._statanimation.ggCurrentLogicStatePosition == 10) {
					me._statanimation.style.left='720px';
					me._statanimation.style.top='60px';
				}
				else {
					me._statanimation.style.left='1820px';
					me._statanimation.style.top='60px';
				}
			}
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
			if (me._statanimation.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._statanimation.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._statanimation.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statanimation.ggCurrentLogicStateVisible == 0) {
					me._statanimation.style.visibility="hidden";
					me._statanimation.ggVisible=false;
				}
				else {
					me._statanimation.style.visibility=(Number(me._statanimation.style.opacity)>0||!me._statanimation.style.opacity)?'inherit':'hidden';
					me._statanimation.ggVisible=true;
				}
			}
		}
		this._statanimation.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['statanimation'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statanimation.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statanimation.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statanimation.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statanimation.ggCurrentLogicStateScaling == 0) {
					me._statanimation.ggParameter.sx = 1;
					me._statanimation.ggParameter.sy = 1;
					me._statanimation.style[domTransform]=parameterToTransform(me._statanimation.ggParameter);
				}
				else {
					me._statanimation.ggParameter.sx = 0.8;
					me._statanimation.ggParameter.sy = 0.8;
					me._statanimation.style[domTransform]=parameterToTransform(me._statanimation.ggParameter);
				}
			}
		}
		this._statanimation.ggUpdatePosition=function (useTransition) {
			me._statanimation.ggUpdateConditionResize();
		}
		this._statimmersivesurround=document.createElement('div');
		this._statimmersivesurround__img=document.createElement('img');
		this._statimmersivesurround__img.className='ggskin ggskin_svg';
		this._statimmersivesurround__img.setAttribute('src',basePath + 'images/statimmersivesurround.svg');
		this._statimmersivesurround__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._statimmersivesurround__img['ondragstart']=function() { return false; };
		this._statimmersivesurround.appendChild(this._statimmersivesurround__img);
		this._statimmersivesurround.ggId="StatImmersiveSurround";
		this._statimmersivesurround.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._statimmersivesurround.ggVisible=true;
		this._statimmersivesurround.className='ggskin ggskin_svg ';
		this._statimmersivesurround.ggType='svg';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._statimmersivesurround.setAttribute('style',hs);
		this._statimmersivesurround.style[domTransform + 'Origin']='50% 50%';
		me._statimmersivesurround.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statimmersivesurround.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._statimmersivesurround.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statimmersivesurround);
		this._statline2=document.createElement('div');
		this._statline2.ggId="StatLine2";
		this._statline2.ggTop=-36;
		this._statline2.ggParameter={ rx:0,ry:0,a:-60,sx:1,sy:1 };
		this._statline2.ggVisible=false;
		this._statline2.className='ggskin ggskin_rectangle ';
		this._statline2.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #0064aa;';
		hs+='cursor : default;';
		hs+='height : 5px;';
		hs+='left : 55px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -36px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._statline2.setAttribute('style',hs);
		this._statline2.style[domTransform + 'Origin']='0% 50%';
		this._statline2.style[domTransform]=parameterToTransform(this._statline2.ggParameter);
		me._statline2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statline2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._statline2.ggCurrentLogicStateScaling = -1;
		me._statline2.ggCurrentLogicStateVisible = -1;
		this._statline2.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['FrameTimer'] <= 3)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statline2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statline2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statline2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._statline2.ggCurrentLogicStateScaling == 0) {
					me._statline2.ggParameter.sx = 0.01;
					me._statline2.ggParameter.sy = 1;
					me._statline2.style[domTransform]=parameterToTransform(me._statline2.ggParameter);
				}
				else {
					me._statline2.ggParameter.sx = 1;
					me._statline2.ggParameter.sy = 1;
					me._statline2.style[domTransform]=parameterToTransform(me._statline2.ggParameter);
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['FrameTimer'] >= 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._statline2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._statline2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._statline2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._statline2.ggCurrentLogicStateVisible == 0) {
					me._statline2.style.visibility=(Number(me._statline2.style.opacity)>0||!me._statline2.style.opacity)?'inherit':'hidden';
					me._statline2.ggVisible=true;
				}
				else {
					me._statline2.style.visibility="hidden";
					me._statline2.ggVisible=false;
				}
			}
		}
		this._statline2.ggUpdatePosition=function (useTransition) {
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
		this._statanimation.appendChild(this._statline2);
		this._statline1=document.createElement('div');
		this._statline1.ggId="StatLine1";
		this._statline1.ggParameter={ rx:0,ry:0,a:60,sx:1,sy:1 };
		this._statline1.ggVisible=false;
		this._statline1.className='ggskin ggskin_rectangle ';
		this._statline1.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #0064aa;';
		hs+='cursor : default;';
		hs+='height : 5px;';
		hs+='left : 36px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 47px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		this._statline1.setAttribute('style',hs);
		this._statline1.style[domTransform + 'Origin']='0% 50%';
		this._statline1.style[domTransform]=parameterToTransform(this._statline1.ggParameter);
		me._statline1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statline1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._statline1.ggCurrentLogicStateScaling = -1;
		me._statline1.ggCurrentLogicStateVisible = -1;
		this._statline1.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['FrameTimer'] <= 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statline1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statline1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statline1.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms';
				if (me._statline1.ggCurrentLogicStateScaling == 0) {
					me._statline1.ggParameter.sx = 0.01;
					me._statline1.ggParameter.sy = 1;
					me._statline1.style[domTransform]=parameterToTransform(me._statline1.ggParameter);
				}
				else {
					me._statline1.ggParameter.sx = 1;
					me._statline1.ggParameter.sy = 1;
					me._statline1.style[domTransform]=parameterToTransform(me._statline1.ggParameter);
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['FrameTimer'] >= 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._statline1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._statline1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._statline1.style[domTransition]='' + cssPrefix + 'transform 1250ms ease 0ms';
				if (me._statline1.ggCurrentLogicStateVisible == 0) {
					me._statline1.style.visibility=(Number(me._statline1.style.opacity)>0||!me._statline1.style.opacity)?'inherit':'hidden';
					me._statline1.ggVisible=true;
				}
				else {
					me._statline1.style.visibility="hidden";
					me._statline1.ggVisible=false;
				}
			}
		}
		this._statline1.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statline1);
		this._statcircle1=document.createElement('div');
		this._statcircle1.ggId="StatCircle1";
		this._statcircle1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._statcircle1.ggVisible=true;
		this._statcircle1.className='ggskin ggskin_rectangle ';
		this._statcircle1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 6px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 24px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._statcircle1.setAttribute('style',hs);
		this._statcircle1.style[domTransform + 'Origin']='50% 50%';
		me._statcircle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statcircle1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._statcircle1.ggCurrentLogicStateScaling = -1;
		this._statcircle1.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['OccelateTimer'] == false)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statcircle1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statcircle1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statcircle1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statcircle1.ggCurrentLogicStateScaling == 0) {
					me._statcircle1.ggParameter.sx = 0.9;
					me._statcircle1.ggParameter.sy = 0.9;
					me._statcircle1.style[domTransform]=parameterToTransform(me._statcircle1.ggParameter);
				}
				else {
					me._statcircle1.ggParameter.sx = 1;
					me._statcircle1.ggParameter.sy = 1;
					me._statcircle1.style[domTransform]=parameterToTransform(me._statcircle1.ggParameter);
				}
			}
		}
		this._statcircle1.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statcircle1);
		this._statcircle2=document.createElement('div');
		this._statcircle2.ggId="StatCircle2";
		this._statcircle2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._statcircle2.ggVisible=false;
		this._statcircle2.className='ggskin ggskin_rectangle ';
		this._statcircle2.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 6px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 41px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._statcircle2.setAttribute('style',hs);
		this._statcircle2.style[domTransform + 'Origin']='50% 50%';
		me._statcircle2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statcircle2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._statcircle2.ggCurrentLogicStateScaling = -1;
		me._statcircle2.ggCurrentLogicStateVisible = -1;
		this._statcircle2.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['OccelateTimer'] == false)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statcircle2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statcircle2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statcircle2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statcircle2.ggCurrentLogicStateScaling == 0) {
					me._statcircle2.ggParameter.sx = 0.9;
					me._statcircle2.ggParameter.sy = 0.9;
					me._statcircle2.style[domTransform]=parameterToTransform(me._statcircle2.ggParameter);
				}
				else {
					me._statcircle2.ggParameter.sx = 1;
					me._statcircle2.ggParameter.sy = 1;
					me._statcircle2.style[domTransform]=parameterToTransform(me._statcircle2.ggParameter);
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['FrameTimer'] >= 3)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._statcircle2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._statcircle2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._statcircle2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statcircle2.ggCurrentLogicStateVisible == 0) {
					me._statcircle2.style.visibility=(Number(me._statcircle2.style.opacity)>0||!me._statcircle2.style.opacity)?'inherit':'hidden';
					me._statcircle2.ggVisible=true;
				}
				else {
					me._statcircle2.style.visibility="hidden";
					me._statcircle2.ggVisible=false;
				}
			}
		}
		this._statcircle2.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statcircle2);
		this._statcircle3=document.createElement('div');
		this._statcircle3.ggId="StatCircle3";
		this._statcircle3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._statcircle3.ggVisible=false;
		this._statcircle3.className='ggskin ggskin_rectangle ';
		this._statcircle3.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 6px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 61px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : hidden;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		this._statcircle3.setAttribute('style',hs);
		this._statcircle3.style[domTransform + 'Origin']='50% 50%';
		me._statcircle3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._statcircle3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._statcircle3.ggCurrentLogicStateScaling = -1;
		me._statcircle3.ggCurrentLogicStateVisible = -1;
		this._statcircle3.ggUpdateConditionTimer=function () {
			var newLogicStateScaling;
			if (
				(ggSkinVars['OccelateTimer'] == false)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._statcircle3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._statcircle3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._statcircle3.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statcircle3.ggCurrentLogicStateScaling == 0) {
					me._statcircle3.ggParameter.sx = 0.9;
					me._statcircle3.ggParameter.sy = 0.9;
					me._statcircle3.style[domTransform]=parameterToTransform(me._statcircle3.ggParameter);
				}
				else {
					me._statcircle3.ggParameter.sx = 1;
					me._statcircle3.ggParameter.sy = 1;
					me._statcircle3.style[domTransform]=parameterToTransform(me._statcircle3.ggParameter);
				}
			}
			var newLogicStateVisible;
			if (
				(ggSkinVars['FrameTimer'] >= 5)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._statcircle3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._statcircle3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._statcircle3.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._statcircle3.ggCurrentLogicStateVisible == 0) {
					me._statcircle3.style.visibility=(Number(me._statcircle3.style.opacity)>0||!me._statcircle3.style.opacity)?'inherit':'hidden';
					me._statcircle3.ggVisible=true;
				}
				else {
					me._statcircle3.style.visibility="hidden";
					me._statcircle3.ggVisible=false;
				}
			}
		}
		this._statcircle3.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statcircle3);
		this._stateventtimer=document.createElement('div');
		this._stateventtimer.ggTimestamp=this.ggCurrentTime;
		this._stateventtimer.ggLastIsActive=true;
		this._stateventtimer.ggTimeout=500;
		this._stateventtimer.ggId="StatEventTimer";
		this._stateventtimer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stateventtimer.ggVisible=true;
		this._stateventtimer.className='ggskin ggskin_timer ';
		this._stateventtimer.ggType='timer';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		this._stateventtimer.setAttribute('style',hs);
		this._stateventtimer.style[domTransform + 'Origin']='50% 50%';
		me._stateventtimer.ggIsActive=function() {
			return (me._stateventtimer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._stateventtimer.ggTimestamp) / me._stateventtimer.ggTimeout) % 2 == 0));
		}
		me._stateventtimer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stateventtimer.ggActivate=function () {
			ggSkinVars['OccelateTimer'] = false;
			ggSkinVars['FrameTimer'] = ggSkinVars['FrameTimer'] + Number("1");
		}
		this._stateventtimer.ggDeactivate=function () {
			ggSkinVars['OccelateTimer'] = true;
		}
		this._stateventtimer.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._stateventtimer);
		this._statrepeattimer=document.createElement('div');
		this._statrepeattimer.ggTimestamp=this.ggCurrentTime;
		this._statrepeattimer.ggLastIsActive=true;
		this._statrepeattimer.ggTimeout=4000;
		this._statrepeattimer.ggId="StatRepeatTimer";
		this._statrepeattimer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._statrepeattimer.ggVisible=true;
		this._statrepeattimer.className='ggskin ggskin_timer ';
		this._statrepeattimer.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		this._statrepeattimer.setAttribute('style',hs);
		this._statrepeattimer.style[domTransform + 'Origin']='50% 50%';
		me._statrepeattimer.ggIsActive=function() {
			return (me._statrepeattimer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._statrepeattimer.ggTimestamp) / me._statrepeattimer.ggTimeout) % 2 == 0));
		}
		me._statrepeattimer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._statrepeattimer.ggActivate=function () {
			ggSkinVars['FrameTimer'] = Number("0");
		}
		this._statrepeattimer.ggUpdatePosition=function (useTransition) {
		}
		this._statanimation.appendChild(this._statrepeattimer);
		this._list.appendChild(this._statanimation);
		this.divSkin.appendChild(this._list);
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
		this._instructions.style[domTransform + 'Origin']='0% 0%';
		me._instructions.ggIsActive=function() {
			return false;
		}
		me._instructions.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._instructions.ggCurrentLogicStateVisible = -1;
		this._instructions.ggUpdateConditionResize=function () {
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
			if (me._instructions.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instructions.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instructions.style[domTransition]='';
				if (me._instructions.ggCurrentLogicStateVisible == 0) {
					me._instructions.style.visibility="hidden";
					me._instructions.ggVisible=false;
				}
				else {
					me._instructions.style.visibility=(Number(me._instructions.style.opacity)>0||!me._instructions.style.opacity)?'inherit':'hidden';
					me._instructions.ggVisible=true;
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
		hs+='left : 210px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 60px;';
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
			me._instructions_image.style[domTransition]='none';
			me._instructions_image.style.visibility=(Number(me._instructions_image.style.opacity)>0||!me._instructions_image.style.opacity)?'inherit':'hidden';
			me._instructions_image.ggVisible=true;
			me._info_icon__img.style.visibility='hidden';
			me._info_icon__imgo.style.visibility='inherit';
		}
		this._info_icon.onmouseout=function (e) {
			me._instructions_image.style[domTransition]='none';
			me._instructions_image.style.visibility='hidden';
			me._instructions_image.ggVisible=false;
			me._info_icon__img.style.visibility='inherit';
			me._info_icon__imgo.style.visibility='hidden';
		}
		this._info_icon.ggUpdatePosition=function (useTransition) {
		}
		this._instructions.appendChild(this._info_icon);
		this.divSkin.appendChild(this._instructions);
		this._screentint_info=document.createElement('div');
		this._screentint_info.ggId="screentint_info";
		this._screentint_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint_info.ggVisible=false;
		this._screentint_info.className='ggskin ggskin_rectangle ';
		this._screentint_info.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #0064aa;';
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
					me._information.style.left='0px';
					me._information.style.top='50px';
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
		hs+='background : rgba(0,100,170,0.784314);';
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
		hs+='border: 0px solid #0064aa;';
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
		hs+='border: 0px solid #0064aa;';
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
		this.__360logorightclick=document.createElement('div');
		this.__360logorightclick__img=document.createElement('img');
		this.__360logorightclick__img.className='ggskin ggskin_image';
		this.__360logorightclick__img.setAttribute('src',basePath + 'images/_360logorightclick.png');
		this.__360logorightclick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this.__360logorightclick__img.className='ggskin ggskin_image';
		this.__360logorightclick__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__360logorightclick__img);
		this.__360logorightclick.appendChild(this.__360logorightclick__img);
		this.__360logorightclick.ggId="360LogoRightClick";
		this.__360logorightclick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__360logorightclick.ggVisible=false;
		this.__360logorightclick.className='ggskin ggskin_image ';
		this.__360logorightclick.ggType='image';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		this.__360logorightclick.setAttribute('style',hs);
		this.__360logorightclick.style[domTransform + 'Origin']='50% 50%';
		me.__360logorightclick.ggIsActive=function() {
			return false;
		}
		me.__360logorightclick.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this.__360logorightclick.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this.__360logorightclick);
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
		me.__00_entrance_marker.ggNodeChange();
		me.__00_dye_house_marker.ggNodeChange();
		me.__00_the_frame_house_marker.ggNodeChange();
		me._vacant_dropdown_cloner.ggNodeChange();
		me._occupied_dropdown_cloner.ggNodeChange();
		me._main_dropdown_cloner.ggNodeChange();
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
		me._pano_title.ggUpdateText();
		if (me.elementMouseOver['tour_menu_title_background']) {
		}
		me._menu_open_icon.ggUpdateConditionTimer();
		me._menu_close_icon.ggUpdateConditionTimer();
		if (me.elementMouseOver['stats_title_container']) {
		}
		me._stats_location_icon.ggUpdateConditionTimer();
		if (me.elementMouseOver['map_dropdown_menu_01_text']) {
		}
		me._map_dropdown_menu_01_text.ggUpdateConditionTimer();
		if (me.elementMouseOver['map_dropdown_menu_00_text']) {
		}
		me._map_dropdown_menu_00_text.ggUpdateConditionTimer();
		if (me.elementMouseOver['map_title_container']) {
		}
		me._map_location_icon.ggUpdateConditionTimer();
		me._vacant_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['vacant_title_container']) {
		}
		me._vacant_location_icon.ggUpdateConditionTimer();
		me._occupied_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['occupied_title_container']) {
		}
		me._occupied_location_icon.ggUpdateConditionTimer();
		me._main_dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['main_title_container']) {
		}
		me._main_location_icon.ggUpdateConditionTimer();
		if (me.elementMouseOver['statanimation']) {
		}
		me._statanimation.ggUpdateConditionTimer();
		me._statline2.ggUpdateConditionTimer();
		me._statline1.ggUpdateConditionTimer();
		me._statcircle1.ggUpdateConditionTimer();
		me._statcircle2.ggUpdateConditionTimer();
		me._statcircle3.ggUpdateConditionTimer();
		if (me._stateventtimer.ggLastIsActive!=me._stateventtimer.ggIsActive()) {
			me._stateventtimer.ggLastIsActive=me._stateventtimer.ggIsActive();
			if (me._stateventtimer.ggLastIsActive) {
				ggSkinVars['OccelateTimer'] = false;
				ggSkinVars['FrameTimer'] = ggSkinVars['FrameTimer'] + Number("1");
			} else {
				ggSkinVars['OccelateTimer'] = true;
			}
		}
		if (me._statrepeattimer.ggLastIsActive!=me._statrepeattimer.ggIsActive()) {
			me._statrepeattimer.ggLastIsActive=me._statrepeattimer.ggIsActive();
			if (me._statrepeattimer.ggLastIsActive) {
				ggSkinVars['FrameTimer'] = Number("0");
			} else {
			}
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
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin._play_button.onclick();
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
			hs+='color: rgba(0,100,170,1);';
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
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin._play_button.onclick();
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
			hs+='color: rgba(0,100,170,1);';
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
			hs+='height : 35px;';
			hs+='left : 36px;';
			hs+='position : absolute;';
			hs+='top : -35px;';
			hs+='visibility : inherit;';
			hs+='width : 138px;';
			hs+='pointer-events:auto;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 138px;';
			hs+='height: 35px;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.392157);';
			hs+='border: 0px solid #000000;';
			hs+='border: 0px solid rgba(0,0,0,0);';
			hs+=cssPrefix + 'background-clip: padding-box;';
			hs+='background-clip: padding-box;';
			hs+='border-radius: 3px;';
			hs+=cssPrefix + 'border-radius: 3px;';
			hs+='color: rgba(0,100,170,1);';
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
		hs+='color: rgba(0,100,170,1);';
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
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 21px 10px 21px;';
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
					me._vacant_dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._vacant_dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,0)";
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
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 21px 10px 21px;';
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
					me._occupied_dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._occupied_dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,0)";
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
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,100,170,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 21px 10px 21px;';
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
					me._main_dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._main_dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		this._main_dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._main_dropdown_menu_text);
	};
	this.addSkin();
};