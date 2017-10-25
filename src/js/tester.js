/**
 * @description Measures how long does it takes to execute a function n times
 *
 * @param {string} testName Test name used as identifier
 * @param {function} callback The function to be measured
 * @param {int} nRepetitions Loop size
 *
 * @return {int} milliseconds
 * @private
 */
var _fTestSingle = function (testName, callback, nRepetitions) {
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

/**
 * @description
 *
 * @param {function} f1 The function to be measured
 * @param {function} f2 The function to be measured
 * @param {int} nInnerRepetitions Loop size for each function
 * @param {int} nRepetitions Loop size for external loop
 *
 * @return {object} Summary of average durations
 * @private
 */
var _fTestDouble = function (f1, f2, nInnerRepetitions, nRepetitions) {
  let i, j,
    d1 = 0,
    d2 = 0;

  for (i = 0; i < nRepetitions; i++) {

    for (j = 0; j < nInnerRepetitions; j++) {
      d1 += _fTestSingle('test1', f1, nInnerRepetitions);
    }
    for (j = 0; j < nInnerRepetitions; j++) {
      d2 += _fTestSingle('test2', f2, nInnerRepetitions);
    }
  }

  const avDuration1 = d1 / (nInnerRepetitions * nRepetitions),
    avDuration2 = d2 / (nInnerRepetitions * nRepetitions);

  return {
    avDuration1: avDuration1,
    avDuration2: avDuration2
  };
};

/**
 * @description Performs the test, comparing two functions.
 *
 * @param {object} test Object describing the test
 * @param {function} callback Function to be called once the test ends
 * @param {object} config Config for test (loop sizes, etc.)
 */
export default function runTest(test, callback, config) {
  const N_LOOP_REPETITIONS = 800;
  const N_INNER_REPETITIONS = 200;
  const auxConfig = {
    nInnerRepetitions: config && config.nInnerRepetitions || N_INNER_REPETITIONS,
    nLoopRepetitions: config && config.nLoopRepetitions || N_LOOP_REPETITIONS,
  };

  const res = _fTestDouble(test.first.bind(test), test.second.bind(test), auxConfig.nInnerRepetitions, auxConfig.nLoopRepetitions);

  if (typeof callback === 'function') {
    callback(res);
  }
}