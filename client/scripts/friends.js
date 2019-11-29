var Friends = {
	// Attach the click listener for the username
	initialize:()=>{
		$('body').on('click', '.username', function(e){
			let src = $(this);
			let username = src.html();

			// alert(username);
		});
	},

	toggleStatus: ()=>{
		return true;
	}

};