import React, {Component} from 'react';
import {Link} from 'react-router';
import {Growl} from '../../components/growl/Growl';
import {FileUpload} from '../../components/fileupload/FileUpload';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class FileUploadDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(event) {

    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.msgs} />

                    <FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                                multiple={true} accept="image/*" maxFileSize={1000000}></FileUpload>
                </div>
                <FileUploadDoc></FileUploadDoc>
            </div>
        )
    }
}

export class FileUploadDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {FileUpload} from 'primereact';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>FileUpload requires a url property as the upload target and a name to identify the files at backend.</p>
<CodeHighlight className="language-markup">
{`
<FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                             accept="image/*"></FileUpload>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {};
    this.onUpload = this.onUpload.bind(this);
}

onUpload(event) {
    ....
}

`}
</CodeHighlight>

            <h3>Multiple Uploads</h3>
            <p>Only one file can be selected at a time, to allow selecting multiples enable multiple option.</p>
               
<CodeHighlight className="language-markup">
{`
<FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                                multiple={true} accept="image/*"></FileUpload>

`}
</CodeHighlight>

            <h3>DragDrop</h3>
            <p>File selection can also be done by dragging and dropping one or more to the content section of the component.</p>

            <h3>File Types</h3>
            <p>Selectable file types can be restricted with accept property, example below only allows images to be uploaded. Read more about other possible values <a href="https://www.w3schools.com/tags/att_input_accept.asp"> here</a>.</p>

            <h3>File Size</h3>
            <p>Maximium file size can be restricted using maxFileSize property defined in bytes.</p>
<CodeHighlight className="language-markup">
{`
<FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                                multiple={true} accept="image/*" maxFileSize={1000000}></FileUpload>

`}
</CodeHighlight>

            <p>In order to customize the default messages use invalidFileSizeMessageSummary and invalidFileSizeMessageDetail options. In summary {0} placeholder refers to the filename and in detail, file size.</p>

            <ul>
                <li>
                    invalidFileSizeMessageSummary: '{0}: Invalid file size, '
                </li>
                <li>
                    invalidFileSizeMessageDetail: string = 'maximum upload size is {0}.'
                </li>
            </ul>

            <h3>Request Customization</h3>
            <p>XHR request to upload the files can be customized using the onBeforeUpload callback that passes the xhr instance and FormData object as event parameters.</p>

            <h3>Attributes</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the request parameter to identify the files at backend.</td>
                        </tr>
                        <tr>
                            <td>url</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Remote url to upload the files.</td>
                        </tr>
                        <tr>
                            <td>multiple</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Used to select multiple files at once from file dialog.</td>
                        </tr>
                        <tr>
                            <td>accept</td>
                            <td>string</td>
                            <td>false</td>
                            <td>Pattern to restrict the allowed file types such as "image/*".</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Disables the upload functionality.</td>
                        </tr>
                        <tr>
                            <td>auto</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, upload begins automatically after selection is completed.</td>
                        </tr>
                        <tr>
                            <td>maxFileSize</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Maximum file size allowed in bytes.</td>
                        </tr>
                        <tr>
                            <td>invalidFileSizeMessageSummary</td>
                            <td>string</td>
                            <td>"&#123;0&#125;: Invalid file size, "</td>
                            <td>Summary message of the invalid fize size.</td>
                        </tr>
                        <tr>
                            <td>invalidFileSizeMessageDetail</td>
                            <td>string</td>
                            <td>"maximum upload size is &#123;0&#125;."</td>
                            <td>Detail message of the invalid fize size.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>previewWidth</td>
                            <td>number</td>
                            <td>50</td>
                            <td>Width of the image thumbnail in pixels.</td>
                        </tr>
                        <tr>
                            <td>chooseLabel</td>
                            <td>string</td>
                            <td>Choose</td>
                            <td>Label of the choose button.</td>
                        </tr>
                        <tr>
                            <td>uploadLabel</td>
                            <td>string</td>
                            <td>Upload</td>
                            <td>Label of the upload button.</td>
                        </tr>
                        <tr>
                            <td>cancelLabel</td>
                            <td>string</td>
                            <td>Cancel</td>
                            <td>Label of the cancel button.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onBeforeUpload</td>
                            <td>event.xhr: XmlHttpRequest instance. <br/>
                                event.formData: FormData object.</td>
                            <td>Callback to invoke before file upload begins to customize the request
                                such as post parameters before the files.</td>
                        </tr>
						<tr>
                            <td>onBeforeSend</td>
                            <td>event.xhr: XmlHttpRequest instance. <br/>
                                event.formData: FormData object.</td>
                            <td>Callback to invoke before file send begins to customize the request
                                such as adding headers.</td>
                        </tr>
                        <tr>
                            <td>onUpload</td>
                            <td>event.xhr: XmlHttpRequest instance.<br />
                                event.files: Uploaded files.</td>
                            <td>Callback to invoke when file upload is complete.</td>
                        </tr>
                        <tr>
                            <td>onError</td>
                            <td>event.xhr: XmlHttpRequest instance.<br />
                                event.files: Files that are not uploaded.</td>
                            <td>Callback to invoke if file upload fails.</td>
                        </tr>
                        <tr>
                            <td>onClear</td>
                            <td>-.</td>
                            <td>Callback to invoke when files in queue are removed without uploading.</td>
                        </tr>
                        <tr>
                            <td>onSelect</td>
                            <td>event.originalEvent: Original browser event. <br />
                                event.files: List of selected files.</td>
                            <td>Callback to invoke when file upload is complete.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ui-fileupload</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-fileupload-buttonbar</td>
                            <td>Header containing the buttons.</td>
                        </tr>
                        <tr>
                            <td>ui-fileupload-content</td>
                            <td>Content section.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class FileUploadDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(event) {

    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.msgs} />

                    <FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                                multiple={true} accept="image/*" maxFileSize={1000000}></FileUpload>
                </div>
                <FileUploadDoc></FileUploadDoc>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}