export default function Input({ id, placeholder, additionalClasses = "" }) {
  return `
    <input id="${id}" class="input ${additionalClasses}" type="text" placeholder="${placeholder}" />
  `;
}
