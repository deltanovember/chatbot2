var currentResponse = ""; 	

var decisionTree = {
	"": "What Internal Business Services do you require assistance with? (eg Premises, Mail, Print) ",
	"2": "Were you after the Print Room?",
	"20": "What",
	"21": "Do you want to submit a Print room request form?",
	"211": "Please follow the " + '<a href="http://quad.int.minterellison.com/ws#web/corporate-services/docprod">Link</a>' + " to fill in a request then email to:" + '<a href="mailto:Services.MELCopy@minterellison.com">Services MEL Copy</a>',	
	"210": "Please contact you local print room for assistance " + '<a href="http://quad.int.minterellison.com/c/document_library/get_file?p_l_id=10070855&folderId=10070882&name=DLFE-1900029.dotm">Link</a>',
	"3": "Were you after mail and courier services?",
	"31": "Create a courier request form?",	
	"30": "What",
	"310": "At this time, I'm unable to assist. Please check back soon for further updates.",
	"311": "Go to <a href='http://www.minterellison.com'>courier form</a>",
	"4": "Were you after Premises?",
	"40": "What",
}



function robotResponse(userInput)
{
var Print = ["print room", "print", "copy", "scanning", "scan", "binding"];
var Mail = ["mail", "courier", "stationery"]
var Premises = ["premises", "archiving", "av", "lighting"];

 for (var Pr of Premises) {
	if (userInput.toLowerCase().indexOf(Pr) !== -1) {
	currentResponse += "4";
	return decisionTree[currentResponse]
	}
	} 
 

for (var P of Print) {
	if (userInput.toLowerCase().indexOf(P) !== -1) {
	currentResponse += "2";
	return decisionTree[currentResponse]
	}
	}

 for (var M of Mail) {
	if (userInput.toLowerCase().indexOf(M) !== -1) {
	currentResponse += "3";
	return decisionTree[currentResponse]
	} 
 	}

	if (userInput.toLowerCase() == 'no') {
	currentResponse += "0";

 	} else if (userInput.toLowerCase() == 'yes') {
 		
	currentResponse += "1"
 	
 	} else {
 	
	return "You answer is not recognised, please try again. </P>" + decisionTree[currentResponse];

 	}
 	 
	var answer = decisionTree[currentResponse];
 
	if (answer.indexOf("Please") != -1) {
 			$("#btn-input").prop('disabled', true);
 		$("#btn-chat").prop('disabled', true);
	
	} else if (answer.indexOf("What") != -1) {
		currentResponse = ""
		return decisionTree[currentResponse]
	}

	

  	return answer;

}


	



