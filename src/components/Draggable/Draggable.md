### Example

```js
const render = () => (
  <div style={{ width: `100px`, height: `100px`, padding: '5px 8px', background: `white`, border: "1px solid black" }}>
    DRAG ME
  </div>
);
<div style={{ width: `500px`, height: `500px`, background: `white`, border: "1px solid black", color: 'black' }}>
  <Draggable initialPosition={{ x: 50, y: 50 }} isBounded onDoubleTap={() => console.log('double tap')} onPress={() => console.log('press')} render={render} />
</div>;
```
