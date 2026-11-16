function changeTheme(theme) {

    document.body.setAttribute("data-theme", theme);

    document.body.classList.remove("light", "dark", "blue");

    document.body.classList.add(theme);

    document.getElementById("currentTheme").textContent =
        "Current Theme: " + theme;
}

changeTheme("light");