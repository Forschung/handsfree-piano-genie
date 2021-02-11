Piano Genie
==============
Have some fun pretending you're a piano virtuoso using machine learning!

Use the **1-8** numbered keys on your keyboard (or the home row **a-f** and **j-;**) or **touch** the coloured blocks to play the piano. Use the **space bar** to control the sustain pedal. 

The more you pretend you're a real player, the better the melody (and you!) will sound.

---

# Remix notes

This uses the [Pincher Plugin of Handsfree.js](https://handsfree.js.org/ref/plugin/pinchers.html) to emit keyboard keys based on the pinched finger:

```js
handsfree.use('fingerKeys', ({hands}) => {
  // Bail if no hands are detected
  if (!hands.pinchState) return
  
  // Left pinky
  if (hands.pinchState[0][3] === 'start') {pinchKey(1)}
  if (hands.pinchState[0][3] === 'released') {releaseKey(1)}
  
  // ...
})
```