import type { Sample, SampleTest } from "../../interfaces/Types";


export interface PaginatedSample {

    sample: Sample;

    tests: SampleTest[];

    isFirstPage: boolean;

    isContinuation: boolean;

    sampleIndex: number;

}


export function paginateSamples(

    samples: Sample[], 

    maxTestsPerPage: number = 20

): PaginatedSample[][] {

    const pages: PaginatedSample[][] = [];

    let currentPage: PaginatedSample[] = [];

    let currentTestCount = 0;


    samples.forEach((sample, sampleIndex) => {

        const allTests = sample.sampleTests;

        let remainingTests = [...allTests];

        let isFirstPageForSample = true;


        while (remainingTests.length > 0) {

            const availableSpace = maxTestsPerPage - currentTestCount;


            if (availableSpace <= 0) {

                pages.push([...currentPage]);

                currentPage = [];

                currentTestCount = 0;

            }


            const spaceToUse = Math.max(1, maxTestsPerPage - currentTestCount);

            const testsToAdd = remainingTests.slice(0, spaceToUse);

            remainingTests = remainingTests.slice(testsToAdd.length);


            currentPage.push({

                sample: sample,

                tests: testsToAdd,

                isFirstPage: isFirstPageForSample,

                isContinuation: !isFirstPageForSample,

                sampleIndex: sampleIndex

            });


            currentTestCount += testsToAdd.length;

            isFirstPageForSample = false;


            if (currentTestCount >= maxTestsPerPage) {

                pages.push([...currentPage]);

                currentPage = [];

                currentTestCount = 0;

            }

        }

    });


    if (currentPage.length > 0) {

        pages.push(currentPage);

    }


    return pages;

}