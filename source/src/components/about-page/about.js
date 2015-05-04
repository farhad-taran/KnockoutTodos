
define(["knockout", "text!./about.html","AppViewModel"], function(ko, aboutTemplate,AppViewModel) {

  function AboutViewModel(route) {
    this.message = ko.observable('Welcome to ko!');
    this.logs = AppViewModel.logs();
  }

  AboutViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: AboutViewModel, template: aboutTemplate };

});