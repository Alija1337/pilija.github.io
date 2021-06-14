		function validateForm(){
			//checking the name
			var name = document.getElementById("name");
			if (name.value == ""){
				alert("Unesite vase ime.");
				name.focus();
				return false;
			} else {
				var regExpName = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
				if (!regExpName.test(name.value)){
					alert("Unesite u odgovarajucem formatu.");
					name.focus();
					return false;
				} 
			}
			
			//check if the city was selected
			if (document.getElementById("city").value == "-1"){
				alert("Morate uneti grad.");
				return false;
			}
			
			//check address
			var address = document.getElementById("address");
			if(address.value == ""){
				alert("Unesite Vasu adresu.");
				address.focus();
				return false;
			} else {
				var regExpAddress = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*\s[0-9]{1,3}([a-z])?$/;
				if(!regExpAddress.test(address.value)){
					alert("Unesite u odgovarajucem formatu.");
					address.focus();
					return false;
				}
			}			
			//check email
			var email = document.getElementById("email");
			if(email.value == ""){
				alert("Unesite e-mail.");
				email.focus();
				return false;
			} else {
				//validate email
				var regExpEmail = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(!regExpEmail.test(email.value)){
					alert("E-mail nije u dobrom formatu.");
					email.focus();
					return false;
				}
			}
}