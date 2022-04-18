export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = 'menu';
  const attrMenu = config.attrMenu;

  dc.addType(type, {
    model: defaultModel.extend(
      {
        defaults: {
          ...defaultModel.prototype.defaults,
          copyable: false,
          droppable: false,
          name: 'Menu',
          'attr-accordions': config.attrMenu,
          'attr-accordion': config.attrMenuItem,
          'attr-sub-menu': config.attrSubMenu,
          'attr-accordion-container': config.attrMenuContainer,
          'class-accordion-active': config.classAccordionActive,
          'selector-accordion': config.selectorAccordion,

          script() {
            var i;
            var el = this;
            var attrMenu = '[' + '{[ attr-accordions ]}' + ']';
            var attrMenuItem = '[' + '{[ attr-accordion ]}' + ']';
            var attrSubMenu = '[' + '{[ attr-sub-menu ]}' + ']';
            var attrMenuContainer = '[' + '{[ attr-accordion-container ]}' + ']';
            var classAccordionActive = '{[ class-accordion-active ]}';
            var selectorAccordion = '{[ selector-accordion ]}';
            var body = document.body;
            var matches =
              body.matchesSelector ||
              body.webkitMatchesSelector ||
              body.mozMatchesSelector ||
              body.msMatchesSelector;

            var activeAccordion = accordionEl => {
              var accordionContainers = el.querySelectorAll(attrMenuContainer) || [];

              if (accordionContainer) {
                for (i = 0; i < accordionContainers.length; i++) {
                  var accordionContainer = accordionContainers[i];
                  var newClass = accordionContainer.className
                    .replace(classAccordionActive, '')
                    .trim();

                  accordionContainer.className = newClass;
                }
              }

              // hideContents();
              accordionEl.className += ' ' + classAccordionActive;
            };

            var deactiveAccordion = accordionEl => {
              var newClass = accordionEl.className.replace(classAccordionActive, '').trim();
              accordionEl.className = newClass;
            };

            el.addEventListener('click', e => {
              var target = e.target;
              if (matches.call(target, attrMenuItem)) {
                if (
                  el.querySelector(target.getAttribute(selectorAccordion)).style.display === 'block'
                ) {
                  deactiveAccordion(target.parentElement);
                  el.querySelector(target.getAttribute(selectorAccordion)).style.display = 'none';
                } else {
                  activeAccordion(target.parentElement);
                  el.querySelector(target.getAttribute(selectorAccordion)).style.display = 'block';
                }
              }
            });
          },
        },

        init() {
          const attrs = this.getAttributes();
          attrs[config.attrMenu] = 1;
          this.setAttributes(attrs);
        },
      },
      {
        isComponent(el) {
          if (el.hasAttribute && el.hasAttribute(attrMenu)) {
            return { type };
          }
        },
      },
    ),

    view: defaultView.extend({
      init() {
        const comps = this.model.components();
        !comps.length && comps.add(config.template);
      },

      onRender() {},
    }),
  });
};
