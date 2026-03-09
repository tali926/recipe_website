// Initialize data on first load
if (!localStorage.getItem('users')) {
    const defaultUsers = [
        { username: 'demo', email: 'demo@recipe.com', password: 'demo123' },
        { username: 'chef', email: 'chef@recipe.com', password: 'chef123' }
    ];
    localStorage.setItem('users', JSON.stringify(defaultUsers));
}

if (!localStorage.getItem('settings')) {
    const defaultSettings = {
        'demo': getDefaultSettings(),
        'chef': getDefaultSettings()
    };
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

if (!localStorage.getItem('recipes')) {
    const defaultRecipes = [
        {
            id: 1,
            name: 'Chocolate Chip Cookies',
            category: 'Dessert',
            ingredients: ['2 cups flour', '1 cup butter', '1 cup sugar', '2 eggs', '2 cups chocolate chips', '1 tsp vanilla'],
            instructions: 'Preheat oven to 350°F. Mix butter and sugar. Add eggs and vanilla. Stir in flour. Fold in chocolate chips. Drop spoonfuls on baking sheet. Bake 10-12 minutes.',
            prepTime: 30
        },
        {
            id: 2,
            name: 'Spaghetti Carbonara',
            category: 'Main Course',
            ingredients: ['400g spaghetti', '200g bacon', '4 eggs', '100g parmesan cheese', 'Black pepper', 'Salt'],
            instructions: 'Cook spaghetti. Fry bacon until crispy. Beat eggs with parmesan. Drain pasta, mix with bacon. Remove from heat, add egg mixture quickly while stirring. Season with pepper.',
            prepTime: 25
        },
        {
            id: 3,
            name: 'Caesar Salad',
            category: 'Salad',
            ingredients: ['1 romaine lettuce', '1 cup croutons', '1/2 cup parmesan', '1/4 cup Caesar dressing', '2 chicken breasts'],
            instructions: 'Grill chicken and slice. Chop lettuce. Toss lettuce with dressing. Add croutons, parmesan, and chicken on top.',
            prepTime: 20
        },
        {
            id: 4,
            name: 'Banana Smoothie',
            category: 'Beverage',
            ingredients: ['2 bananas', '1 cup milk', '1/2 cup yogurt', '1 tbsp honey', 'Ice cubes'],
            instructions: 'Add all ingredients to blender. Blend until smooth. Pour into glasses and serve immediately.',
            prepTime: 5
        },
        {
            id: 5,
            name: 'Grilled Cheese Sandwich',
            category: 'Snack',
            ingredients: ['2 slices bread', '2 slices cheese', '2 tbsp butter'],
            instructions: 'Butter one side of each bread slice. Place cheese between bread with buttered sides out. Grill in pan over medium heat until golden brown on both sides.',
            prepTime: 10
        }
    ];
    localStorage.setItem('recipes', JSON.stringify(defaultRecipes));
}

function getDefaultSettings() {
    return {
        theme: 'light',
        fontSize: 'medium',
        voice: '0',
        speechRate: '1',
        autoRead: 'false'
    };
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function getSettings() {
    return JSON.parse(localStorage.getItem('settings') || '{}');
}

function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
}

function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

function getUserSettings(username) {
    const settings = getSettings();
    return settings[username] || getDefaultSettings();
}

function checkAuth() {
    if (!getCurrentUser()) {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function speak(text, settings, onEnd) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[parseInt(settings.voice)] || voices[0];
    utterance.rate = parseFloat(settings.speechRate);
    if (onEnd) utterance.onend = onEnd;
    speechSynthesis.speak(utterance);
}
