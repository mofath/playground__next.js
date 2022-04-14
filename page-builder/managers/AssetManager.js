import { config } from '../config';
import { __ } from '../lang/I18n';

export default {
  getConfig: _ => {
    return {
      upload: 'http://localhost:3000/api/uploads',
      headers: {
        'X-CSRF-TOKEN': 'APP.csrf_token',
      },
      uploadText: __('assets.drag_and_drop'),
      addBtnText: __('assets.add_image'),
      modalTitle: __('assets.select_image'),
    };
  },
  loadFiles: editor => {
    const httpRequest = new XMLHttpRequest(),
      assetManager = editor.AssetManager;

    httpRequest.open('GET', config.getUploads, true);
    httpRequest.setRequestHeader('X-CSRF-TOKEN', 'APP.csrf_token');
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          // JSON.parse(httpRequest.responseText)
          const files = [];

          files.forEach(function (file) {
            assetManager.add(file);
          });
        } else {
          console.error('An error occured. The files for the AssetManager could not been loaded.');
        }
      }
    };
  },
};
