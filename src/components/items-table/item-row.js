export default function ItemRow(item) {
  return `
    <tr>
      <td>${item.name}</td>
      <td>${item.status}</td>
      <td>${item.assignedTo}</td>
      <td>${item.estimatedTime}</td>
      <td>${item.temperature}</td>
    </tr>
  `;
}
