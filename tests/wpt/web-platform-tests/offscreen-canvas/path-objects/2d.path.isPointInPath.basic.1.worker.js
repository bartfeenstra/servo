// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.isPointInPath.basic.1
// Description:isPointInPath() detects whether the point is inside the path
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("isPointInPath() detects whether the point is inside the path");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.rect(0, 0, 20, 20);
_assertSame(ctx.isPointInPath(10, 10), true, "ctx.isPointInPath(10, 10)", "true");
_assertSame(ctx.isPointInPath(30, 10), false, "ctx.isPointInPath(30, 10)", "false");
t.done();

});
done();
