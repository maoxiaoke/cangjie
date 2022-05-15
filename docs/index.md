# 仓颉

```jsx preview
import Cangjie from '../src/index.tsx';

const initialValue = [
  {
    type: 'p',
    children: [{ text: '仓颉，汉字创造者' }],
  },
]

const App = () => {
  return <div>
    <Cangjie
      initialValue={initialValue}
    />
  </div>
}

export default App;
```
