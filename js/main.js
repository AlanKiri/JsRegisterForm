function validateForm() {
  let username = document.forms["Registration"]["Username"];
  let sex = document.forms["Registration"]["Sex"];

  // checking name length
  if (username.value.length < 2 || username.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    username.focus();
    return false;
  }

  if (sex.value == "") {
    alert("Please select your sex");
    sex.focus();
    return false;
  }

  return true;
}
