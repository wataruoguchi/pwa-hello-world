/* eslint-disable no-use-before-define */

async function installServiceWorker () {
  // TODO
}

async function main () {
  // sometimes accidentally open '/' while developing
  if (!window.location.pathname.startsWith('/pwa-hello-world/')) {
    window.location.replace('/pwa-hello-world/');
  }
}

installServiceWorker();
document.addEventListener('DOMContentLoaded', main);
