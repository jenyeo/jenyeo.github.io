function calculateRate() {
    var nameInputBox = document.getElementById("fullName1");
    var emailInputBox = document.getElementById("emailinput");
    var quantityInputBox = document.getElementById("InputQuantity1");
    var spanResultElement = document.getElementById("resultElement");
    var addresss1InputBox = document.getElementById("inputAddress");
    var cityInputBox = document.getElementById("inputCity");
    var statelist = document.getElementById("inputState");
    var selectedStateIndex = statelist.selectedIndex;
    var zipInputBox = document.getElementById("inputZip");


    var fullName = nameInputBox.value;
    var emailaddress = emailInputBox.value;
    var quantity = quantityInputBox.value;
    var address1 = addresss1InputBox.value;
    var city = cityInputBox.value;
    var state = statelist.value;
    var zipcode = zipInputBox.value;


    //get selected product from dropdown
    var productlist = document.getElementById("ProductSelect");
    var selectedProductIndex = productlist.selectedIndex;
    var selectedProductPrice = productlist.options[selectedProductIndex].id;

    //if extras for print sizes are selected
    var printSmallcheckbox = document.getElementById("checkboxPrintsm");
    var printMediumcheckbox = document.getElementById("checkboxPrintmed");
    var printLargecheckbox = document.getElementById("checkboxPrintlarge")
    var hasprintSmall = printSmallcheckbox.checked;
    var hasprintMed = printMediumcheckbox.checked;
    var hasprintLarge = printLargecheckbox.checked;


    var samedaydeliverycheckbox = document.getElementById("sameday-delivery");
    var fivedaydeliverycheckbox = document.getElementById("5day-delivery");
    var tendaydeliverycheckbox = document.getElementById("10day-delivery");
    var hasSameDay = samedaydeliverycheckbox.checked;
    var hasFiveDay = fivedaydeliverycheckbox.checked;
    var hasTenDay = tendaydeliverycheckbox.checked;


    //if everything is valid:
    var validInputs = true;


    //extras if statements
    if (hasprintSmall == true) {
        totalcost = totalcost + (quantity) * 10;
    } else {
        spanResultElement.innerHTML = "";
    }

    if (hasprintMed == true) {
        totalcost = totalcost + (quantity) * 25;
    } else {
        spanResultElement.innerHTML = "";
    }

    if (hasprintLarge == true) {
        totalcost = totalcost + (quantity) * 30;
    } else {
        spanResultElement.innerHTML = "";
    }


    //zip if statements
    if (zipcode == "") {
        ziperror.innerHTML = "Zip code cannot be empty.";
        document.getElementById("inputZip").focus();
        validInputs = false;
    } else {
        ziperror.innerHTML = "";
    }

    //state if statements
    if (selectedStateIndex == "") {
        stateerror.innerHTML = "Please select a state.";
        document.getElementById("inputState").focus();
        validInputs = false;
    } else {
        stateerror.innerHTML = "";
    }

    //city if statements
    if (city == "") {
        cityerror.innerHTML = "City cannot be empty.";
        document.getElementById("inputCity").focus();
        validInputs = false;
    } else {
        cityerror.innerHTML = "";
    }

    //address if statements
    if (address1 == "") {
        addresserror.innerHTML = "Address cannot be empty.";
        document.getElementById("inputAddress").focus();
        validInputs = false;
    } else {
        addresserror.innerHTML = "";
    }

    //ensure user input quantity is a number between 1 and 10
    if (quantity == "" || isNaN(quantity) || (quantity <= 0) || (quantity > 10)) {
        quantityerror.innerHTML = "Please enter a valid quantity between 1 and 10";
        document.getElementById("InputQuantity1").focus();
        validInputs = false;
    } else {
        quantityerror.innerHTML = "";

        //calculate discount
        var totalcost = quantity * selectedProductPrice;
        var discount = 0;

        if (quantity > 4 && quantity <= 7) { //this is a 10% discount
            discount = totalcost * 0.1;
        } else if (quantity > 7) {
            discount = totalcost * 0.15; //this is a 15% discount
        }
        totalcost = totalcost - discount;

    }


    //email if statements
    if (emailaddress == "") {
        emailNull.innerHTML = "Email Address cannot be empty.";
        document.getElementById("emailinput").focus();
        validInputs = false;
    } else {
        emailNull.innerHTML = "";
    }


    //full name if statements
    if (fullName == "") {
        fullNameNull.innerHTML = "Full Name cannot be empty.";
        document.getElementById("fullName1").focus();
        validInputs = false;
    } else {
        fullNameNull.innerHTML = "";
    }

    //delivery if statements
    if (hasSameDay == true) {
        totalcost = totalcost + 10;
    } else {
        spanResultElement.innerHTML = "";
    }

    if (hasFiveDay == true) {
        totalcost = totalcost + 5;
    } else {
        spanResultElement.innerHTML = "";
    }

    if (hasTenDay == true) {
        totalcost = totalcost + 0;
    } else {
        spanResultElement.innerHTML = "";
    }

    //final print
    if (validInputs == true) {
        spanResultElement.innerHTML = "The total cost for " + quantity + " item(s) is $" + totalcost.toFixed(2);
    } else {
        spanResultElement.innerHTML = "";
    }

}


