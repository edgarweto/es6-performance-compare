/**
 * @fileoverview Implements test widget, a wrapper for each test that gives functionality
 *  and presentation logics.
 *
 */
export default class TestWidget {
  
  /**
   * @description Saves essential data from current test
   *
   * @param {object} testContext Parameters for the test
   * @param {object} tester The orchestrator for testing
   * @param {int} nRepetitions Number of repetitions of external loop
   * @param {int} nInnerRepetitions Inside external loop, number of reps for each function
   */
  constructor(testContext, tester, nRepetitions, nInnerRepetitions) {
    this._testContext = testContext;
    this._testId = testContext.id;
    this._slots = [this._getTestValuesIds(1, this._testId), this._getTestValuesIds(2, this._testId)];
    this._tester = tester;
    this._nRepetitions = nRepetitions;
    this._nInnerRepetitions = nInnerRepetitions;

    this._MAX_COMPARABLE_VALUES = 0.025;
  }
  
  /**
   * @description Caches and connects the DOM elements of the test
   */
  init() {
    
    this._$test = document.getElementById(this._getTestId(this._testId));
    this._$slots = [{
      milliseconds: document.getElementById(this._slots[0].milliseconds),
      relative: document.getElementById(this._slots[0].relative)
    }, {
      milliseconds: document.getElementById(this._slots[1].milliseconds),
      relative: document.getElementById(this._slots[1].relative)
    }];

    this._$slots[0].milliseconds.innerHTML = 0;
    this._$slots[1].milliseconds.innerHTML = 0;

    const testParts1 = this._getTestPartsIds(this._testId, 1),
      testParts2 = this._getTestPartsIds(this._testId, 2);

    this._$testBodys = [{
      code: document.getElementById(testParts1.code),
      result: document.getElementById(testParts1.result)
    }, {
      code: document.getElementById(testParts2.code),
      result: document.getElementById(testParts2.result)
    }];

    this._$testEquivalences = [{
      eqSeconds: document.getElementById(testParts1.eqSeconds),
      eqFrames: document.getElementById(testParts1.eqFrames)
    }, {
      eqSeconds: document.getElementById(testParts2.eqSeconds),
      eqFrames: document.getElementById(testParts2.eqFrames)
    }];

    this._$runBtn = document.getElementById(`execute-text-${this._testId}`);
    this._$runBtn.onclick = this._onRunTest.bind(this);
  }

  /**
   * @description Returns the DOM ids of some test elements
   *
   * @param {int} testIdx 0 for the first (left), 1 for the second (right)
   * @param {int} testId Index of the text
   *
   * @return {object} The elements DOM id's
   * @private
   */
  _getTestValuesIds(testIdx, testId) {
    return {
      milliseconds: `test${testIdx}-ms-${testId}`,
      relative: `test${testIdx}-rel-${testId}`
    };
  }
  
  /**
   * @description Returns the DOM ids of some test elements
   *
   * @param {int} testIdx 0 for the first (left), 1 for the second (right)
   * @param {int} testId Index of the text
   *
   * @return {object} The elements DOM id's
   * @private
   */
  _getTestPartsIds(testId, testIdx) {
    return {
      code: `test-${testId}-code-${testIdx}`,
      result: `test-${testId}-result-${testIdx}`,
      eqSeconds: `test-${testId}-per-sec-${testIdx}`,
      eqFrames: `test-${testId}-per-frame-${testIdx}`
    };
  }

  /**
   * @description Returns the DOM id of a test
   * @param {int} testId An index used as identifier
   *
   * @return {string} The DOM id
   * @private
   */
  _getTestId(testId) {
    return 'test-' + testId;
  }

  /**
   * @description Blocks UI before test is run
   *
   * @private
   */
  _beginTest () {
    this._resetTestUI();

    this._$test.classList.add('running');
  }

  /**
   * @description Restores UI after test has run
   *
   * @private
   */
  _endTest () {
    this._$test.classList.remove('running');
  }

  /**
   * @description Callback that blocks the UI and launches the test
   *
   * @private
   */
  _onRunTest () {
    this._beginTest();

    // Let the UI to be updated at least before the test
    setTimeout(this._runTest.bind(this), 100);
  }

  /**
   * @description Once the test is finished, we update the interface
   * @param {object} result The average durations of tests
   *
   * @private
   */
  _onTestFinished (result) {
    this._endTest();
    this._printTestResults(result);
  }

  /**
   * @description Resets test UI
   *
   * @private
   */
  _resetTestUI () {
    this._$test.classList.remove('running');
    this._$test.classList.remove('equivalents');

    ['faster', 'slower'].forEach(function (className) {
      this._$testBodys[0].code.classList.remove(className);
      this._$testBodys[0].result.classList.remove(className);
      this._$testBodys[1].code.classList.remove(className);
      this._$testBodys[1].result.classList.remove(className);
    }.bind(this));
  }

