// Instantiate Handsfree with MediaPipe Hands
// @see https://handsfree.js.org/ref/model/hands.html
const handsfree = new Handsfree({
  hands: true,
  showDebug: true
})

// Use the "pinchers" plugin
// @see https://handsfree.js.org/ref/plugin/pinchers.html#pinch-states-with-pinchstate
handsfree.plugin.pinchers.enable()

// Let's create a plugin that presses a key with each pinch
// Left pinky = 1
// Left Thumb = 4
// Right Thumb = 5
// Right Pinky = 8
handsfree.use('fingerKeys', ({hands}) => {
  // Bail if no hands are detected
  if (!hands.pinchState) return
  
  // hands.pinchState[x][y]
  // [x]: 0 = left hand, 1 = right hand
  // Left pinky
  if (hands.pinchState[0][3] === 'start') {pinchKey(1)}
  if (hands.pinchState[0][3] === 'released') {releaseKey(1)}
  
  // Left ring
  if (hands.pinchState[0][2] === 'start') {pinchKey(2)}
  if (hands.pinchState[0][2] === 'released') {releaseKey(2)}
  
  // Left middle
  if (hands.pinchState[0][1] === 'start') {pinchKey(3)}
  if (hands.pinchState[0][1] === 'released') {releaseKey(3)}
  
  // Left ring
  if (hands.pinchState[0][0] === 'start') {pinchKey(4)}
  if (hands.pinchState[0][0] === 'released') {releaseKey(4)}
  
  // Right thumb
  if (hands.pinchState[1][0] === 'start') {pinchKey(5)}
  if (hands.pinchState[1][0] === 'released') {releaseKey(5)}
  
  // Right middle
  if (hands.pinchState[1][1] === 'start') {pinchKey(6)}
  if (hands.pinchState[1][1] === 'released') {releaseKey(6)}
  
  // Right ring
  if (hands.pinchState[1][2] === 'start') {pinchKey(7)}
  if (hands.pinchState[1][2] === 'released') {releaseKey(7)}
  
  // Right pinky
  if (hands.pinchState[1][3] === 'start') {pinchKey(8)}
  if (hands.pinchState[1][3] === 'released') {releaseKey(8)}
})

/**
 * Emits a keydown
 * @param {String} key The key to press
 */
function pinchKey (key) {
  document.dispatchEvent(new KeyboardEvent('keydown', {key}))
}


/**
 * Emits a keyup
 * @param {String} key The key to press
 */
function releaseKey (key) {
  document.dispatchEvent(new KeyboardEvent('keyup', {key}))
}