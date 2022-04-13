export default editor => {
  const rte = editor.RichTextEditor;

  rte.remove('link');

  rte.add('link', {
    icon: '<i class="far fa-link"></i>',
    attributes: { title: 'Link' },
    result: rte => rte.insertHTML(`<a href="#">${rte.selection()}</a>`),
  });

  rte.add('ul', {
    icon: '•',
    attributes: { title: 'List' },
    result: rte => rte.insertHTML(`<ul><li>${rte.selection()}</li></ul>`),
  });

  rte.add('ol', {
    icon: '<i>1.</i>',
    attributes: { title: 'Ordered list' },
    result: rte => rte.insertHTML(`<ol><li>${rte.selection()}</li></ul>`),
  });
};
