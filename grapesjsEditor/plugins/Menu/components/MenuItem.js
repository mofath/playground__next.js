export default (dc, { linkModel, linkView, ...config }) => {
  const type = 'menu-item';
  const attrKey = config.attrMenuItem;
  const classKey = config.classMenu;
  const selectorMenu = config.selectorAccordion;

  dc.addType(type, {
    model: linkModel.extend(
      {
        defaults: {
          ...linkModel.prototype.defaults,
          name: 'Menu Item',
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
          cloned.addAttributes({ [selectorMenu]: '' });
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
