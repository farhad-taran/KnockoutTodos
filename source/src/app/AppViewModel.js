define("AppViewModel",["knockout"], function(ko) {

  var singleton =  function(){ 
    var logs = ko.observableArray();
    var tasks = ko.observableArray();
    var taskName = ko.observable("");

    removeTask = function() {
      this.tasks.remove(this);
      this.log('You invoked doSomething() on the viewmodel.');
    };

    addTask = function(taskName) {
      tasks.push({taskName:taskName})
      log('You invoked doSomething() on the viewmodel.');
    };

    log = function(message) {
      logs.push(message)
    };

    // Return public methods
        return {
          logs:logs,
          tasks:tasks,
          addTask : addTask,
          removeTask : removeTask,
        }

  };

  return singleton();
});
