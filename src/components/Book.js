const Book = (bookObject) => {
  const { ID, title, category } = bookObject;
  return (
    <tr key={ID}>
      <td>{ID}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
