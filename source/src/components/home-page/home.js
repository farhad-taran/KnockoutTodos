define(["AppViewModel","knockout", "text!./home.html"], function(AppViewModel,ko, homeTemplate) {

	ko.bindingHandlers.executeOnEnter = {
	    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {	    	
	        var allBindings = allBindingsAccessor();
	        $(element).keypress(function (event) {
	            var keyCode = (event.which ? event.which : event.keyCode);
	            if (keyCode === 13) {
	                allBindings.executeOnEnter.call(viewModel);
	                event.target.value = '';
	                return false;
	            }
	            return true;
	        });
	    }
	};

  function HomeViewModel(route) {
    debugger
    this.vm = AppViewModel;
    this.tasks = this.vm.tasks();
    this.taskName = ko.observable("");
  }

  HomeViewModel.prototype.removeTask = function() {
    AppViewModel.removeTask(this);
  };

  HomeViewModel.prototype.addTask = function(val,ev) {
    this.vm.addTask(this.taskName());
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
