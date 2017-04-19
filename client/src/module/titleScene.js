/* global cc, res, window */

var TitleScene = cc.Scene.extend({
    onEnter: function(){
    	cc.log("TitleScene: start.");

        this._super();
        var size = cc.director.getWinSize();
        //var titleSprite = cc.Sprite.create(res.title_png);
        //titleSprite.setPosition(size.width/2, size.height/2);
        //this.addChild(titleSprite, 0);

        var startLabel = new cc.LabelTTF("TOUCH TO START!", "Arial", 60);
        startLabel.setFontFillColor(cc.color("#000"));
        startLabel.setPosition(size.width/2, size.height/4);
        this.addChild(startLabel, 1);

		//cc.audioEngine.setMusicVolume(0.2);
		//cc.audioEngine.playMusic(res.title_mp3, true);

		var SocketIO = SocketIO || window.io;
		cc.log("connect!");
		var sioclient = SocketIO.connect("ws://localhost:3000", {"force new connection" : true});

		sioclient.emit("msg", {for: "everyone"});

		sioclient.on("mmssgg", function(msg){
			cc.log(msg);
		});

		this.scheduleOnce(function(){
			cc.log("disconnect!");
			sioclient.disconnect();
		}, 5);

    },

});
