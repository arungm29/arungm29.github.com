$(document).ready(function () {
    $('#chatmsg').focus();
});
var response;
var textArray1 = [
    'hehe,. thnkuu',
    'thnkuu  :))',
    'hehe.. :$ ',
    'thnkuu',
    '??',
    'haha :P',
    'thnkuu :*',
    'hehe..thnkuu <3 ;)',
    'thnkuu :*',
    'thnkuu :D',
    'thnkuU :)) <3'];

var textArray2 = [
    'heyy <3 <3',
    'hi there ;)',
    'i was waiting 4 u ;)',
    'hi :P',
    'heyyyyy!'];

var textArray3 = [
    'Ashyyyyyy <3 <3',
    'I only luv Ashy',
    'my Ashy <3',
    'hey u ;)',
    'luv uu :* <3'];

var textArray4 = [
    'haha..my momz d photogrphr.. ;) :))'
   ];

var textArray5 = [
    'Bt i luv uuu! :(',
    'bye!',
    'm going'
   ];


var txt="";
function input() {
flag+=1;        
	txt = document.getElementById("chatmsg").value;
	txt = txt.replace(/^\s+|\s+$/g,'');
        var escaped = escapeHtml(txt);
        
	document.getElementById("chatmsg").value = "";
        var new_div = document.createElement('div');
        new_div.className = 'logitem';
        new_div.innerHTML = '<p class="youmsg"><strong class="msgsource">You:</strong> <span>' + escaped + '</span></p>';


        if (document.getElementById('typing')) {
            document.getElementById("box").insertBefore(new_div, document.getElementById("typing"));
            $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
        } else {

            document.getElementById("box").innerHTML += '<div class="logitem"><p class="youmsg"><strong class="msgsource">You:</strong> <span>' + escaped + '</span></p></div>';
            $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
        }
}

function checkinput() {
	if(/hi|hey|heyy/i.test(txt)) 
	return 0;
	else if(/ashesh|ashy|rashmi|tanya|tanisha/i.test(txt))
	return 1;
	else if(/photo|photos|photographer|photograph|photographs|photographers/i.test(txt))
	return 2;
	else if(/bye|shut up|fuck you|fuck off|kill|fuck/i.test(txt))
	return 3;
	else
	return 4;
}

