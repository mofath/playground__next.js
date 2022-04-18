import loadComponents from './components/index';
import loadBlocks from './blocks';

const attrAccordion = 'data-accordion';
const attrAccordions = 'data-accordions';
const attrAccordionContent = 'data-sub-menu';
const attrAccordionContainer = 'data-accordion-container';

export default editor => {
  const options = {
    attrAccordions,
    attrAccordion,
    attrAccordionContent,
    attrAccordionContainer,
    classAccordion: 'accordion',
    classAccordionActive: 'accordion-active',
    classAccordionContent: 'sub-menu',
    classAccordionContainer: 'accordion-container',
    selectorAccordion: 'href',
    template: `
      <div ${attrAccordionContainer}>
        <a  ${attrAccordion}>Menu 1</a>
        <a ${attrAccordionContent}>Menu Item 1</a>
      </div>
    `,
    style: `
      .accordion {
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
