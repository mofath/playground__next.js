let config = {
  lang: 'en',
  styles: [],
  urlStore: 'http://localhost:3000/api/store',
  urlLoad: 'http://localhost:3000/api/store',
  fileUpload: 'http://localhost:3000/api/upload',
  getUploads: 'http://localhost:3000/api/upload',
  textEntryOnly: false,
};

function mergeToConfig(settings) {
  config = { ...config, ...settings };
}

export { config, mergeToConfig };
