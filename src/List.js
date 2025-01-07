

function List({items}) {
  return (
   <ul>{items.map((index, item)=>(<li key={index}>{item}</li>))}</ul>
  );
}

export default List;