process.env.NODE_ENV = 'development';

const electron = require('electron');
const cp = require('child_process');
const webpack = require('webpack');
const { createServer } = require('vite');
const { callbackFunction, getLoader } = require('./utils');
const pkg = require('../package.json');

const TAG = '[dev.js]';
const { TAG: loaderTAG } = getLoader();

async function startMain() {
  /**
   * @type {import('child_process').ChildProcessWithoutNullStreams | null}
   */
  let electronProcess = null
  const compiler = webpack(require('../configs/webpack.main'));
  compiler.watch({}, callbackFunction(`${TAG} main:`, bool => {
    if (!bool) return;
    if (electronProcess) electronProcess.kill();

    electronProcess = cp.spawn(
      electron,
      ['.'],
      { stdio: 'inherit', env: Object.assign(process.env, pkg.env) },
    );
  }));
}

/**
 * @param {import('vite').ViteDevServer} viteServer 
 */
async function startPreload(viteServer) {
  const compiler = webpack(require('../configs/webpack.preload'));
  compiler.watch({}, callbackFunction(`${TAG} preload:`, bool => {
    if (!bool) return;
    viteServer.ws.send({ type: 'full-reload' });
  }));
}

async function startVite() {
  return createServer({
    configFile: 'configs/vite.config.ts',
  });
}

(async () => {
  const viteServer = await (await startVite()).listen();

  console.log(TAG, 'transpile .ts use', loaderTAG);

  await startPreload(viteServer);
  await startMain();
})();
