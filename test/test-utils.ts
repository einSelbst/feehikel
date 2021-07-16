import { render } from '@testing-library/preact'
/*
 * import { ThemeProvider } from "my-ui-lib"
 * import { TranslationProvider } from "my-i18n-lib"
 * import defaultStrings from "i18n/en-x-default"
 */

const Providers = ({ children }) => children
/*
 * return (
 *   <ThemeProvider theme="light">
 *     <TranslationProvider messages={defaultStrings}>
 *       {children}
 *     </TranslationProvider>
 *   </ThemeProvider>
 * )
 */

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/preact'

// override render method
// eslint-disable-next-line import/export
export { customRender as render }
