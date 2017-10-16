## Intro

This is a list of pairs of javascript snippets: an ES6 example along with the pre-ES6 equivalent code. That way we can compare and know whether the new syntax hits the performance. In many cases, that new way of writing ES6 code will be worth, but now you can decide if it makes sense to adapt some code occasionally. 

Most of the examples follow the Mozilla developer blog so that it is easy to inspect more examples and documentation.



## Measuring performance

Here we take an aproach that tries to measure performance directly on the field while minimizing comparison errors.
To that end, we use a double loop and interleave executions of both functions. This way, we expect to balance the impact caused by cpu fluctuactions.


# THANKS TO
*https://github.com/faisalman/ua-parser-js
*https://highlightjs.org/


## IDEAS

* Following this implementations:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla

* Interesting: http://jsben.ch, jsperf

## TODOs

* Align tests with mozilla-developers examples of ES6
* Add a collapsible index, in order to navigate easily to each text

===



* Add online tool for running user code tests (what if I want to know how many times a snipped could be run in a frame at 60FPS?)

* Add service for popularity and sort by popularity
* Add service for uploading tests results along with machine, browser and env data
* Add service for adding new tests

* Improve performance measure: loop until percentual differences doesn't change from iteration to iteration
* UI: run on webworkers in order to leave UI responsive
* UI: progress bars
* UI: cancel running tests

