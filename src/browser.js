let tests = [{
  name: 'const vs var',
  fName: 'var',
  sName: 'const',

  value: 0,
  first: function () {
    var x = 5;
    if (x) {
      this.value++;
    }
  },
  second: function () {
    const x = 5;
    if (x) {
      this.value++;
    }
  }
}, {
  name: 'let vs var',
  fName: 'var',
  sName: 'let',

  value: 0,
  first: function () {
    var x = 5;
    if (x) {
      this.value++;
    }
  },
  second: function () {
    let x = 5;
    if (x) {
      this.value++;
    }
  }
}, {
  name: 'let in for',
  fName: 'let out of for',
  sName: 'let inside for',

  value: 0,
  first: function () {
    let i = 0;
    for (i; i < 999; i++) {
      this.value++;
    }
  },
  second: function () {
    for (let i = 0; i < 999; i++) {
      this.value++;
    }
  }
}, {
  name: 'const vs var',
  fName: 'var',
  sName: 'const',

  value: 0,
  first: function () {
    var x = 5;
    if (x) {
      this.value++;
    }
  },
  second: function () {
    const x = 5;
    if (x) {
      this.value++;
    }
  }
}];

/**
 **********************************************************************
 */
(function (tests) {
  const N_REPETITIONS = 100000;

  function runPerformanceTest(test) {
    console.log(`Start test: ${test.name}`);

    
    runFunctionTest(test.fName, N_REPETITIONS, test.first.bind(test));
    runFunctionTest(test.sName, N_REPETITIONS, test.second.bind(test));

    console.log('');
    console.log('');
  }

  function runFunctionTest(testName, nRepetitions, func) {
    console.time(testName);
    for (let i = 0; i < nRepetitions; i++) {
      func();
    }
    console.timeEnd(testName);  
  }

  tests.map(runPerformanceTest);
})(tests);