import { createI18n } from 'vue-i18n';
import en from './lang/en';
import zh from './lang/zh';

export let i18n;

export function useI18n() {
  const { t } = i18n.global;
  return t;
}

export function setupI18n(app) {
  const locale = localStorage.getItem('language') || 'en';
  const config = {
    legacy: false,
    globalInjection: true,
    locale,
    fallbackLocale: 'zh',
    availableLocales: ['en', 'zh'],
    messages: {
      zh,
      en,
    },
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
  i18n = createI18n(config);
  app.use(i18n);
}

export async function changeLocale(locale) {
  const { global, mode } = i18n;
  const message = (await import(`./lang/${locale}/index.json`)).default;

  global.setLocaleMessage(locale, message);

  if (mode === 'legacy') {
    global.locale = locale;
  } else {
    global.locale.value = locale;
  }

  localStorage.setItem('language', locale);
}
