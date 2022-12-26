Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    // this.addCommand(TextManager.options,   'options');
};

Window_MenuCommand.prototype.addOptionsCommand = function() {
};