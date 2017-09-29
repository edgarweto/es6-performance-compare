import style from '../styles/main.scss';
import {tests as performanceTests} from './performanceTests.js';

buildApp(performanceTests);

function buildApp(tests) {
  var Handlebars = require('handlebars-template-loader/runtime');
  
  // Obtain a suitable param object for each handlebar test and
  // group for the app template tpl-test-container
  var testsContexts = tests.map(buildTestTplContext),
    appContext = {
      numTests: tests.length,
      testsContexts: testsContexts
    };
  
  Handlebars.registerPartial('tpl-test', require("../templates/tpl-test.hbs"));


  Handlebars.registerHelper("initTest", function (testContext) {

    console.log("init test " + testContext.id);

    //connectTest(testContext);

    return "";
  });

  var testContainerToHtml = require("../templates/tpl-test-container.hbs");
  document.getElementById('app').innerHTML = testContainerToHtml(appContext);

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");


    testsContexts.forEach(connectTest);
  });

}

function buildTestTplContext(test, idx) {
  return {
    id: idx,
    title: test.title,
    code1: test.code1,
    code2: test.code2,
    first: test.first,
    second: test.second
  };
}


import TestWidget from './testWidget.js';
import runTest from './tester.js';

function connectTest(testContext) {
  var testItem = new TestWidget(testContext, runTest);
  testItem.init();
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