import { __ } from '../lang/I18n';

export default function () {
  return {
    id: 'redo',
    className: 'btn-toggle-borders',
    label: '<i class="fa fa-repeat"></i>',
    command: 'redo',
    attributes: { title: __('editor.redo'), class: 'gjs-pn-btn--combine-l' },
  };
}
