
export default class TestWidget {
  
  constructor(testContext, tester) {
    this._testContext = testContext;
    this._testId = testContext.id;
    this._slots = [this._getTestValuesIds(1, this._testId), this._getTestValuesIds(2, this._testId)];
    this._tester = tester;
  }
  
  _getTestValuesIds(testIdx, testId) {
    return {
      milliseconds: `test${testIdx}-ms-${testId}`,
      relative: `test${testIdx}-rel-${testId}`
    };
  }
  _getTestId(testId) {
    return 'test-' + testId;
  }
  
  init() {
    debugger;
    
    this._$test = document.getElementById(this._getTestId(this._testId));

    this._$slots = [{
      milliseconds: document.getElementById(this._slots[0].milliseconds),
      relative: document.getElementById(this._slots[0].relative)
    }, {
      milliseconds: document.getElementById(this._slots[1].milliseconds),
      relative: document.getElementById(this._slots[1].relative)
    }];


    this._$slots[0].milliseconds.innerHTML = 0;
    this._$slots[0].relative.innerHTML = '0 %';

    this._$slots[1].milliseconds.innerHTML = 0;
    this._$slots[1].relative.innerHTML = '0 %';

    this._$runBtn = document.getElementById(`execute-text-${test.id}`);
    this._$runBtn.onclick = this.onRunTest.bind(this);
  }

  _beginTest () {
    this._$test.classList.add('running');
  }

  _endTest () {
    this._$test.classList.remove('running');
  }

  _onRunTest () {
    this._beginTest();
    console.log("Run test " + this._testId);

    // Let the UI to be updated
    window.requestAnimationFrame(this._runTest.bind(this));



    // setTimeout(function () {
    //   runTest(this._testContext, function (result) {
    //     wrapTest.endTest();
    //     console.log(result);

    //     $values1.milliseconds.innerHTML = result.avDuration1;
    //     $values1.relative.innerHTML = '0 %';

    //     $values2.milliseconds.innerHTML = result.avDuration2;
    //     $values2.relative.innerHTML = '0 %';
    //   });
    // }, 100);
  }

  _onTestFinished (result) {
    this.endTest();
    console.log(result);

    this._$slots[0].milliseconds.innerHTML = result.avDuration1;
    this._$slots[0].relative.innerHTML = '0 %';

    this._$slots[1].milliseconds.innerHTML = result.avDuration2;
    this._$slots[1].relative.innerHTML = '0 %';
  }

  _runTest () {
      this._tester(this._testContext, this._onTestFinished.bind(this));
  }

}

