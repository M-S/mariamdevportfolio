let _gtmInitialized = false

/**
 * Initialize gtag (Google Analytics / GA4) by injecting the gtag.js script
 * and executing the standard gtag init snippet.
 *
 * @param measurementId - GA4 measurement ID (e.g. G-XXXXXXXXXX)
 */
export function initGTM(measurementId?: string) {
  if (!measurementId) return
  if (_gtmInitialized) return
  _gtmInitialized = true

  // Inject the async gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Insert inline snippet that sets up dataLayer and gtag function and configures the ID
  const inline = document.createElement('script')
  inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}');`
  document.head.appendChild(inline)
}

export function isGTMInitialized() {
  return _gtmInitialized
}
