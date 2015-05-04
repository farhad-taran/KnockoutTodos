define(['knockout', 'text!./completed-page.html','AppViewModel'], function(ko, templateMarkup,AppViewModel) {

  function Completed(params) {
  	debugger
    this.completedTasks = AppViewModel.tasks();
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Completed.prototype.dispose = function() { };
  
  return { viewModel: Completed, template: templateMarkup };

});
