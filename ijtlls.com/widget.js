(function () {

var options = {

whatsapp: "+91 8526769556", // WhatsApp number

sms: "+91 8526769556", // Sms phone number

call_to_action: "Message us", // Call to action

button_color: "#A8CE50", // Color of button

position: "right", // Position may be 'right' or 'left'

order: "whatsapp,sms", // Order of buttons

};

var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;

var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';

s.onload = function () { WhWidgetSendButton.init(host, proto, options); };

var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);

})();
;
