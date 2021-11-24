const Book = (book) => {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
