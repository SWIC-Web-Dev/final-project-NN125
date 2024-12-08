export default (() => {
  let state = { items: [] };
  const listeners = [];

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      listeners.map((listener) => listener(state));
    },
    subscribe(listener) {
      listeners.push(listener);
    },
    addItem(id, name, description, price, category, stock) {
      state.items.push({
        id,
        name,
        description,
        price,
        category,
        stock,
      });
    },
  };
})();
