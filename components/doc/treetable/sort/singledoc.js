import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function SingleDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const SingleDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const SingleDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable supports single column sorting.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
