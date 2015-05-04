define(['knockout', 'text!./contact-page.html'], function(ko, templateMarkup) {

  function ContactPage(params) {
    this.message = ko.observable('Hello from the contact-page component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ContactPage.prototype.dispose = function() { };
  
  return { viewModel: ContactPage, template: templateMarkup };

});
