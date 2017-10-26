## Intro

This is a list of pairs of javascript snippets, each one containing an ES6 example along with the pre-ES6 equivalent code. That way we can compare and know whether the new syntax hits the performance or improves it. In many cases, that new way of writing ES6 code will be worth, but now you can decide if it makes sense to adjust some code occasionally. 

Most of the examples follow the Mozilla developer blog so that it is easy to inspect more examples and documentation.

## Installing

```sh
  npm install
```

Then, build the static site:

```sh
  npm run build
```

## Measuring performance

Here we take an approach that tries to measure performance directly on the play field while minimizing comparison errors.
To that end, we use a double loop and interleave executions of both samples. This way, we expect to balance the impact caused by cpu fluctuactions.  
  
As a result, we have the total amount of time consumed by each part. From these values, we extract an average and compare them. If they are reasonably similar, we consider them to be equivalent and we use green for both.


## Work in progress

This is an unfinished project: you can contribute by adding new tests, by improving the UI, the functionalities or event the spelling.  

Currently, tests are based on what I've found interesting about ES6 following this documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla
https://hacks.mozilla.org/category/es6-in-depth/


## TODOs

- Less difficult
  * Add a collapsible index, in order to navigate easily to each text
  * UI: progress bars
  * UI: cancel running tests

- More difficult
  * Improve performance measure: loop until percentual differences doesn't change from iteration to iteration
  * Add online tool for running user code tests (what if I want to know how many times a snipped could be run in a frame at 60FPS?)
  * Add service for popularity and sort by popularity
  * Add service for uploading tests results along with machine, browser and env data
  * Add service for adding new tests
  * UI: run on webworkers in order to leave UI responsive (would affect measurements?)


## Thanks to

* https://github.com/faisalman/ua-parser-js
* https://highlightjs.org
