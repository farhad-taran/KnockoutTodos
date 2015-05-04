define("application", ["knockout","AppViewModel"], function (ko, obj) {
    var application  = function() {
    	debugger
        var self = this;
        self.AppViewModel = obj;
    }
    return new application();
});
