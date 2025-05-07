// Main translations handler
let translations = {};

// Function to load translations
function loadTranslations(lang) {
    // Set default translations to empty object
    translations = {};
    
    // Assign the appropriate translations based on language
    if (lang === 'pl') {
        translations = plTranslations;
    } else if (lang === 'en') {
        translations = enTranslations;
    }
    
    return translations;
}