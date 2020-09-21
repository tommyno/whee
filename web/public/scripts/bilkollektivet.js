/* eslint-disable func-names */
/* eslint-disable consistent-return */

// Helper script to enable Bilkollektivets customers to see our site first
(function () {
  // Do nothing if already on waiting page
  if (window.location.pathname === "/straksklar") {
    return null;
  }

  // Get cookies
  const cookies = document.cookie;

  // Allow entrance if cookie is already set
  if (cookies.includes("hasAccess=true")) {
    return null;
  }

  // Set cookie if page params
  const urlParams = new URLSearchParams(window.location.search);
  const kode = urlParams.get("kode");
  if (kode === "bk") {
    document.cookie = "hasAccess=true ; max-age=86400;"; // Set duration to 24 h
  } else {
    // If no cookie or code - send user to waiting page
    window.location.replace("/straksklar");
  }
})();
