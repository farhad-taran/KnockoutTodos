define("AppViewModel",["knockout"], function(ko) {

  var singleton =  function(){ 
    var logs = ko.observableArray();
    var tasks = ko.observableArray();
    var taskName = ko.observable("");

    removeTask = function(task) {
      tasks.remove(task);
      log('Removed task: '+ this);
    };

    addTask = function(taskName) {
      tasks.push({taskName:taskName})
      log('Added new task: '+ taskName);
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
