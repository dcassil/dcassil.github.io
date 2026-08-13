export const CONTACT_EMAIL_CODES = [
  102, 111, 114, 104, 105, 114, 101, 64, 100, 97, 110, 105, 101, 108, 99,
  97, 115, 115, 105, 108, 46, 99, 111, 109,
];
export const CONTACT_SCHEME_CODES = [109, 97, 105, 108, 116, 111];

export function openContactEmail() {
  const email = String.fromCharCode(...CONTACT_EMAIL_CODES);
  const scheme = String.fromCharCode(...CONTACT_SCHEME_CODES);
  window.location.href = `${scheme}:${email}`;
}
