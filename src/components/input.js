export default function Input({ id, placeholder, addlClasses = "" }) {
  return `
    <input id="${id}" class="input ${addlClasses}" type="text" placeholder="${placeholder}" />
  `;
}
