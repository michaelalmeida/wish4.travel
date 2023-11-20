export default function convertStringToAlias(inputString: string): string {
  const normalizedString = inputString
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, "");

  const convertedString = normalizedString.toLowerCase().replace(/\s+/g, "-");

  return convertedString;
}
