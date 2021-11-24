function showPKArea() {
  console.log('showpk')
  var text_area = document.getElementById("user-pk-area");
  console.log(text_area.style.display)
  if (text_area.style.display === "none") {
    text_area.style.display = "block";
  } else {
    text_area.style.display = "none";
  }
}