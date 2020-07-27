import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import JoditEditor from "jodit-react";
import 'jodit';
import 'jodit/build/jodit.min.css';
import './App.css';

function App() {
  const editor = useRef(null)
  const [docContent, setDocContent] = useState('Vamboooora')
  const config = {
    uploader: {
      insertImageAsBase64URI: true
    },
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  }

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={docContent}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setDocContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { console.log(newContent); }}
      />
    </div>
  );
}

export default App;
