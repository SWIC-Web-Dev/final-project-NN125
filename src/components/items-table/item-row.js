export default function ItemRow(item) {
  return `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td>${item.category}</td>
      <td>${item.stock}</td>
    </tr>
  `;
}
