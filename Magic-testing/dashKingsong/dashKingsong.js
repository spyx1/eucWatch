//kingsong settings
face[0] = {
	offms: (set.def.off[face.appCurr])?set.def.off[face.appCurr]:5000,
	g:w.gfx,
	page:"dashKS",
	init: function(){
		if (euc.state!=="READY") {face.go(set.dash[set.def.dash.face],0);return;}
		if (!euc.tmp.ls) {euc.tmp.ls=1;setTimeout(()=>{euc.wri("getLock");setTimeout(()=>{euc.wri("getStrobe");},100);},300);}
		eval(require('Storage').read("dashKingsongAct")); 
		this.bar();
		this.run=1;
	},
	show : function(){
		"ram";
		if (euc.state!=="READY") {face.go(set.dash[set.def.dash.face],0);return;}
		if (!this.run)  return;
		if (this.page=="actions"){
			if ( this.light!=dash.live.ks.HL) {
				this.light=dash.live.ks.HL;
				let val=["CITY","ON","OFF","AUTO"];
				UI.btn.c2l("main","_2x2",1,dash.live.ks.city?"CITY":"LIGHTS",val[dash.live.ks.HL],15,dash.live.ks.HL!=2?dash.live.ks.city?12:4:1);
			}if ( this.strb!=dash.live.strb) {
				this.strb=dash.live.strb;
				UI.btn.c2l("main","_2x2",2,"STRB","",15,dash.live.strb?7:1);
			}
			if ( this.lock!=dash.live.lock) {
				this.lock=dash.live.lock;
				UI.btn.c2l("bar","_2x2",4,"LOCK","",15,dash.live.lock?7:1);	
			}		
		}else if (this.page=="light"){
			if ( this.last!=dash.live.ks.HL) {
				this.last=dash.live.ks.HL;
				UI.btn.c2l("main","_2x2",1,"ON","",15,dash.live.ks.HL==1?4:1);
				UI.btn.c2l("main","_2x2",2,"AUTO","",15,dash.live.ks.HL==3?4:1);
				UI.btn.c2l("main","_2x2",4,"OFF","",15,dash.live.ks.HL==2?4:1);	
				UI.btn.c2l("main","_2x2",3,"eucWatch","CITY",15,dash.live.ks.city?12:1);
			}
		}else if (this.page=="options"){
			if ( this.ride!=dash.live.ks.ride) {
				this.ride=dash.live.ks.ride;
				UI.btn.c2l("main","_2x2",1,"LED","RIDE",15,dash.live.ks.ride?4:1);
			}
			if ( this.lift!=dash.live.ks.lift) {
				this.ride=dash.live.ks.ride;
				UI.btn.c2l("main","_2x2",3,"SENSOR","LIFT",15,dash.live.ks.lift?4:1);
			}
		}else if (this.page=="automation"){
	
		}else if (this.page=="wheel"){
			
		}
		this.tid=setTimeout(function(t,o){
		  t.tid=-1;
		  t.show();
		},100,this);
	},
	bar:function(){
		"ram";
		set.bar=0;
		UI.ele.title(this.page.toUpperCase(),15,4);w.gfx.flip();
	},
	tid:-1,
	run:false,
	clear : function(){
		set.bar=0;if (this.tid) clearTimeout(this.tid);this.tid=0;return true;
	},
	off: function(){
		this.g.off();this.clear();
	}
};
//touch
touchHandler[0]=function(){return;};
