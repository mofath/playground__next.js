import loadComponents from './components/index';
import loadBlocks from './blocks';

const attrMenu = 'data-menu';
const attrMenuItem = 'data-menu-item';
const attrSubMenu = 'data-sub-menu';
const attrMenuContainer = 'data-menu-container';

export default editor => {
  const options = {
    attrMenu,
    attrMenuItem,
    attrSubMenu,
    attrMenuContainer,
    classMenu: 'menu',
    classMenuActive: 'menu-active',
    classMenuContent: 'sub-menu',
    classMenuContainer: 'menu-container',
    selectorAccordion: 'href',
    template: `
      <div ${attrMenuContainer}>
        <a  ${attrMenuItem}>Menu 1</a>
        <a ${attrSubMenu}>Menu Item 1</a>
      </div>
    `,
    style: `
      .menu {
        text-decoration: none;
        color: inherit;
        padding: 7px 14px;
        transition: opacity 0.3s;
        display: block;
        border-radius: 3px;
        margin-right: 10px;
        background-color: #eee;
        margin-top: 5px;
        background: blue
      }
      .sub-menu {
        display: none;
        padding: 6px 12px;
        min-height: fit-content;
        border: solid 1px #eee;
        background: red;
      }
    `,
  };

  loadComponents(editor, options);
  loadBlocks(editor, options);
};
