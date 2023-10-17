import * as depData from 'test-import-assertion-dep' assert { client: 'true' }
  import * as data from './data.json' assert { type: 'json', client: 'true' }

  text('.src', data.foo)

  text('.dep', depData.hello)

  function text(el, text) {
    document.querySelector(el).textContent = text
  }