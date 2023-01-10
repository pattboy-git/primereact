import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StylingDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
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
                                <td>p-dataview</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-list</td>
                                <td>Container element in list layout.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-grid</td>
                                <td>Container element in grid layout.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-content</td>
                                <td>Container of items.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
