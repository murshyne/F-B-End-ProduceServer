// eslint-disable-next-line react/prop-types
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={4}>{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
