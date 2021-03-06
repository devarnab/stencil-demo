import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stncl-awesome-components',
  globalStyle: 'src/global/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