  /**
   * @description Prints the test results
   * @param {object} result The average durations of tests
   *
   * @private
   */
  _printTestResults (result) {
    this._$slots[0].milliseconds.innerHTML = this._toTimeUnits(result.avDuration1);
    this._$slots[1].milliseconds.innerHTML = this._toTimeUnits(result.avDuration2);

    let ratios = this._calcRatios(result.avDuration1, result.avDuration2);
    this._$slots[0].relative.innerHTML = ratios.first;
    this._$slots[1].relative.innerHTML = ratios.second;

    if (ratios.equivalent) {
        this._$testBodys[0].result.classList.add('faster');
        this._$testBodys[1].result.classList.add('faster');
    } else {
      if (result.avDuration1 < result.avDuration2) {
        this._$testBodys[0].result.classList.add('faster');
        this._$testBodys[1].result.classList.add('slower');
      } else {
        this._$testBodys[0].result.classList.add('slower');
        this._$testBodys[1].result.classList.add('faster');
      }
    }

    // Print equivalences
    this._$testEquivalences[0].eqSeconds.innerHTML = this._equivalenceSeconds(result.avDuration1);
    this._$testEquivalences[0].eqFrames.innerHTML = this._equivalenceFrames(result.avDuration1);
    this._$testEquivalences[1].eqSeconds.innerHTML = this._equivalenceSeconds(result.avDuration2);
    this._$testEquivalences[1].eqFrames.innerHTML = this._equivalenceFrames(result.avDuration2);
  }

  /**
   * @description Transform milliseconds value into a readable value
   * @param {float} ms Average milliseconds per iteration
   *
   * @return {string} A string with milliseconds or microseconds
   * @private
   */
  _toTimeUnits (ms) {
    let result = '';

    if (ms < 1) {
      result = (1000 * ms).toFixed(2) + 'μs';
    } else {
      result = ms.toFixed(2) + 'ms';
    }
    return result;
  }

  /**
   * @description Calculates wich is faster/slower along with their percentages
   * @param {float} value1 Average milliseconds per iteration of first function
   * @param {float} value2 Average milliseconds per iteration of second function
   *
   * @return {object} An object with first and second relative time description
   * @private
   */
  _calcRatios (value1, value2) {
    const ratios = {
      first: '',
      second: ''
    };

    if (value1 < value2) {
      const ratio1 = value2 / value1 - 1,
        x = (100 * ratio1).toFixed(2);

      const ratio2 = 1 - value1 / value2,
        y = (100 * ratio2).toFixed(2);

      const times = Math.floor(0.5 + value2 / value1);
      ratios.first = `${y}% (~${times}x) faster`;
      ratios.second = `${x}% slower`;
    } else if (value1 === value2) {
      ratios.first = `equivalent`;
      ratios.second = `equivalent`;
    } else {
      const ratio1 = value1 / value2 - 1,
        x = (100 * ratio1).toFixed(2);

      const ratio2 = 1 - value2 / value1,
        y = (100 * ratio2).toFixed(2);

      ratios.first = `${y}% slower`;

      const times = Math.floor(0.5 + value2 / value1);
      ratios.second = `${x}% (~${times}x) faster`;
    }

    ratios.equivalent = this._areComparableValues(value1, value2);

    return ratios;
  }

  /**
   * @description Returns if we consider that the nuumbers are similar
   * @param {float} x, value between 0 and 1
   * @param {float} y, value between 0 and 1
   *
   * @return {bool}
   * @private
   */
  _areComparableValues (x, y) {
    const d = x - y < 0 ? y - x : x - y,
      m = x + y,
      r = d / m;

    return r < this._MAX_COMPARABLE_VALUES;
  }

  /**
   * @description Returns number of times an action that spans for ms milliseconds can be
   *  performed in one second.
   * @param {float} ms, milliseconds
   *
   * @return {int}
   * @private
   */
  _equivalenceSeconds (ms) {
    return Math.floor(1000 / ms);
  }

  /**
   * @description Returns number of times an action that spans for ms milliseconds can be
   *  performed in one frame (at 60 FPS).
   * @param {float} ms, milliseconds
   *
   * @return {int}
   * @private
   */
  _equivalenceFrames (ms) {
    return Math.floor(1000 / (60 * ms));
  }

  /**
   * @description Runs the test and calls a callback once finished
   *
   * @private
   */
  _runTest () {
      this._tester(this._testContext, this._onTestFinished.bind(this), {
        nLoopRepetitions: this._nRepetitions,
        nInnerRepetitions: this._nInnerRepetitions
      });
  }

}

