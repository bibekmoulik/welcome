function validateMessage()
{
	if(document.getElementById("contactName").value == "") 
	{
		alert("Please enter your name");
		return false;
	}
	if(document.getElementById("contactEmail").value == "") 
	{
		alert("Please enter your Email ID");
		return false;
	}
	if(document.getElementById("contactNumber").value == "") 
	{
		alert("Please enter your contact number");
		return false;
	}
	if(document.getElementById("contactMsg").value == "") 
	{
		alert("Please enter your message");
		return false;
	}
	
	return true;
}

function sendMessage()
{
	if (validateMessage())
	{
		try
		{
			sendSMS();
			//sendMail();
			alert("Thanks you contacting me.\nYour message has been sent.");
		}
		catch(err)
		{
			alert("Not able to send message now. Please try again.\nSorry for the invonvenience.");
		}
		clearForm();
	}
}

function clearForm()
{
	//document.getElementById("contactName").value = "";
	//document.getElementById("contactEmail").value = "";
	//document.getElementById("contactNumber").value = "";
	document.getElementById("contactMsg").value = "";
	document.getElementById("contactMsg").placeholder = "Write your message here..";
}

function sendMail()
{
	var cName = "Name: " + document.getElementById("contactName").value;
	var cEmail = "Email ID: " + document.getElementById("contactEmail").value;
	var cNumber = "Number: " + document.getElementById("contactNumber").value;
	var cMsg = "\n" + document.getElementById("contactMsg").value;
	
	var settings = {
			"async": true,
			"crossDomain": true,
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: 
			{
			 	"key": "JPm4BtCdhDmopGfzlaY_dg",
			 	"message": 
				{
					"text": cName+"\n"+cEmail+"\n"+cNumber+"\n"+cMsg,
					"subject": "Message from website",
					"from_email": "bibekmoulik@gmail.com",
					"from_name": "Bibek Name",
					"to":
					    [{
						"email": "bibekmoulik@gmail.com",
						"name": "Bibek Moulik",
						"type": "to"
					    }]
				 }
			}
	}
	
	$.ajax(settings).done(function(response) {
		console.log(response); // if you're into that sorta thing
	});
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
	var cMessageInfo = "&message="+cName+"%0a"+cEmail+"%0a"+cNumber+"%0a"+cMsg.replace(/\n/g,"%0a");
	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://api.msg91.com/api/sendhttp.php?sender=MSGIND&route=4"+cMobileInfo+cAuthKeyInfo+cCountryInfo+cMessageInfo,
	  "method": "GET",
	  "headers": {}
	}
	
	$.ajax(settings).done(function (response) {
	 // console.log(response); 
	});
}
