export default (() => {
  // Establishes private state
  let state = { items: [] };

  // List of listeners to be called when the state changes
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;

      // Call all listeners to notify them that the state has changed
      listeners.forEach((listener) => {
        listener(state);
      });
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addItem({ id, name, description, price, category, stock }) {
      // Update the state by mixing the new dish with the existing dishes
      const newItems = [
        ...state.items,
        {
          id,
          name,
          description,
          price,
          category,
          stock,
        },
      ];

      // Update the state
      this.setState({ items: newItems });
    },
    deleteItem(itemId) {
      // Filter out the dish with the given name
      const newItems = state.items.filter(
        // * Be sure to compare the same type of values
        (item) => item.id.toString() !== itemId, // Convert item.id to string for comparison
      );

      this.setState({ items: newItems });
    },
  };
})();
