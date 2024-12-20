// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// This function will apply the preference changes that the user has
function applyPreferences() {
    // This line checks to see if the preferences are being saved to the local storage
    let savedName = localStorage.getItem('name');
    let savedBackgroundColor = localStorage.getItem('background-color');
    let savedForegroundColor = localStorage.getItem('foreground-color');
  
    // This will display whatever name the user puts following "Hello,"
    if (savedName) {
      document.getElementById('greeting').textContent = `Hello, ${savedName}!`;
    }
  
    // This will display what background color the user set
    if (savedBackgroundColor) {
      document.body.style.backgroundColor = savedBackgroundColor;
    }

    // This will display what text color the user set
    if (savedForegroundColor) {
      document.body.style.color = savedForegroundColor;
    }
  }
  
  // This event listener is checking to see when the submit button is pressed
  document.getElementById('preferences-form').addEventListener('submit', function (event) {
    // This prevents the submission form to be the default
    event.preventDefault();
  
    // This line lets the user add their name and customize the page's colors
    let name = document.getElementById('name').value;
    let backgroundColor = document.getElementById('background-color').value;
    let foregroundColor = document.getElementById('foreground-color').value;
  
    // This saves the preferences in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('background-color', backgroundColor);
    localStorage.setItem('foreground-color', foregroundColor);
  
    // This calls to the function to apply the preferences whenever the page is closed and reopened
    applyPreferences();
  
    // This alert will go off once you press submit, letting the user know that the preferences have been saved
    alert('Preferences saved successfully!');
  });
  

  
