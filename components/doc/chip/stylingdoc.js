import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function StylingDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-chip</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-chip-image</td>
                                <td>Container element in image mode.</td>
                            </tr>
                            <tr>
                                <td>p-chip-text</td>
                                <td>Text of the chip.</td>
                            </tr>
                            <tr>
                                <td>pi-chip-remove-icon</td>
                                <td>Remove icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
