import Button from "./components/button";
import ItemsTable from "./components/items-table";
import Input from "./components/input";
import initialItems from "./db";
import state from "./state";

const app = document.querySelector("#app");

// Initialize with our data
state.setState({ items: initialItems });

function render() {
  const { items } = state.getState();

  app.innerHTML = `
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <form id="itemForm" class="space-x-4 p-4">
            ${Input({ id: "name", placeholder: "Dish name" })}
            ${Input({ id: "status", placeholder: "Status" })}
            ${Input({ id: "assignedTo", placeholder: "Assigned to" })}
            ${Input({ id: "estimatedTime", placeholder: "Estimated time" })}
            ${Input({ id: "temperature", placeholder: "Temperature" })}
            ${Input({ id: "temperature", placeholder: "Temperature" })}
            ${Button("submit", "", "Add Dish")}
          </form>
        </div>
      </div>
    </div>
  </div>
    
    ${ItemsTable(items)}
  `;
}

state.subscribe(render);
render();

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  state.addItem(
    form.name.value,
    form.status.value,
    form.assignedTo.value,
    form.estimatedTime.value,
    form.temperature.value,
  );
  form.reset();

  // Trigger a re-render
  state.setState({ items: state.getState().items });
}

// Attach the event listener to the form after rendering
document.addEventListener("submit", (event) => {
  if (event.target.id === "itemForm") {
    handleSubmit(event);
  }
});
