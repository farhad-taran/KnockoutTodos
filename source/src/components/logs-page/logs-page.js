
define(["knockout", "text!./logs-page.html","AppViewModel"], function(ko, logsTemplate,AppViewModel) {

  function logsViewModel(route) {
    this.message = ko.observable('Welcome to ko!');
    this.logs = AppViewModel.logs();
  }

  logsViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: logsViewModel, template: logsTemplate };

});