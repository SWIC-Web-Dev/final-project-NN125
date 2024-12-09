import Button from "./components/button";
import Input from "./components/input";
import ItemsTable from "./components/items-table";
import initialItems from "./db";
import state from "./state";

const app = document.querySelector("#app");

// Initialize with our data
state.setState({ items: initialItems });

function render() {
  // Destructure the known property from the state
  const { items } = state.getState();

  const formFields = [
    { id: "id", placeholder: "ID" },
    { id: "name", placeholder: "Name" },
    { id: "description", placeholder: "Description" },
    { id: "price", placeholder: "Price" },
    { id: "category", placeholder: "Category" },
    { id: "stock", placeholder: "Stock" },
  ];

  app.innerHTML = `
    <div class="max-w-4xl mx-auto p-4">
      <h1
      class="m-4 space-y-4 mb-8 text-center text-2xl font-extrabold text-slate-300 sm:text-3xl md:text-4xl lg:text-5xl"
      >
      Item Database
      </h1>
      <form id="itemForm" class="space-y-4 mb-8">
        ${formFields
          .map((field) =>
            Input({
              ...field,
              additionalClasses: "mb-2",
            }),
          )
          .join("")}
        
          ${Button({
            type: "submit",
            additionalClasses:
              "w-full bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-600",
            text: "Add Item",
          })}
      </form>
      
      ${ItemsTable(items)}
    </div>
  `;
  // Attach the event listener to the form after rendering
  const form = document.getElementById("itemForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newId = form.id.value;

    // Check if the ID already exists in the current state
    const { items } = state.getState();
    const idExists = items.some((item) => item.id.toString() === newId);

    if (idExists) {
      // Display an error message (you can customize this as needed)
      alert("An item with this ID already exists. Please use a different ID.");
      return; // Prevent submission
    }

    // These come from the input ids. We know they exist because we created them.
    state.addItem({
      id: form.id.value,
      name: form.name.value,
      description: form.description.value,
      price: form.price.value,
      category: form.category.value,
      stock: form.stock.value,
    });
  });

  // Attach the delete event listener to the table after rendering
  const table = document.querySelector("table"); // Adjust this selector based on your actual table structure
  table.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-button"); // Adjust the class name as necessary
    if (deleteButton) {
      const itemId = deleteButton.closest("tr").dataset.item; // Assuming the item ID is stored in the row's dataset
      state.deleteItem(itemId);
    }
  });
}

// We want the render function to run with the new state every time it changes
state.subscribe(render);

render();
