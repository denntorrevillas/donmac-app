
export default {
  basePath: 'https://denntorrevillas.github.io/donmac-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
