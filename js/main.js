function ready() {
  const allCookie = document.cookie;
  const cookieAccept = allCookie.indexOf("cookieAccept=true") > -1;

  if (!cookieAccept) {
    document.getElementById("cookie").className = "cookie show";
  }
}

document.addEventListener("DOMContentLoaded", ready);

function cookieAccept() {
  document.cookie = "cookieAccept=true;";
  document.getElementById("cookie").className = "cookie";
}
