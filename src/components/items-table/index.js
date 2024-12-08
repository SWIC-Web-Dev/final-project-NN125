import ItemRow from "./item-row";

export default function DishesTable(items) {
  return `
    <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
      <thead class="border-b border-orange-950 font-medium dark:border-white/10">
        <tr scope="col" class="px-6 py-4">
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(ItemRow).join("")}
      </tbody>
    </table>
  `;
}
