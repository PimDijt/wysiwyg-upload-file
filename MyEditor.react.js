import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CardFileUpload from './CardFileUpload';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onEditorStateChange = (editorState) => this.setState({editorState});

  uploadCallback = () => {};

  render() {
    return (
      <Editor
        onEditorStateChange={this.onEditorStateChange}
        editorState={this.state.editorState}
        toolbarCustomButtons={[
          <CardFileUpload
            onChange={() => {}}
            editorState={{}}
            config={{
              uploadEnabled: true,
              uploadCallback: this.uploadCallback,
            }}
          />
        ]}
      />
    );
  }
}
