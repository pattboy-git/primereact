import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/chip/apidoc';
import { BasicDemo } from '../../components/doc/chip/basicdoc';
import { IconDemo } from '../../components/doc/chip/icondoc';
import { ImageDemo } from '../../components/doc/chip/imagedoc';
import { StylingDemo } from '../../components/doc/chip/stylingdoc';

const ChipDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDemo
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDemo
        },
        {
            id: 'image',
            label: 'Image',
            component: ImageDemo
        },
        {
            id: 'styling',
            label: 'Styling',
            component: StylingDemo
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Chip Component</title>
                <meta name="description" content="Chip represents entities using icons, labels and images." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Chip</h1>
                    <p>Chip represents entities using icons, labels and images.</p>
                </div>
            </div>

            <div className="content-section doc blockui-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipDemo;
