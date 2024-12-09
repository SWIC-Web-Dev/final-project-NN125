import Button from "../button.js";

export default function ItemRow({
  id,
  name,
  description,
  price,
  category,
  stock,
}) {
  return `
    <tr class="border-b *:p-2" data-dish=${id}>
      <td>${id}</td>
      <td>${name}</td>
      <td>${description}</td>
      <td>${price}</td>
      <td>${category}</td>
      <td>${stock}</td>
      <td>${Button({ text: "Delete", additionalClasses: "bg-red-500 rounded text-white px-2 py-1" })}</td>
    </tr>
  `;
}
