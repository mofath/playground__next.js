import { useEffect } from 'react';
import GrapesjsBuilder from './grapesjsBuilder';

const Editor = ({ id, width, height }) => {
  useEffect(() => {
    new GrapesjsBuilder({
      lang: 'en',
      urlStore: 'http://localhost:3000/api/store',
      urlLoad: 'http://localhost:3000/api/store',
      fileUpload: 'http://localhost:3000/api/uploads',
      getUploads: 'http://localhost:3000/api/uploads',
      styles: [],
    });
  }, []);

  return (
    <div className="builder">
      <div className="left-container">
        <div className="vertical-bar vertical-bar--spaced-groups">
          <a
            href="#back"
            className="exit-btn gjs-pn-btn btn-toggle-borders gjs-four-color"
            title="Exit"
          >
            <i className="animated-exit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
              </svg>
            </i>
          </a>
        </div>
      </div>

      <div className="center-container">
        <div className="top-bar top-bar--spaced-groups">
          <div></div>
        </div>

        <div id="gjs" className="center-container__editor"></div>
      </div>

      <div className="right-container">
        <div className="top-bar top-bar--solo-group"></div>
        <div className="right-container__panels">
          <div className="styles-panel"></div>
          <div className="traits-panel"></div>
          <div className="layers-panel"></div>
          <div className="blocks-panel"></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
