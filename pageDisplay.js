function decryptContact(code, contact = "mailto:") {
    var address = atob(code);
    window.location.href = contact + address;
}