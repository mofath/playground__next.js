export default editor => {
  editor.simpleMod = true;

  /*=======================================================*/
  /*============ STYLE UNIQUEMENT SUR LES ID ==============*/
  // Apply a style only to the selected element without using any CSS classes it might have

  // Make private already inserted selectors
  editor.SelectorManager.getAll().each(selector => selector.set('private', 1));
  // All new selectors will be private
  editor.on('selector:add', selector => selector.set('private', 1));

  /*=======================================================*/
  /*================== TEXT CSS PROPERTIES ================*/

  editor.DomComponents.addType('text', {
    model: {
      defaults: {
        stylable: [
          'text-align',
          'font-size',
          'font-weight',
          'color',
          'text-shadow',
          'float',
          'width',
          'height',
          'min-width',
          'min-height',
          'max-width',
          'max-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
        ],
      },
    },
  });

  /*=======================================================*/
  /*================= IMAGE CSS PROPERTIES ================*/

  editor.DomComponents.addType('image', {
    model: {
      defaults: {
        traits: [{ type: 'text', label: 'Text alternatif', name: 'alt' }],
        stylable: ['float', 'width', 'height'],
      },
    },
  });

  editor.DomComponents.addType('picture', {
    model: {
      defaults: {
        stylable: ['float', 'width', 'height'],
      },
    },
  });

  /*=======================================================*/
  /*============== LINE BREAK CSS PROPERTIES ==============*/

  editor.DomComponents.addType('line-break', {
    model: {
      defaults: {
        stylable: ['height'],
      },
    },
  });
};
