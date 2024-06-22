/* Set a cookie a with name, value and expiration time of 7 days */
let date = new Date();
date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
let expiration = "expires=" + date.toUTCString();
document.cookie = `username=JohnDoe ${expiration} path=/`;

//Delete A Cookie
document.cookie = `username=; expires=Thu, 01 Jan, 1970 00:00:00 UTC; path=/;`;