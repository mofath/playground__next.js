export default (dc, { linkModel, linkView, ...config }) => {
  const type = 'sub-menu';
  const attrKey = config.attrSubMenu;
  const classKey = config.classAccordionContent;

  dc.addType(type, {
    model: linkModel.extend(
      {
        defaults: {
          ...linkModel.prototype.defaults,
          name: 'Sube Menu',
          draggable: `[${config.attrMenuContainer}]`,
          copyable: false,
          removable: false,
          selectable: true,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
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
