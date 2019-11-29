var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) { // handle unescaped html for XSS
 	let compiled = _.template(`<div> <strong> <%= username %> </strong> <p> <%= text %> </p> </div>`);
	let html = compiled(message);

	MessagesView.$chats.prepend(html);
  }

};