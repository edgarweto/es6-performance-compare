import {test as exConst} from './ex01-const';



const N_REPETITIONS = 10000;

function runPerformanceTest(test) {
  console.log(`Start test: ${test.name}`);

  
  runFunctionTest(test.fName, N_REPETITIONS, test.first.bind(test));
  runFunctionTest(test.sName, N_REPETITIONS, test.second.bind(test));

  console.log('. . . . . . ');
  console.log('');
}

function runFunctionTest(testName, nRepetitions, func) {
  console.time(testName);

  for (let i = 0; i < nRepetitions; i++) {
    func();
  }

  console.timeEnd(testName);  
}

runPerformanceTest(exConst);

runPerformanceTest(exConst);
