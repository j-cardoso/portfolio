
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
    
    html.setAttribute('lang', newLang);
    localStorage.setItem('language', newLang);
    
    updateTexts(newLang);
}

function updateTexts(language) {
    const elements = document.querySelectorAll('[data-pt][data-en]');
    elements.forEach(element => {
        const text = language === 'pt-BR' ? element.getAttribute('data-pt') : element.getAttribute('data-en');
        element.textContent = text;
    });
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-toggle').checked = savedTheme === 'light';
    
    const savedLanguage = localStorage.getItem('language') || 'pt-BR';
    document.documentElement.setAttribute('lang', savedLanguage);
    document.getElementById('language-toggle').checked = savedLanguage === 'en';
    updateTexts(savedLanguage);
}

document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
    
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }
    
    if (languageToggle) {
        languageToggle.addEventListener('change', toggleLanguage);
    }
}); 