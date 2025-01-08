const RenderList = ({ items, renderItem, listClassName, itemClassName }) => {
  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>
          {renderItem?.(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default RenderList;
