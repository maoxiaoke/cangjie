import React from 'react'; 
import Cangjie from '/Users/maoxiaoke/ali-project/cangjie/src/index.tsx';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '仓颉，汉字创造者' }],
  },
]

const App = () => {
  return <div style={{ border: '1px solid red' }}>
    <Cangjie
      initialValue={initialValue}
    />
  </div>
}

export default App;