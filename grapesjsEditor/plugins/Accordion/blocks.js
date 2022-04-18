export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const style = config.style;
  const type = 'accordions';
  const content = `<div data-gjs-type="${type}"></div>
      ${style ? `<style>${style}</style>` : ''}`;

  bm.add('accordions', {
    label: 'Accordions Menu',
    attributes: { class: 'fa fa-arrow-circle-down' },
    content,
  });
};
