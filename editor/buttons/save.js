export default {
  id: 'save',
  label: '<i class="fa fa-floppy-o"></i>',
  command: editor => editor.store(),
  attributes: {
    id: 'saveBtn',
    title: 'save',
  },
};
