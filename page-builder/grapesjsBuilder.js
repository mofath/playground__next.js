// Config
import { config, mergeToConfig } from './config';
// I18n
import { __, setLocale } from './lang/I18n';
// Libs
import grapesjs from 'grapesjs';
import toastr from 'toastr';
// Blocks
import ContainerBlock from './blocks/Container';
import LineBreakBlock from './blocks/LineBreak';
import SimpleBlock from './blocks/Block';
import TextBlock from './blocks/Text';
import TitlesBlocks from './blocks/Titles';
import ImageBlock from './plugins/Figure/blocks/Figure';
import LinkBlock from './plugins/LinkBlock/blocks/LinkBlock';
import VideoBlock from './plugins/ResponsiveVideo/blocks/ResponsiveVideo';
// Buttons
import ComponentVisibilityBtn from './buttons/ComponentsVisibility';
import * as DevicesBtn from './buttons/Devices';
import EditCodeBtn from './buttons/EditCode';
import ExportTemplateBtn from './buttons/ExportTemplate';
import FullScreenBtn from './buttons/FullScreen';
import RedoBtn from './buttons/Redo';
import SaveBtn from './buttons/Save';
import * as SwitchPanelsBtns from './buttons/SwitchPanels';
import UndoBtn from './buttons/Undo';
// Commands
import EditCodeCmd from './commands/EditCode';
import SetDevicesCmd from './commands/SetDevices';
import ShowPanels from './commands/ShowPanels';
import UndoRedo from './commands/UndoRedo';
// Devices
import DesktopDevice from './devices/Desktop';
import TabletDevice from './devices/Tablet';
import XSTabletDevice from './devices/XSTablet';
import MobileDevice from './devices/Mobile';
// Managers
import AssetManager from './managers/AssetManager';
import SelectorManager from './managers/SelectorManager';
import StorageManager from './managers/StorageManager';
import StyleManager from './managers/StyleManager';
import TraitManager from './managers/TraitManager';
// Plugins
import FigureComponent from './plugins/Figure';
import LocalizeDefaultTexts from './plugins/LocalizeDefaultTexts';
import RichTextEditorExtended from './plugins/RichTextEditorExtended';
import SectorsAccordion from './plugins/SectorsAccordion';
// Types
import LinkBlockComponent from './plugins/LinkBlock';
import LineBreakType from './types/line-break';
import ResponsiveVideoComponent from './plugins/ResponsiveVideo';
import SimpleBlockType from './types/block';

const GrapesjsBuilder = function (options) {
  const _self = this;
  _self.editor = null;

  function _init() {
    _setConfig(options);
    _initToastr();
    _initEditor();
  }

  function _initEditor() {
    _self.editor = grapesjs
      .init({
        container: '#gjs',
        fromElement: true,
        width: 'auto',
        protectedCss: '',
        avoidInlineStyle: true,
        showOffsets: true,
        allowScripts: true,
        avoidDefaults: true,
        storageManager: StorageManager(),
        plugins: [
          LocalizeDefaultTexts,
          SectorsAccordion,
          RichTextEditorExtended,
          SimpleBlockType,
          LineBreakType,
          FigureComponent,
          LinkBlockComponent,
          ResponsiveVideoComponent,
          // GrapesjsPresetwebpagePlugin,
        ],
        canvas: {
          styles: [...config.styles, '/modules/cms/css/page-builder/canvas.css'],
        },
        commands: {
          defaults: [...EditCodeCmd(), ...SetDevicesCmd, ...ShowPanels, ...UndoRedo],
        },
        assetManager: AssetManager.getConfig(),
        deviceManager: {
          devices: [DesktopDevice, TabletDevice, XSTabletDevice, MobileDevice],
        },
        panels: {
          defaults: [
            {
              id: 'editor-actions',
              el: '.left-container .vertical-bar',
              buttons: [ComponentVisibilityBtn(), FullScreenBtn()],
            },
            {
              id: 'devices',
              el: '.center-container .top-bar',
              buttons: [
                DevicesBtn.Desktop(),
                DevicesBtn.Tablet(),
                DevicesBtn.XSTablet(),
                DevicesBtn.Mobile(),
              ],
            },
            {
              id: 'basic-actions',
              el: '.center-container .top-bar',
              buttons: [
                {
                  ...UndoBtn(),
                  className: 'gjs-btn-lm',
                },
                RedoBtn(),
                ExportTemplateBtn(),
                EditCodeBtn(),
                SaveBtn(),
              ],
            },
            {
              id: 'switch-panels',
              el: '.right-container .top-bar',
              buttons: [
                SwitchPanelsBtns.Styles(),
                SwitchPanelsBtns.Traits(),
                SwitchPanelsBtns.Layers(),
                SwitchPanelsBtns.Blocks(),
              ],
            },
          ],
        },
        selectorManager: {
          appendTo: '.styles-panel',
          ...SelectorManager(),
        },
        styleManager: {
          appendTo: '.styles-panel',
          ...StyleManager(),
        },
        traitManager: {
          appendTo: '.traits-panel',
          ...TraitManager,
        },
        layerManager: {
          appendTo: '.layers-panel',
        },
        blockManager: {
          appendTo: '.blocks-panel',
          blocks: [
            TitlesBlocks().H2,
            TitlesBlocks().H3,
            TitlesBlocks().H4,
            TitlesBlocks().H5,
            TextBlock(),
            LinkBlock(),
            ImageBlock(),
            VideoBlock(),
            LineBreakBlock(),
            SimpleBlock(),
            ContainerBlock(),
          ],
        },
      })
      .on('storage:end:store', function () {
        toastr.success('');
      });

    _self.editor.DomComponents.getWrapper().addClass('inner-page');

    // Load previously uploaded files
    AssetManager.loadFiles(_self.editor);

    // fix bug https://github.com/artf/grapesjs/issues/2160
    // when {dragMode: 'absolute'} is used in the config
    window.editor = _self.editor;

    // Restore the ability to style components using their class
    editor.SelectorManager.getAll().each(selector => selector.set('private', 0));
    editor.on('selector:add', selector => selector.set('private', 0));
  }

  function _initToastr() {
    toastr.options = {
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    };
  }

  function _setConfig(options) {
    mergeToConfig(options);
    setLocale(config.lang);
  }

  _init();
};

export default GrapesjsBuilder;
