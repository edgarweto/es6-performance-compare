export var fTestDouble = function (f1, f2, nInnerRepetitions, nRepetitions) {
  let i, j,
    d1 = 0,
    d2 = 0;

  for (i = 0; i < nRepetitions; i++) {

    for (j = 0; j < nInnerRepetitions; j++) {
      d1 += fTestSingle('test1', f1, nInnerRepetitions);
    }
    for (j = 0; j < nInnerRepetitions; j++) {
      d2 += fTestSingle('test2', f2, nInnerRepetitions);
    }
  }

  const avDuration1 = d1 / (nInnerRepetitions * nRepetitions),
    avDuration2 = d2 / (nInnerRepetitions * nRepetitions);

  return {
    avDuration1: avDuration1 * 1000,
    avDuration2: avDuration2 * 1000
  };
};

var fTestSingle = function (testName, f1, nRepetitions) {
  performance.mark(`${testName}-start`);

  let i = 0;
  for (; i < nRepetitions; i++) {
    f1();
  }

  performance.mark(`${testName}-end`);
  performance.measure(testName, `${testName}-start`, `${testName}-end`);
  let measures = performance.getEntriesByName(testName);

  performance.clearMarks();
  performance.clearMeasures();

  return measures[0].duration;
};
