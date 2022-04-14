export default editor => {
  editor.DomComponents.addType('link', {
    model: {
      defaults: {
        traits: [
          { type: 'text', label: 'Title on hover', name: 'title' },
          { type: 'text', label: 'Link URL', name: 'href' },
          {
            type: 'select',
            label: 'Open in',
            name: 'target',
            options: [
              { value: '', name: 'Same page' },
              { value: '_blank', name: 'A new tab' },
            ],
          },
        ],
      },
    },
  });
};
