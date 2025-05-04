let selectELem = document.querySelector("select");

let logo = document.querySelector("img");

selectELem.addEeventListener("change", chageTheme);

function changeTheme() {
  let current = selectELem.value;

  if (current == "dark") {
    document.body.className = "dark";
    // give the body the dark class
    // add different image by change src
  } else {
    // take off class
    // change the image back to original
  }
}
