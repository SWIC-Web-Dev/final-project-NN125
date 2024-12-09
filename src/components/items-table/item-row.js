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
    <tr class="border-b *:p-2" data-item=${id}>
      <td>${id}</td>
      <td>${name}</td>
      <td>${description}</td>
      <td>${price}</td>
      <td>${category}</td>
      <td>${stock}</td>
      <td>${Button({ type: "button", text: "Delete", additionalClasses: "bg-red-500 rounded text-white px-2 py-1 delete-button" })}</td>
    </tr>
  `;
}
