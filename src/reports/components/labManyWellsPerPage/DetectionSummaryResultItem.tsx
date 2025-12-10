import type { Sample, SampleTest } from "../../../interfaces/Types";
import AnalyticalResultItemHeader from "./AnalyticalResultItemHeader";
import AnalyticResultItemRow from "./AnalyticResultItemRow";
import ClassicalParametersHeader from "./ClassicalParameters";

interface DetectionSummaryResultItemProps {
    sample: Sample;
}

function DetectionSummaryResultItem({ sample }: DetectionSummaryResultItemProps) {

    // Filtrar solo los tests donde Results > PQL
    const detectedTests = sample.sampleTests.filter(test => {
        const resultValue = parseFloat(test.results.replace(/[<>]/g, ''));
        const pqlValue = parseFloat(test.pql);
        
        return !isNaN(resultValue) && !isNaN(pqlValue) && resultValue > pqlValue;
    });

    // Si no hay tests detectados, no renderizar nada
    if (detectedTests.length === 0) {
        return null;
    }

    return (
        <div className="w-full h-auto flex flex-col border-l-2 border-r-2 border-black">

            <div className="w-full h-auto flex px-0.5 bg-[#e6f1ff]">

                <div className="w-1/3 h-full flex flex-col">
                    <span className="text-xs text-black">
                        Client Sample ID: <span className="font-bold">{sample.clientSampleId}</span>
                    </span>
                    <span className="text-xs text-black">
                        Lab Sample ID: <span className="font-bold">{sample.labSampleId}</span>
                    </span>
                </div>

                <div className="w-1/3 h-full flex flex-col">
                    <span className="text-xs text-black">
                        Date Collected: <span className="font-bold">{sample.dateCollected}</span>
                    </span>
                    <span className="text-xs text-black">
                        Collected By: <span className="font-bold">{sample.collectedBy}</span>
                    </span>
                </div>

                <div className="w-1/3 h-full flex flex-col">
                    <span className="text-xs text-black">
                        Matrix ID: <span className="font-bold">{sample.matrixId}</span>
                    </span>
                </div>

            </div>

            <ClassicalParametersHeader />
            <AnalyticalResultItemHeader />

            {/* Renderizar solo los tests detectados */}
            {detectedTests.map((test, index) => (
                <AnalyticResultItemRow key={index} test={test} />
            ))}

        </div>
    )
}

export default DetectionSummaryResultItem;