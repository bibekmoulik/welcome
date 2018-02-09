function validateMessage()
{
	if (document.getElementById("contactName").value == "" ||
		document.getElementById("contactEmail").value == "" ||
		document.getElementById("contactNumber").value == "" ||
		document.getElementById("contactMsg").value == "")
	{
		alert("Please fill all the fields");
		return false;
	}
	else
	{
		return true;
	}
}

function clearForm()
{
	document.getElementById("contactName").value = "";
	document.getElementById("contactEmail").value = "";
	document.getElementById("contactNumber").value = "";
	document.getElementById("contactMsg").value = "";
	
	document.getElementById("contactName").placeholder = "Your Name";
	document.getElementById("contactEmail").placeholder = "Your Email ID";
	document.getElementById("contactNumber").placeholder = "Your Contact Number";
	document.getElementById("contactMsg").placeholder = "Type your message here..";
}

function sendMail()
{
	var settings = {
			"async": true,
			"crossDomain": true,
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: 
				{
					'key': 'e5b80d11-7f29-4735-834b-6c94aa198c35',
					'message': 
							{
								'from_email': 'bibek.moulik@cognizant.com',
								'to': [
										{
										'email': 'bibek.moulik@cognizant.com',
										'name': 'Bibek',
										'type': 'to'
										}
										],
								'autotext': 'true',
								'subject': 'YOUR SUBJECT HERE!',
								'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
							}
				}
	}
	
	$.ajax(settings).done(function(response) {
		console.log(response); // if you're into that sorta thing
	});
	
	clearForm();
}

function sendSMS()
{
	var cName = "Name: " + document.getElementById("contactName").value;
	var cEmail = "Email ID: " + document.getElementById("contactEmail").value;
	var cNumber = "Number: " + document.getElementById("contactNumber").value;
	var cMsg = "%0a" + document.getElementById("contactMsg").value;
	
	var cMobileInfo  = "&mobiles=7730025647";
	var cAuthKeyInfo = "&authkey=197344A0viR9xB5a7c7c0a";
	var cCountryInfo = "&country=91";
	var cMessageInfo = "&message="+cName+"%0a"+cEmail+"%0a"+cNumber+"%0a"+cMsg;
	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4"+cMobileInfo+cAuthKeyInfo+cCountryInfo+cMessageInfo,
	  "method": "GET",
	  "headers": {}
	}
	
	$.ajax(settings).done(function (response) {
	 // console.log(response);
	});
	alert("Your message has been sent. Thanks.");
	
	clearForm();
}
