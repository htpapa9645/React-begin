export default function App(){
  const items = ['item1', 'item2', 'item3'];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App</h1>
      {items}
    </div>
  );
}

export function App2() {
  const items = [
    <li key='0'>아이템 1</li>
    , <li key='1'>아이템 2</li> 
    , <li key='2'>아이템 3</li>
  ];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App2</h1>
      <ul>{items}</ul>
    </div>
  );
}

import ListItem from "./components/ListItem";
export function App3(){
  const items = [
    <ListItem key='0' text='아이템 10' />
    ,<ListItem key='1' text='아이템 20' />
    ,<ListItem key='2' text='아이템 30' />
  ];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App3</h1>
      <ul>{items}</ul>
    </div>
  ); 
}