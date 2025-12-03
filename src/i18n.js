// src/i18n.js
import { createI18n } from 'vue-i18n'

function setNested(obj, path, value) {
  const keys = path.split('/')
  let current = obj
  keys.forEach((k, i) => {
    if (i === keys.length - 1) {
      current[k] = value
    } else {
      current[k] = current[k] || {}
      current = current[k]
    }
  })
}

function loadLocaleMessages() {
  const modules = import.meta.glob('./locales/**/*.json', { eager: true })
  const messages = {}

  for (const path in modules) {
    const matched = path.match(/\.\/locales\/([^\/]+)\/(.+)\.json$/)
    if (!matched) continue
    const locale = matched[1]         // ex: 'pt', 'en', 'es'
    const namespace = matched[2]      // ex: 'home/hero' ou 'about'
    const content = modules[path].default ?? modules[path]

    messages[locale] = messages[locale] || {}
    setNested(messages[locale], namespace, content)
  }

  return messages
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
