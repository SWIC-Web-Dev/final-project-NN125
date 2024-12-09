import ItemRow from "./item-row";

export default function ItemsTable(items) {
  return `
    <table class="w-full mt-4 border-collapse border bg-gray-100">
      <thead>
        <tr class="*:p-2 *:text-left">
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item) => ItemRow(item)).join("")}
      </tbody>
    </table>
  `;
}
