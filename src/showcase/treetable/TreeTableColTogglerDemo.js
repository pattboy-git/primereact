import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';

export class TreeTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);
        let columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        let colOptions = [];
        for(let col of columns) {
            colOptions.push({label: col.header, value: col});
        }

        this.state = {
            nodes: [],
            cols: columns,
            colOptions: colOptions
        };

        this.nodeservice = new NodeService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.cols} options={this.state.colOptions} onChange={this.onColumnToggle} 
                        style={{width:'250px'}}/>
            </div>
        );

        const columns = this.state.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {columns}
                    </TreeTable>
                </div>
            </div>
        )
    }
}