function sendMessage() {
    var captchaOk = captcha();
    if (captchaOk == false) {
        return;
    }
    var contactfullnameInputBox = document.getElementById("fullName2");
    var contactemailInputBox = document.getElementById("contactemail");
    var contactsubjectInputBox = document.getElementById("subject");
    var contactmessageInputBox = document.getElementById("message");
    var spanResultElement2 = document.getElementById("resultElement2");


    var contactfullName = contactfullnameInputBox.value;
    var contactemailaddress = contactemailInputBox.value;
    var contactsubjectaddress = contactsubjectInputBox.value;
    var contactmessageaddress = contactmessageInputBox.value;

    //if everything is valid:
    var contactvalidInputs = true;

    //message if statements
    if (contactmessageaddress == "") {
        contactmessageNull.innerHTML = "Message cannot be empty.";
        document.getElementById("message").focus();
        contactvalidInputs = false;
    } else {
        contactmessageNull.innerHTML = "";
    }

    //subject if statements
    if (contactsubjectaddress == "") {
        contactsubjectNull.innerHTML = "Subject cannot be empty.";
        document.getElementById("subject").focus();
        contactvalidInputs = false;
    } else {
        contactsubjectNull.innerHTML = "";
    }

    //email if statements
    if (contactemailaddress == "") {
        contactemailNull.innerHTML = "Email Address cannot be empty.";
        document.getElementById("contactemail").focus();
        contactvalidInputs = false;
    } else {
        contactemailNull.innerHTML = "";
    }

    //full name if statements
    if (contactfullName == "") {
        contactfullNameNull.innerHTML = "Full Name cannot be empty.";
        document.getElementById("fullName2").focus();
        contactvalidInputs = false;
    } else {
        contactfullNameNull.innerHTML = "";
    }


    if (contactvalidInputs == true) {
        spanResultElement2.innerHTML = "Thanks! Your message was received!";
    } else {
        spanResultElement2.innerHTML = "";

    }
}

//functions for the rollover
function onHover() {
    document.getElementById("japanimgswap").src = "media/japan3.png";
}

function offHover() {
    document.getElementById("japanimgswap").src = "media/japan1.jpg";
}

//functions for the hover
var rocktext = 'AKA the Golden Rock';

function onhover(imgnumber) {
    if (imgnumber == 1) {
        document.getElementById("imgText").innerHTML = rocktext;
    } else if (imgnumber == 3) {
        document.getElementById("imgText").innerHTML = "Kyaiktiyo Pagoda in Myanmar";
    }
}


function duplicate() {
    var elmnt = document.getElementById("testblog");
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
}

function duplicate() {
    var elmnt = document.getElementById("userblog");
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
}

function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh

    var elmnt = document.getElementById("userblog");
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);

}

function blogpostformcheck() {

    var blogTitleInputBox = document.getElementByName("title");
    var blogSubtitleInputBox = document.getElementByName("subtitle");
    var blogDescriptionInputBox = document.getElementByName("description");
    var blogUsernameInputBox = document.getElementByName("USERNAME");

    var blogtitle = blogTitleInputBox.value;
    var blogsubtitle = blogSubtitleInputBox.value;
    var blogdescription = blogDescriptionInputBox.value;
    var blogusername = blogUsernameInputBox.value;

    //if everything is valid:
    var blogvalidInputs = true;

    //title if statements
    if (blogtitle == "") {
        blogTitleNull.innerHTML = "Full Name cannot be empty.";
        blogvalidInputs = false;
    } else {
        blogTitleNull.innerHTML = "";
    }


    //description if statements
    if (blogdescription == "") {
        blogdescriptionNull.innerHTML = "Email Address cannot be empty.";
        blogvalidInputs = false;
    } else {
        blogdescriptionNull.innerHTML = "";
    }

    //username if statements
    if (blogusername == "") {
        blogusernameNull.innerHTML = "Email Address cannot be empty.";
        blogvalidInputs = false;
    } else {
        blogusernameNull.innerHTML = "";
    }

}


function captcha() {
    var usercaptchaInput = document.getElementById("usercaptchaInput").value;
    var num1 = parseInt(document.getElementById("num1").innerHTML);
    var num2 = parseInt(document.getElementById("num2").innerHTML);
    var resultElement2 = document.getElementById("resultElement2");
    var sum = num1 + num2;
    var intResult = parseInt(usercaptchaInput);
    if (usercaptchaInput == "") {
        resultElement2.innerHTML = "Please add the numbers.";
        return false;

    } else if (intResult != sum) {
        resultElement2.innerHTML = "Incorrect. Please try again.";
        return false;

    } else {
        // all good now! //
        resultElement2.innerHTML = "Correct, it is now safe to submit the form";
        document.getElementById("usercaptchaInput").value = "";
        return true;
    }
}

function randomNumberGenerator() {
    var rand_num1 = Math.ceil(Math.random() * 5) + 1;
    var rand_num2 = Math.ceil(Math.random() * 5) + 1;
    document.getElementById("num1").innerHTML = rand_num1;
    document.getElementById("num2").innerHTML = rand_num2;
}
