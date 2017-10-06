import style from '../styles/main.scss';
import {tests as performanceTests} from './performanceTests.js';

const N_LOOP_REPETITIONS = 800;
const N_INNER_REPETITIONS = 200;


buildApp(performanceTests);

function buildApp(tests) {
  var Handlebars = require('handlebars-template-loader/runtime');
  
  // Obtain a suitable param object for each handlebar test and
  // group for the app template tpl-test-container
  var testsContexts = tests.map(buildTestTplContext),
    appContext = {
      numTests: tests.length,
      nInnerRepetitions: N_INNER_REPETITIONS,
      nLoopRepetitions: N_LOOP_REPETITIONS,
      testsContexts: testsContexts
    };
  
  Handlebars.registerPartial('tpl-test', require("../templates/tpl-test.hbs"));

  var testContainerToHtml = require("../templates/tpl-test-container.hbs");
  document.getElementById('app').innerHTML = testContainerToHtml(appContext);

  document.addEventListener("DOMContentLoaded", function () {
    testsContexts.forEach(connectTest);
  });

}

function buildTestTplContext(test, idx) {
  return {
    id: idx,
    title: test.title,
    code1: test.first.toString(), //test.code1,
    code2: test.code2,
    first: test.first,
    second: test.second,
    refs: test.refs
  };
}

import TestWidget from './testWidget.js';
import runTest from './tester.js';

function connectTest(testContext) {
  var testItem = new TestWidget(testContext, runTest, N_LOOP_REPETITIONS, N_INNER_REPETITIONS);
  testItem.init();
}