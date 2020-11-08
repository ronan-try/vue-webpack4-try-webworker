import axios from 'axios';

self.onmessage = function ({ data }) {
    console.warn('message', data);
    self.postMessage(data + '' + axios);
}