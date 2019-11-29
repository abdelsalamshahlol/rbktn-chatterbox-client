var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
  	let option = _.template('<option value="<%= room %>"> <%= room %> </option>')({room}); 
  	RoomsView.$select.append(option);
  }
};
