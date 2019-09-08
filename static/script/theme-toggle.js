"use strict";


let darkBodyColor = "#333",
    darkTextColor = "#ddd",
    lightBodyColor = "beige",
    lightTextColor = "slategray";


// Create toggle button and add to page automatically.
(function() {

    let form = document.createElement('form');
    form.id = "themeToggleButton";

    // Two <input> eleemnts of type `radio`.
    for (let c=0; c<2; ++c) {
        let radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "themeToggle";
        form.appendChild(radio);
    }

    form.children[0].value = "light";
    form.children[1].value = "dark";

    // Light theme is selected by default.
    form.children[0].checked = true;

    document.body.appendChild(form);

})();


let toggleButton = document.getElementById('themeToggleButton');


// If page changed, apply previous page's theme to current page.
// Otherwise, select light theme by default.
if (sessionStorage.theme!==undefined) {
    toggleTheme(sessionStorage.theme);
} else {
    getToggleButton(1).checked = true;
}


// Toggle theme when user selection changes (in toggle button).
toggleButton.onchange = function() {
    let targetTheme = getToggleButton(1).checked 
        ? getToggleButton(1).value
        : getToggleButton(2).value;
    toggleTheme(targetTheme);
}


// Get one of the two radio buttons based on argument.
function getToggleButton(buttonNum) {
    let arg = "input[type='radio'][name='themeToggle']";
    return toggleButton.querySelectorAll(arg)[buttonNum-1];
}


// Apply theme based to user selection, and store theme name to apply after
// page change.
function toggleTheme(targetTheme) {
    
    let theme, bodyColor, textColor;

    // Set theme colors and show as selected.
    if (targetTheme=="dark") {
        bodyColor = darkBodyColor;
        textColor = darkTextColor;
        theme = "dark";
        getToggleButton(2).checked = true;
    } else {
        bodyColor = lightBodyColor;
        textColor = lightTextColor;
        theme = "light";
        getToggleButton(1).checked = true;
    }

    // Change colors.
    document.body.style.backgroundColor = bodyColor;
    document.body.style.Color = textColor;

    // Store theme name, so theme will be retained even after page change.
    sessionStorage.setItem('theme', theme);

}
