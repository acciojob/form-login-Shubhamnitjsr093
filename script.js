function getFormvalue() {
  // Prevent form from submitting and refreshing the page
  event.preventDefault();

  // Access the form using its ID
  const form = document.getElementById("form1");

  // Get the trimmed values of fname and lname
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();

  // Display the full name in an alert
  alert(fname + " " + lname);
}
