game.TitleScreen = me.ScreenObject.extend({
  /**
   *  action to perform on state change
   */
  
  onResetEvent: function() {
    me.game.world.addChild(new me.ColorLayer("background", "#543107"), 1);
      me.input.bindKey(me.input.KEY.ENTER, "enter", true);
      this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
        if (action === "enter") {
          // play something on tap / enter
          // this will unlock audio on mobile devices
          
          me.state.change(me.state.PLAY);
        }
      });        
  },

  /**
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {
      me.input.unbindKey(me.input.KEY.ENTER);
       me.event.unsubscribe(this.handler);
       // TODO
      // TODO
  }
});