//remember to set this script to the project you want to use.
function getFBToken(PROJECT_ID,API_WEBKEY) {
    var token = ScriptApp.getOAuthToken();


    var url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key="+API_WEBKEY
    var data = {
        "postBody": "access_token=" + token + "&providerId=google.com",
        "requestUri": "https://"+PROJECT_ID+".firebaseapp.com",
        "returnIdpCredential": true,
        "returnSecureToken": true
    };
    var options = {
        method: "POST",
        payload: JSON.stringify(data),
        muteHttpExceptions: true,
        contentType: 'application/json'
    }

    var data = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
    var token = data.idToken;

    return data.idToken;
}
