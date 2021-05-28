import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name === null ? "Nombre" : variables.name} ${
    variables.lastname === null ? "Apellido" : variables.lastname
  }</h1>
          <h2>${variables.role === null ? "Rol" : variables.role}</h2>
          <h3>${variables.city === null ? "Ciudad" : variables.city}, ${
    variables.country === null ? "Pais" : variables.country
  }</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/" onclick="location.href=this.href+'?key='+variables.twitter;return false;"><i class="fa fa-twitter"></i>${
              variables.twitter === null ? "" : variables.twitter
            }</a></li>
            <li><a href="https://github.com/" onclick="location.href=this.href+'?key='+variables.github;return false;"><i class="fa fa-github"></i>${
              variables.github === "alesanchezr" ? "" : variables.github
            }</a></li>
            <li><a href="https://linkedin.com/" onclick="location.href=this.href+'?key='+variables.linkedin;return false;"><i class="fa fa-linkedin"></i>${
              variables.linkedin === null ? "" : variables.linkedin
            }</a></li>
            <li><a href="https://instagram.com/" onclick="location.href=this.href+'?key='+variables.instagram;return false;"><i class="fa fa-instagram"></i>${
              variables.instagram === null ? "" : variables.instagram
            }</a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: false,
    // this is the url of the image that will used as background for the profile cover
    background:
      "data:image/jpeg;base64,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",
    // this is the url for the profile avatar
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewpfC1RF8aNEivD_0ddpe7Ti3SrIc2d8_6Q&usqp=CAU",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
