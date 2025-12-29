class I18n {
    constructor() {
        this.lang = localStorage.getItem('sdc_lang') || 'en';
        this.data = window.translations || {};
        this.init();
    }

    init() {
        this.renderLanguageSelector();
        this.updateTexts();
    }

    setLanguage(lang) {
        this.lang = lang;
        localStorage.setItem('sdc_lang', lang);
        this.updateTexts();
        this.updateActiveButton();
    }

    updateTexts() {
        const t = this.data[this.lang];
        if (!t) return;

        // Generic data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = this.getNested(t, key);
            if (val) {
                if (el.tagName === 'INPUT' && el.type === 'placeholder') el.placeholder = val;
                else el.innerHTML = val;
            }
        });

        // Specific concept title/desc handling if stored in data attributes
        // (This might be needed if we don't have specific keys for everything)
    }

    getNested(obj, path) {
        return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
    }

    renderLanguageSelector() {
        const container = document.createElement('div');
        container.className = 'lang-selector';
        container.innerHTML = `
            <button onclick="window.i18n.setLanguage('en')" class="${this.lang === 'en' ? 'active' : ''}">EN</button>
            <button onclick="window.i18n.setLanguage('es')" class="${this.lang === 'es' ? 'active' : ''}">ES</button>
            <button onclick="window.i18n.setLanguage('fr')" class="${this.lang === 'fr' ? 'active' : ''}">FR</button>
            <button onclick="window.i18n.setLanguage('pt')" class="${this.lang === 'pt' ? 'active' : ''}">PT</button>
        `;
        document.body.appendChild(container);
    }

    updateActiveButton() {
        document.querySelectorAll('.lang-selector button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText.toLowerCase() === this.lang) btn.classList.add('active');
        });
    }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
