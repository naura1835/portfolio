const List = ({ items, listItemName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, id) => (
        <ItemComponent key={item.id ?? id} {...{ [listItemName]: item }} />
      ))}
    </>
  );
};

export default List;
