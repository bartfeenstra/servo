// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.cap.square
// Description:lineCap 'square' is rendered correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("lineCap 'square' is rendered correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.lineCap = 'square';
ctx.lineWidth = 20;
ctx.fillStyle = '#f00';
ctx.strokeStyle = '#0f0';
ctx.fillRect(15, 5, 20, 40);
ctx.beginPath();
ctx.moveTo(25, 15);
ctx.lineTo(25, 35);
ctx.stroke();
ctx.fillStyle = '#0f0';
ctx.strokeStyle = '#f00';
ctx.beginPath();
ctx.moveTo(75, 15);
ctx.lineTo(75, 35);
ctx.stroke();
ctx.fillRect(65, 5, 20, 40);
_assertPixel(offscreenCanvas, 25,4, 0,255,0,255, "25,4", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,5, 0,255,0,255, "25,5", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,6, 0,255,0,255, "25,6", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,44, 0,255,0,255, "25,44", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,45, 0,255,0,255, "25,45", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,46, 0,255,0,255, "25,46", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,4, 0,255,0,255, "75,4", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,5, 0,255,0,255, "75,5", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,6, 0,255,0,255, "75,6", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,44, 0,255,0,255, "75,44", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,45, 0,255,0,255, "75,45", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,46, 0,255,0,255, "75,46", "0,255,0,255");
t.done();

});
done();
