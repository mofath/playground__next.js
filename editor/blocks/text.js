// eslint-disable-next-line import/no-anonymous-default-export
export default {
  id: 'text',
  label: '<i class="far fa-text fa-4x"></i><div>' + 'Paragraph' + '</div>',
  category: 'essentials',
  content: {
    type: 'text',
    tagName: 'div',
    editable: true,
    draggable: true,
    droppable: true,
    stylable: true,
    classes: 'cms-block',
    name: 'paragraph',
    content: 'Insert your text here',
    style: {
      padding: '10px',
      'margin-bottom': '25px',
    },
    activeOnRender: 1,
  },
};
