import { __ } from '../lang/I18n';

export default function () {
  return {
    id: 'export-template',
    className: 'btn-toggle-borders',
    label: '<i class="fa fa-code"></i>',
    command: 'export-template', // Built-in command,
    attributes: { title: __('editor.export') },
  };
}
