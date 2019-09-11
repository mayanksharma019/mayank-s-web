function desg() {
  var a;
  a = document.getElementById("designation");
  setTimeout(function () {
      a.innerHTML = "front end Web Developer.";
    }, 0);
  setTimeout(function () {
    a.innerHTML = "Programmer.";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "Machine learning enthusiast.";
        }, 1500);
        setTimeout(function () {
            a.innerHTML = "open for internships.";
            }, 2000);
}

desg();
setInterval(desg, 3000);