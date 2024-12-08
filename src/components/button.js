export default function Button(type = "button", addlClasses = "", text) {
  return `<button type="${type}" class="button ${addlClasses} rounded bg-orange-300 hover:bg-orange-500 transition text-white p-2">${text}</button>`;
}
