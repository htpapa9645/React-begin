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

export function App4(){
  const items = [
    <li key='사과'>사과</li>
    , <li key='바나나'>바나나</li>
    , <li key='딸기'>딸기</li>
  ];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App4</h1>
      <ul>{items}</ul>
    </div>
  ); 
}

export function App5(){
  const items = ['사과', '바나나', '딸기'];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App5</h1>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export function App6(){
  const items = ['사과0', '바나나1', '딸기2'];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App6</h1>
      <ul>
        {
          items.map((item, index) => (
            <ListItem key={index} text={item} />
          ))
        }
      </ul>
    </div>
  );
}

export function App7() {
  const renderItems = [];
  const items = ['사과', '바나나', '딸기'];
  for (let i = 0; i < items.length; i++){
    renderItems.push(<li key={i}>{items[i]}</li>);
  }
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App7</h1>
      <ul>
        {renderItems}
      </ul>
    </div>
  );
}

export function App8(){
  const items = ['사과', '바나나', '딸기'];
  const elements: React.ReactNode[] = [];
  items.forEach((item, index) => {
    elements.push(<li key={index}>{item}</li>);
  });
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App8</h1>
      <ul>
        {elements}
      </ul>
    </div>
  );
}

export function App9(){
  const items = [
    <li key='1'>사과</li>,
    <li key='2'>바나나</li>,
    <li key='3'>딸기</li>,
  ];
  return (
    <div>
      <hr style={{borderColor: 'red'}} />
      <h1>App9</h1>
      <ul>
        {items.reduce<React.ReactNode[]>((acc, item) => {
          acc.push(item);
          return acc;
        }, [])}
      </ul>
    </div>
  );
}