import Menu from './Menu';
import MenuContainer from './MenuContainer';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';

export default (editor, config = {}) => {
  const dc = editor.DomComponents;

  // Default component
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  // Link component
  const linkType = dc.getType('link');
  const linkModel = linkType.model;
  const linkView = linkType.view;

  const opts = {
    ...config,
    defaultModel,
    defaultView,
    linkModel,
    linkView,
    // @TODO
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
  };

  Menu(dc, opts);
  MenuContainer(dc, opts);
  MenuItem(dc, opts);
  SubMenuItem(dc, opts);
};
