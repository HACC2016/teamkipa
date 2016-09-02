# Use Case: Staff: Authorize visitor

When a visitor has submitted documentation to become authorized and it has been successfully processed, an OCCC staff person logs into Kipa using their administrative password to tell the system about the newly authorized visitor.
 
The home page provides menubar with a list of actions. One is "Authorize new visitor". They select this item.

This page enables the OCCC staff member to supply credentials for a new user, including their 10 digit phone number. 

In the prototype version of the system, the provider (Verizon, ATT) must also be specified on this page so that we can employ free text messaging for demonstration purposes. In the production version, a service such as [Twilio](http://www.twilio.com) can be used. 

This page also requests the visitor's first and last name, the detainee or detainees they want to visit and any internal ID numbers required.

At the bottom, there is a button to submit.  If the form can be successfully submitted, then the page will display a text field with a default text message to be sent to the visitor indicating that they are authorized to use Kipa, the site URL, and their PIN number. The OCCC staff can review and edit this text message as desired.  
 
They can press a button at the bottom labeled "Send text" to send the contents of the text field to the visitor as a text message. 

If they do not which to send the text message, they can press a button labeled "Cancel" and no text message is sent and they are returned to the home screen.





