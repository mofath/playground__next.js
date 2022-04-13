import { __ } from '../lang/I18n';

export default function () {
  return {
    id: 'save',
    className: 'btn-toggle-borders',
    label: '<i class="fa fa-floppy-o" style="font-size=18px;"></i>',
    command: editor => editor.store(),
    attributes: {
      id: 'saveBtn',
      title: __('editor.save'),
    },
  };
}
