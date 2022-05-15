import React from 'react'; 
import Cangjie from '/Users/maoxiaoke/ali-project/cangjie/src/index.tsx';

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