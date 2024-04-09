import Store, { CacheHandler } from '@ember-data/store';
import RequestManager from '@ember-data/request';
import { Fetch } from '@ember-data/request/fetch';
import JSONAPICache from '@ember-data/json-api';


const manager = new RequestManager();

manager.use([Fetch]);
manager.useCache(CacheHandler);


class MyStore extends Store {
  requestManager = manager;

  createCache(capabilities) {
    return new JSONAPICache(capabilities);
  }
}

document.querySelector('#app').innerHTML = `
  <h1>
    hi
  </h1>
`

setupCounter(document.querySelector('#counter'))

