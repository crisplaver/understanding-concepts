import { memo, useState } from 'react'

const menuItems = [
  { key: 'key1', label: 'Label 1' },
  { key: 'key2', label: 'Label 2' },
  { key: 'key3', label: 'Label 3' },
  { key: 'key4', label: 'Label 4' },
];

function App() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1)
  }

  return (
    <div style={{ padding: 12 }}>
      <div style={{ padding: 12, border: '1px solid lightgrey' }}>
        <Count value={count} />
        <button onClick={handleClickButton} style={{ marginTop: 6 }}>Count Up</button>
      </div>
      <div style={{ padding: 12, border: '1px solid lightgrey', marginTop: 12 }}>
        <div style={{ marginBottom: 6 }}>Menu with props defined inside of component</div>
        <Menu items={[
          { key: 'key1', label: 'Label 1' },
          { key: 'key2', label: 'Label 2' },
          { key: 'key3', label: 'Label 3' },
          { key: 'key4', label: 'Label 4' },
        ]} />
      </div>
      <div style={{ padding: 12, border: '1px solid lightgrey', marginTop: 12 }}>
        <div style={{ marginBottom: 6 }}>Menu with props defined outside of component</div>
        <Menu items={menuItems} />
      </div>
      <div style={{ padding: 12, border: '1px solid lightgrey', marginTop: 12 }}>
        <div style={{ marginBottom: 6 }}>Memoized Menu with props defined inside of component</div>
        <MemoizedMenu items={[
          { key: 'key1', label: 'Label 1' },
          { key: 'key2', label: 'Label 2' },
          { key: 'key3', label: 'Label 3' },
          { key: 'key4', label: 'Label 4' },
        ]} />
      </div>
      <div style={{ padding: 12, border: '1px solid lightgrey', marginTop: 12 }}>
        <div style={{ marginBottom: 6 }}>Memoized Menu with props defined outside of component</div>
        <MemoizedMenu items={menuItems} />
      </div>
    </div >
  )
}

const Count = ({ value }) => {
  return (
    <div>
      Count : {value}
    </div>
  )
}

const Menu = (({ items }) => {
  return (
    <div>
      <MenuItems
        items={items} />
    </div>
  )
})

const MemoizedMenu = memo((({ items }) => {
  return (
    <div>
      <MenuItems
        items={items} />
    </div>
  )
}))


const MenuItems = (({ items }) => {
  return (
    <div>
      {items.map(item => (
        <li key={item.key}>{item.label}</li>
      ))}
    </div>
  )
})

export default App;
