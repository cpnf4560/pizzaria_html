// Sistema de Tradução - UFCD 10790
// Suporte para Português e Inglês

const translations = {
    pt: {
        // Página Inicial
        initial_title: "Sistema de Login - UFCD 10790",
        welcome_message: "Bem-vindo ao sistema da Pizzaria do Carlos!",
        registered_user: "🔑 Utilizador Registado",
        register: "📝 Registar",
        demo: "🍕 Demo (Sem Login)",
        
        // Login
        login_title: "Iniciar Sessão",
        username: "Username",
        password: "Password",
        login_btn: "🔑 Entrar",
        back: "← Voltar",
        test_credentials: "Credenciais de teste:",
        
        // Registo
        register_title: "Registar Novo Utilizador",
        full_name: "Nome Completo",
        register_btn: "📝 Registar",
        
        // Boas-vindas
        welcome_title: "🎉 Bem-vindo!",
        login_success: "Login realizado com sucesso!",
        go_to_pizzeria: "🍕 Ir para a Pizzaria",
        logout: "🚪 Sair",
        
        // Saída
        exit_title: "Sair da Aplicação",
        exit_question: "Deseja mesmo sair?",
        yes: "✅ Sim",
        no: "❌ Não",
        
        // Mensagens
        login_error: "Credenciais inválidas. Tente novamente.",
        register_success: "Utilizador registado com sucesso!",
        register_error: "Erro ao registar utilizador.",
        username_exists: "Username já existe. Escolha outro.",
        server_error: "Erro de conexão com o servidor.",
        required_fields: "Todos os campos são obrigatórios.",
        username_short: "Username deve ter pelo menos 3 caracteres.",
        password_short: "Password deve ter pelo menos 6 caracteres."
    },
    
    en: {
        // Initial Page
        initial_title: "Login System - UFCD 10790",
        welcome_message: "Welcome to Carlos' Pizzeria system!",
        registered_user: "🔑 Registered User",
        register: "📝 Register",
        demo: "🍕 Demo (No Login)",
        
        // Login
        login_title: "Sign In",
        username: "Username",
        password: "Password",
        login_btn: "🔑 Login",
        back: "← Back",
        test_credentials: "Test credentials:",
        
        // Register
        register_title: "Register New User",
        full_name: "Full Name",
        register_btn: "📝 Register",
        
        // Welcome
        welcome_title: "🎉 Welcome!",
        login_success: "Login successful!",
        go_to_pizzeria: "🍕 Go to Pizzeria",
        logout: "🚪 Logout",
        
        // Exit
        exit_title: "Exit Application",
        exit_question: "Do you really want to exit?",
        yes: "✅ Yes",
        no: "❌ No",
        
        // Messages
        login_error: "Invalid credentials. Please try again.",
        register_success: "User registered successfully!",
        register_error: "Error registering user.",
        username_exists: "Username already exists. Choose another.",
        server_error: "Server connection error.",
        required_fields: "All fields are required.",
        username_short: "Username must be at least 3 characters.",
        password_short: "Password must be at least 6 characters."
    }
};

let currentLanguage = 'pt';

// Função para trocar idioma
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    updateTexts();
    updateLanguageButton();
}

// Atualizar textos na página
function updateTexts() {
    const elementsWithText = document.querySelectorAll('[data-text]');
    
    elementsWithText.forEach(element => {
        const textKey = element.getAttribute('data-text');
        if (translations[currentLanguage][textKey]) {
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'password')) {
                // Para inputs, atualizar placeholder
                const placeholderMap = {
                    pt: {
                        username: "Digite o seu username",
                        password: "Digite a sua password",
                        'reg-username': "Escolha um username (min. 3 caracteres)",
                        'reg-password': "Escolha uma password (min. 6 caracteres)",
                        'reg-name': "Digite o seu nome completo"
                    },
                    en: {
                        username: "Enter your username",
                        password: "Enter your password",
                        'reg-username': "Choose a username (min. 3 characters)",
                        'reg-password': "Choose a password (min. 6 characters)",
                        'reg-name': "Enter your full name"
                    }
                };
                
                if (placeholderMap[currentLanguage][element.id]) {
                    element.placeholder = placeholderMap[currentLanguage][element.id];
                }
            } else {
                element.textContent = translations[currentLanguage][textKey];
            }
        }
    });
}

// Atualizar botão de idioma
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    if (currentLanguage === 'pt') {
        langBtn.textContent = '🇬🇧 EN';
    } else {
        langBtn.textContent = '🇵🇹 PT';
    }
}

// Obter texto traduzido
function getText(key) {
    return translations[currentLanguage][key] || key;
}

// Inicializar sistema de tradução
document.addEventListener('DOMContentLoaded', function() {
    updateTexts();
    updateLanguageButton();
});
