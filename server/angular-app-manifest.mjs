
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://denntorrevillas.github.io/donmac-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/donmac-app/login",
    "route": "/donmac-app"
  },
  {
    "renderMode": 2,
    "route": "/donmac-app/login"
  },
  {
    "renderMode": 2,
    "route": "/donmac-app/signup"
  },
  {
    "renderMode": 2,
    "route": "/donmac-app/menu"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2586, hash: '697f118825eb8b4f8221bba1c8b2cbe086e0414b2d3f7633fa9eb04245c02379', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2932, hash: 'f43e0590badd32f0b5b9e17d29839218e374d561cf6d079a05898c232a9daf1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7422, hash: 'ed995356440347f448f56c28f46bd1393fb15c5a2b74f882e5dee8f1cb42f8f4', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 7942, hash: '36dba9af7b581bdb7a267e2ebabbe17b9214c6ffa9b678397476a8aa23936609', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 7659, hash: '72fa241ee10a2f38334e659ebd319d0eb827311664c2e633a79043c36f7053c5', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'styles-24JM3Z6T.css': {size: 42, hash: 'umJv61F35VQ', text: () => import('./assets-chunks/styles-24JM3Z6T_css.mjs').then(m => m.default)}
  },
};
