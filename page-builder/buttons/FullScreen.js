import { __ } from '../lang/I18n';

export default function () {
  let fullScreen = {
    id: 'fullscreen',
    className: 'btn-toggle-borders',
    label: '<i class="fa fa-arrows-alt"></i>',
    command: editor => {
      editor.stopCommand('fullscreen', { target: '.builder' });
      editor.runCommand('fullscreen', { target: '.builder' });
    },
    togglable: false,
    attributes: { title: __('editor.fullscreen') },
    context: 'fullscreen',
  };

  if (
    !document.fullscreenEnabled &&
    !document.webkitFullscreenEnabled &&
    !document.mozFullScreenEnabled &&
    !document.msFullscreenEnabled
  ) {
    fullScreen.label = '<i class="fa fa-arrows-alt" style="opacity: 0.5; cursor: default;"></i>';
    fullScreen.command = {};
  }

  return fullScreen;
}
