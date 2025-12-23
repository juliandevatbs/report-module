import type { Sample } from "../../types/report.types";


function paginateSamples(
    samples: Sample[], 
    maxHeightPerPage: number = 900,
    estimatedHeaderHeight: number = 100,
    estimatedTestRowHeight: number = 30
): Sample[][] {
    const pages: Sample[][] = [];
    let currentPage: Sample[] = [];
    let currentPageHeight = 0;

    samples.forEach((sample) => {
        // Calcula altura estimada de este sample
        // Header del sample + número de tests * altura por test
        const sampleHeight = estimatedHeaderHeight + (sample.sampleTests.length * estimatedTestRowHeight);
        
        // Si agregar este sample excede la altura máxima
        if (currentPageHeight + sampleHeight > maxHeightPerPage && currentPage.length > 0) {
            // Guarda la página actual y comienza una nueva
            pages.push(currentPage);
            currentPage = [sample];
            currentPageHeight = sampleHeight;
        } else {
            // Agrega a la página actual
            currentPage.push(sample);
            currentPageHeight += sampleHeight;
        }
    });

    // No olvides la última página
    if (currentPage.length > 0) {
        pages.push(currentPage);
    }

    return pages;
}

export default paginateSamples;