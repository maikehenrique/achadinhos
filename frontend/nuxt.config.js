export default {
  env: {
    apiKey: process.env.API_KEY || null,
    hostApi: process.env.HOST_API || 'http://localhost:3000',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Achadinhos da Internet',
    htmlAttrs: {
      lang: 'pt-BR',
      translate: 'no',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', contenct: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Achadinhos da Internet',
      },
      {
        hid: 'og-title',
        name: 'og:title',
        content: 'Achadinhos da Internet | Description',
      },
      {
        hid: 'og-description',
        name: 'og:description',
        content: 'Description complete',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/logo.png',
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: 'Logo Achadinhos da internet',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }],
  },

  server: {
    port: 8081, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'primevue/resources/primevue.min.css' },
    { src: 'primeicons/primeicons.css' },
    { src: 'primeflex/primeflex.css' },
    { src: '@mdi/font/css/materialdesignicons.min.css' },
    {
      src: '@/assets/theme.css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/veevalidate', mode: 'client' },
    { src: '~/plugins/messager' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/api' },
    { src: '~/plugins/error-translator.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'primevue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  primevue: {
    ripple: true,
    components: [
      'Avatar',
      'Accordion',
      'AccordionTab',
      'AutoComplete',
      'Button',
      'Badge',
      'Calendar',
      'Carousel',
      'Card',
      'Checkbox',
      'Column',
      'ContextMenu',
      'DataTable',
      'Dialog',
      'Divider',
      'Ripple',
      'RadioButton',
      'Dropdown',
      'FileUpload',
      'InputMask',
      'InputSwitch',
      'InputNumber',
      'InputText',
      'InlineMessage',
      'Listbox',
      'MegaMenu',
      'Menubar',
      'Message',
      'MultiSelect',
      'Panel',
      'PanelMenu',
      'PickList',
      'ProgressBar',
      'Password',
      'Knob',
      'SplitButton',
      'OverlayPanel',
      'Sidebar',
      'SelectButton',
      'Skeleton',
      'TabPanel',
      'TabView',
      'Textarea',
      'Timeline',
      'Toast',
      'ToggleButton',
      'Toolbar',
      'TreeTable',
      'FileUpload',
    ],
    directives: ['Tooltip', 'Badge'],
  },
}
