export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = 'menu-container';
  const attrMenu = config.attrMenu;
  const attrKey = config.attrMenuContainer;
  const classKey = config.classAccordionContainer;
  const attrSubMenu = config.attrSubMenu;
  const selectorAccordion = config.selectorAccordion;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          name: 'Menu Container',
          draggable: `[${attrMenu}, ${attrSubMenu}]`,
          droppable: false,
          copyable: true,
          removable: true,
        },

        init() {
          const attrs = this.getAttributes();
          attrs[attrKey] = 1;
          this.setAttributes(attrs);
          classKey && this.addClass(classKey);
          this.listenTo(this, 'add', this.onAdd);
        },

        onAdd() {
          const componentModels = this.components().models;
          if (componentModels && Array.isArray(componentModels)) {
            let subMenuID;
            for (let i = componentModels.length - 1; i >= 0; i--) {
              const model = componentModels[i];
              const attrs = model.getAttributes();
              if (attrs[`${attrSubMenu}`]) {
                subMenuID = model.getId();
                model.setId(subMenuID);
              } else {
                model.addAttributes({
                  [selectorAccordion]: `#${subMenuID}`,
                });
              }
            }
          }
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

    view: defaultView,
  });
};
