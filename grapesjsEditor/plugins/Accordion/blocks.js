export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const style = config.style;
  const type = 'menu';
  const content = `<div data-gjs-type="${type}"></div>
      ${style ? `<style>${style}</style>` : ''}`;

  bm.add(type, {
    label: 'Menu',
    attributes: { class: 'fa fa-arrow-circle-down' },
    content,
  });
};
