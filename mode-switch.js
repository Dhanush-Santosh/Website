document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleModeButton = document.querySelector('.toggle-mode-button');
    const loginSection = document.getElementById('a-container');
    const signupSection = document.getElementById('b-container');

    function toggleSections(isDarkMode) {
        loginSection.style.display = isDarkMode ? 'none' : 'block';
        signupSection.style.display = isDarkMode ? 'block' : 'none';
    }

    function applyThemeToOtherPage(isDarkMode) {
        // Assuming register.html is in the same directory
        const otherPage = 'register.html';

        // Get the theme parameter for the URL
        const themeParam = isDarkMode ? 'dark' : 'light';

        // Apply the theme to the other page without redirecting
        const otherPageBody = document.getElementById('register-body');
        if (otherPageBody) {
            otherPageBody.classList.toggle('dark-mode', isDarkMode);
            otherPageBody.classList.toggle('light-mode', !isDarkMode);
        }
    }

    toggleModeButton.addEventListener('click', function () {
        const isDarkMode = body.classList.contains('dark-mode');

        // Toggle the theme
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the current theme preference to localStorage
        localStorage.setItem('darkMode', !isDarkMode);

        // Apply the theme to the other page
        applyThemeToOtherPage(!isDarkMode);

        toggleSections(!isDarkMode);
    });

    // Check localStorage for the user's preferred theme
    const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';

    body.classList.toggle('dark-mode', isDarkModeSaved);
    body.classList.toggle('light-mode', !isDarkModeSaved);

    toggleSections(isDarkModeSaved);
});