function typing() {
    if (!(document.getElementById('typing'))) {
        document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
        $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}
var flag=0;//typing disabled
function rashtype() {
    flag-=1;
if(response==4) {
randomNumber = Math.floor(Math.random() * textArray1.length);
    if(flag==0) {
    $('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray1[randomNumber] + '</span></p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
    else {
 	$('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray1[randomNumber] + '</span></p></div>';
document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}
else if (response==0) {
randomNumber = Math.floor(Math.random() * textArray2.length);
    if(flag==0) {
    $('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray2[randomNumber] + '</span></p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
    else {
 	$('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray2[randomNumber] + '</span></p></div>';
document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}

else if (response==1) {
randomNumber = Math.floor(Math.random() * textArray3.length);
    if(flag==0) {
    $('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray3[randomNumber] + '</span></p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
    else {
 	$('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray3[randomNumber] + '</span></p></div>';
document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}

else if(response==2) {
randomNumber = Math.floor(Math.random() * textArray4.length);
    if(flag==0) {
    $('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray4[randomNumber] + '</span></p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
    else {
 	$('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray4[randomNumber] + '</span></p></div>';
document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}

else if (response==3) {
randomNumber = Math.floor(Math.random() * textArray5.length);
    if(flag==0) {
    $('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray5[randomNumber] + '</span></p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
    else {
 	$('#typing').remove();
    document.getElementById("box").innerHTML += '<div class="logitem"><p class="strangermsg"><strong class="msgsource">Rashalika:</strong> <span>' + textArray5[randomNumber] + '</span></p></div>';
document.getElementById("box").innerHTML += '<div class="logitem" id="typing"><p class="statuslog">Rashalika is typing...</p></div>';
    $('.logbox').scrollTop($('.logbox')[0].scrollHeight);
    }
}
    
    
}
document.getElementById("sendbtn").onclick = function () {
    $('#chatmsg').focus();
    if ($("#chatmsg").val().match(/^\s*$/)) {;
    }else {
	input();


	setTimeout(typing, 1000);
	response=checkinput();
        setTimeout(rashtype, 5000);
    }
}

$('#chatmsg').keypress(function (e) {
    if (($(this).val().match(/^\s*$/) && e.keyCode == 13 && !e.shiftKey)) {
        e.preventDefault();
}
   
    else if (e.keyCode == 13 && !e.shiftKey) {
	e.preventDefault();
	input();
	document.getElementById("chatmsg").value = "";
	setTimeout(typing, 1000);
	response=checkinput();
        setTimeout(rashtype, 5000);

    }

});


var hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');


function escapeHtml(originalText) {
    var preescape = "" + originalText;
    var escaped = "";

    var i = 0;
    for (i = 0; i < preescape.length; i++) {
        var p = preescape.charAt(i);

        p = "" + escapeCharOther(p);
        p = "" + escapeTags(p);
        p = "" + escapeBR(p);

        escaped = escaped + p;
    }
    return escaped;
}

function escapeHtmlTextArea(originalText) {


    var preescape = "" + originalText;
    var escaped = "";

    var i = 0;
    for (i = 0; i < preescape.length; i++) {
        var p = preescape.charAt(i);

        p = "" + escapeCharOther(p);
        p = "" + escapeTags(p);

        escaped = escaped + p;
    }

    return escaped;
}


function escapeBR(original) {
    var thechar = original.charCodeAt(0);

    switch (thechar) {
        case 10:
            return "<br/>";
            break; //newline 
        case '\r':
            break;
    }
    return original;
}

function escapeNBSP(original) {
    var thechar = original.charCodeAt(0);
    switch (thechar) {
        case 32:
            return "&nbsp;";
            break; //space 
    }
    return original;
}


function escapeTags(original) {
    var thechar = original.charCodeAt(0);
    switch (thechar) {
        case 60:
            return "&lt;";
            break; //< 
        case 62:
            return "&gt;";
            break; //> 
        case 34:
            return "&quot;";
            break; //" 
    }
    return original;

}

function escapeCharOther(original) {
    var found = true;
    var thechar = original.charCodeAt(0);
    switch (thechar) {
        case 38:
            return "&amp;";
            break; //& 
        case 198:
            return "&AElig;";
            break; 
        case 193:
            return "&Aacute;";
            break;  
        case 194:
            return "&Acirc;";
            break; 
        case 192:
            return "&Agrave;";
            break; 
        case 197:
            return "&Aring;";
            break;  
        case 195:
            return "&Atilde;";
            break; 
        case 196:
            return "&Auml;";
            break;  
        case 199:
            return "&Ccedil;";
            break; 
        case 208:
            return "&ETH;";
            break; 
        case 201:
            return "&Eacute;";
            break; 
        case 202:
            return "&Ecirc;";
            break; 
        case 200:
            return "&Egrave;";
            break; 
        case 203:
            return "&Euml;";
            break; 
        case 205:
            return "&Iacute;";
            break; 
        case 206:
            return "&Icirc;";
            break; 
        case 204:
            return "&Igrave;";
            break; 
        case 207:
            return "&Iuml;";
            break; 
        case 209:
            return "&Ntilde;";
            break; 
        case 211:
            return "&Oacute;";
            break; 
        case 212:
            return "&Ocirc;";
            break; 
        case 210:
            return "&Ograve;";
            break; 
        case 216:
            return "&Oslash;";
            break; 
        case 213:
            return "&Otilde;";
            break; 
        case 214:
            return "&Ouml;";
            break; 
        case 222:
            return "&THORN;";
            break; 
        case 218:
            return "&Uacute;";
            break; 
        case 219:
            return "&Ucirc;";
            break; 
        case 217:
            return "&Ugrave;";
            break; 
        case 220:
            return "&Uuml;";
            break; 
        case 221:
            return "&Yacute;";
            break; //\DD 
        case 225:
            return "&aacute;";
            break; //\E1 
        case 226:
            return "&acirc;";
            break; //\E2 
        case 230:
            return "&aelig;";
            break; //\E6 
        case 224:
            return "&agrave;";
            break; //\E0 
        case 229:
            return "&aring;";
            break; //\E5 
        case 227:
            return "&atilde;";
            break; //\E3 
        case 228:
            return "&auml;";
            break; //\E4 
        case 231:
            return "&ccedil;";
            break; //\E7 
        case 233:
            return "&eacute;";
            break; //\E9 
        case 234:
            return "&ecirc;";
            break; //\EA 
        case 232:
            return "&egrave;";
            break; //\E8 
        case 240:
            return "&eth;";
            break; //\F0 
        case 235:
            return "&euml;";
            break; //\EB 
        case 237:
            return "&iacute;";
            break; //\ED 
        case 238:
            return "&icirc;";
            break; //\EE 
        case 236:
            return "&igrave;";
            break; //\EC 
        case 239:
            return "&iuml;";
            break; //\EF 
        case 241:
            return "&ntilde;";
            break; //\F1 
        case 243:
            return "&oacute;";
            break; //\F3 
        case 244:
            return "&ocirc;";
            break; //\F4 
        case 242:
            return "&ograve;";
            break; //\F2 
        case 248:
            return "&oslash;";
            break; //\F8 
        case 245:
            return "&otilde;";
            break; //\F5 
        case 246:
            return "&ouml;";
            break; //\F6 
        case 223:
            return "&szlig;";
            break; //\DF 
        case 254:
            return "&thorn;";
            break; //\FE 
        case 250:
            return "&uacute;";
            break; //\FA 
        case 251:
            return "&ucirc;";
            break; //\FB 
        case 249:
            return "&ugrave;";
            break; //\F9 
        case 252:
            return "&uuml;";
            break; //\FC 
        case 253:
            return "&yacute;";
            break; //\FD 
        case 255:
            return "&yuml;";
            break; //\FF 
        case 162:
            return "&cent;";
            break; //\A2 
        default:
            found = false;
            break;
    }
    if (!found) {
        if (thechar > 127) {
            var c = thechar;
            var a4 = c % 16;
            c = Math.floor(c / 16);
            var a3 = c % 16;
            c = Math.floor(c / 16);
            var a2 = c % 16;
            c = Math.floor(c / 16);
            var a1 = c % 16;
            return "&#x" + hex[a1] + hex[a2] + hex[a3] + hex[a4] + ";";
        } else {
            return original;
        }
    }


}
