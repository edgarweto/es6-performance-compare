/**
 * @description Measures how long does it takes to execute a function n times
 * @param {string} testName Test name used as identifier
 * @param {function} callback The function to be measured
 * @param {int} nRepetitions Loop size
 * @return {int} milliseconds
 */
var fTestSingle = function (testName, callback, nRepetitions) {
  performance.mark(`${testName}-start`);

  let i = 0;
  for (; i < nRepetitions; i++) {
    callback();
  }

  performance.mark(`${testName}-end`);
  performance.measure(testName, `${testName}-start`, `${testName}-end`);
  let measures = performance.getEntriesByName(testName);

  performance.clearMarks();
  performance.clearMeasures();

  return measures[0].duration;
};

var fTestDouble = function (f1, f2, nInnerRepetitions, nRepetitions) {
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
    avDuration1: avDuration1,
    avDuration2: avDuration2
  };
};



export default function runTest(test, callback) {
  const N_LOOP_REPETITIONS = 800;
  const N_INNER_REPETITIONS = 200;


  const res = fTestDouble(test.first, test.second, N_INNER_REPETITIONS, N_LOOP_REPETITIONS),
    ratio = (100 * res.avDuration1 / res.avDuration2).toFixed(2);

  if (typeof callback === 'function') {
    callback(res);
  }
}