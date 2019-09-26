# gas_firebase_token_exchange
Get a Firebase idToken with your Apps Script authentication token
This means  you can  do calls to firebase using Google as an auth provicer. Usefull for firebase rest calls, cloudfunctions, etc.

## Attention
Set your apps script project to the same project as your firebase project, else the audience claim will fail.
