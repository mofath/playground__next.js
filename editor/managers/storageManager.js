import config from '../../config';

export default function storageManager(token) {
  return {
    type: 'remote',
    autosave: config.urlStore !== null,
    stepsBeforeSave: 10,
    urlStore: config.urlStore,
    urlLoad: config.urlLoad,
    params: {},
    headers: {
      'access-token': token,
    },
  };
}
