var game = {

    score: 0,

    // Run on page load.
    onload: function () {
        me.pool.register("player", game.Player);
        me.pool.register("enemy", game.Enemy);
        me.pool.register("laser", game.Laser);
        // Initialize the video.
        if (!me.video.init(640, 480, {
                wrapper: "screen",
                scale: 'auto'
            })) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
        
        // set and load all resources.  
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    loaded: function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());
        this.playScreen = new game.PlayScreen();
        me.state.set(me.state.PLAY, this.playScreen);

        // start the game
        me.state.change(me.state.MENU);
    }
};
