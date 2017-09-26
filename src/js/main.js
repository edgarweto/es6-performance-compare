
import {tests as performanceTests} from './performanceTests.js';
import Handlebars from 'handlebars';

import style from '../styles/main.scss';

buildApp(performanceTests);


function buildApp(tests) {
  
  // Obtain a suitable param object for each handlebar test and
  // group for the app template tpl-test-container
  var testsContext = tests.map(buildTestTplContext),
    appContext = {
      numTests: tests.length,
      testsContext: testsContext
    };
  
  var testContainerToHtml = require("../templates/tpl-test-container.hbs");
  document.getElementById('app').innerHTML = testContainerToHtml(appContext);

  // clicks
  testsContext.forEach(connectTest);

  
}

function buildTestTplContext(test, idx) {
  return {
    id: getTestId(idx),
    title: test.title,
    code1: test.code1,
    code2: test.code2,
    first: test.first,
    second: test.second
  };
}

function getTestId(idx) {
  return 'test-' + idx;
}
function getTestValuesIds(testIdx, idx) {
  return {
    milliseconds: `test${testIdx}-ms-${idx}`,
    relative: `test${testIdx}-rel-${idx}`
  };
}

function connectTest(test) {
  var testItem = wrapTest(test);
  testItem.init();
}



import {fTestDouble as tester} from './tester.js';

function runTest(test, callback) {
  const N_LOOP_REPETITIONS = 800;
  const N_INNER_REPETITIONS = 200;


  const res = tester(test.first, test.second, N_INNER_REPETITIONS, N_LOOP_REPETITIONS),
    ratio = (100 * res.avDuration1 / res.avDuration2).toFixed(2);

  if (typeof callback === 'function') {
    callback(res);
  }
}

function wrapTest(test) {
  var valueIds1 = getTestValuesIds(1, test.id),
    valueIds2 = getTestValuesIds(2, test.id);

  var $test = document.getElementById(test.id),
    $values1 = {
      milliseconds: document.getElementById(valueIds1.milliseconds),
      relative: document.getElementById(valueIds1.relative)
    },
    $values2 = {
      milliseconds: document.getElementById(valueIds2.milliseconds),
      relative: document.getElementById(valueIds2.relative)
    };

  var wrapTest = {
    init: function () {
      $values1.milliseconds.innerHTML = 0;
      $values1.relative.innerHTML = '0 %';

      $values2.milliseconds.innerHTML = 0;
      $values2.relative.innerHTML = '0 %';

      var $btn = document.getElementById(`execute-text-${test.id}`);
      $btn.onclick = this.onRunTest.bind(this);
    },
    beginTest: function () {
      $test.classList.add('running');
    },
    endTest: function () {
      $test.classList.remove('running');
    },
    onRunTest: function () {
      wrapTest.beginTest();
      console.log("Run test " + test.id);

      // Change to requestAnimationFrame
      setTimeout(function () {
        runTest(test, function (result) {
          wrapTest.endTest();
          console.log(result);

          $values1.milliseconds.innerHTML = result.avDuration1;
          $values1.relative.innerHTML = '0 %';

          $values2.milliseconds.innerHTML = result.avDuration2;
          $values2.relative.innerHTML = '0 %';
        });
      }, 100);
    }
  };

  return wrapTest;
}


/*

(function () {
  const test = {
    first: function () {
      var u = {a: 1, b: 2},
        a = u.a,
        b = u.b;
    },
    second: function () {
      var u = {a: 1, b: 2},
        {a, b} = u;
    }
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


  const N_LOOP_REPETITIONS = 800;
  const N_INNER_REPETITIONS = 200;



  const res = fTestDouble(test.first, test.second, N_INNER_REPETITIONS, N_LOOP_REPETITIONS),
    ratio = (100 * res.avDuration1 / res.avDuration2).toFixed(2);

  console.log("Double test:", res.avDuration1, res.avDuration2, ratio + '%');

})();

*/