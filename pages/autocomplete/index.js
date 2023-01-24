import Head from 'next/head';
import React from 'react';
import { AccessibilityDoc } from '../../components/doc/autocomplete/accessibilitydoc';
import { ApiDoc } from '../../components/doc/autocomplete/apidoc';
import { BasicDoc } from '../../components/doc/autocomplete/basicdoc';
import { DisabledDoc } from '../../components/doc/autocomplete/disableddoc';
import { DropdownDoc } from '../../components/doc/autocomplete/dropdowndoc';
import { FloatLabelDoc } from '../../components/doc/autocomplete/floatlabeldoc';
import { ForceSelectionDoc } from '../../components/doc/autocomplete/forceselectiondoc';
import { GroupDoc } from '../../components/doc/autocomplete/groupdoc';
import { ImportDoc } from '../../components/doc/autocomplete/importdoc';
import { InvalidStateDoc } from '../../components/doc/autocomplete/invalidstatedoc';
import { MultipleDoc } from '../../components/doc/autocomplete/multipledoc';
import { ObjectsDoc } from '../../components/doc/autocomplete/objectsdoc';
import { StyleDoc } from '../../components/doc/autocomplete/styledoc';
import { TemplateDoc } from '../../components/doc/autocomplete/templatedoc';
import { FormikDoc } from '../../components/doc/autocomplete/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/autocomplete/validation/hookformdoc';
import { VirtualScrollDoc } from '../../components/doc/autocomplete/virtualscrolldoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

const AutoCompleteDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalidstate',
            label: 'Invalid State',
            component: InvalidStateDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'dropdown',
            label: 'Dropdown',
            component: DropdownDoc
        },
        {
            id: 'objects',
            label: 'Objects',
            component: ObjectsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'forceselection',
            label: 'Force Selection',
            component: ForceSelectionDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React AutoComplete Component</title>
                <meta name="description" content="AutoComplete is an input component that provides real-time suggestions while being typed." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>AutoComplete</h1>
                    <p>AutoComplete is an input component that provides real-time suggestions while being typed.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AutoCompleteDemo;
