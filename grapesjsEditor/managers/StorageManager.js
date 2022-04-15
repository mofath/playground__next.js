import config from '../config';

export default function () {
  return {
    id: 'gjs-', // Prefix identifier that will be used on parameters
    type: 'remote',
    autosave: false,
    stepsBeforeSave: 10,
    urlStore: config.urlStore,
    urlLoad: config.urlLoad,
    params: {},
    // headers: {
    //   'X-CSRF-TOKEN': 'APP.csrf_token',
    // },

    load: (keys, clb, clbErr) => {
      alert('load');
      clb(this.args.page.metaData);
    },

    store: (data, clb, clbErr) => {
      alert('store');
      for (let key in data) {
        // this.args.page.set(`metaData.${key}`, data[key]);
      }
      // this.args.page.save().then(() => clb());
    },
  };
}
