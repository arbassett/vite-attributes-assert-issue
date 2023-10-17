import * as depData from 'test-import-attributes-dep' with { client: 'true' }
  import * as data from './data.json' with { type: 'json', client: 'true' }

  text('.src', data.foo)

  text('.dep', depData.hello)

  function text(el, text) {
    document.querySelector(el).textContent = text
  }