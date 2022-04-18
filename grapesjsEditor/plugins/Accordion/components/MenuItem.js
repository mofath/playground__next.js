export default (dc, { linkModel, linkView, ...config }) => {
  const type = 'accordion';
  const attrKey = config.attrMenuItem;
  const classKey = config.classAccordion;
  const selectorAccordion = config.selectorAccordion;

  dc.addType(type, {
    model: linkModel.extend(
      {
        defaults: {
          ...linkModel.prototype.defaults,
          name: 'Accordion',
          draggable: `[${config.attrMenuContainer}]`,
          droppable: false,
          copyable: false,
          removable: false,
          selectable: false,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
        },

        clone() {
          const cloned = linkModel.prototype.clone.apply(this, arguments);
          cloned.addAttributes({ [selectorAccordion]: '' });
          return cloned;
        },
      },
      {
        isComponent(el) {
          if (el.hasAttribute && el.hasAttribute(attrKey)) {
            return { type };
          }
        },
      },
    ),
    view: linkView,
  });
};
