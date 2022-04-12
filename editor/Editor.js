import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import GrapesJS from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import gjsBasicBlocks from 'grapesjs-blocks-basic';
import saveBtn from './buttons/save';
import TextBlock from './blocks/text';

// eslint-disable-next-line react/display-name
const Editor = ({ children, id, width, height }) => {
  const loadEditor = () => {
    const editor = GrapesJS.init({
      container: `#${id}`,
      fromElement: true,
      width,
      height,
      plugins: [gjsPresetWebpage, gjsBasicBlocks],
    });
    editor.Panels.addButton('options', [saveBtn]);
    editor.Blocks.add(TextBlock);
  };

  useEffect(() => {
    loadEditor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={id}>{children}</div>;
};

export default Editor;
