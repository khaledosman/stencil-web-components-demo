import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'mycomponent',
  outputTargets: [
    { type: 'dist' },
    { type: 'docs-readme' },
    {
      type: 'www',
      baseUrl: 'http://localhost:3333'
      // serviceWorker: null // disable service workers
    }
  ]
}
