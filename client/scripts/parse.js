var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    console.log(successCB, errorCB, message);
    $.ajax({
      type: "POST",
      url: Parse.server,
      contentType: 'application/json',
      data: JSON.stringify(message),
      sucess: (msg) => alert(msg),
      error: (err) =>{
        console.warm(err)
      }
    })

  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};