export const buildClassNameList = (
  styles: { [key: string]: string },
  props: { [key: string]: string | undefined },
) =>
  Object.entries(props) // Work with key-value pairs of the props
    .filter(([, value]) => value !== undefined) // Filter out undefined props
    .map(([key, value]) => {
      // Convert the key and value into a class name following the convention
      const className = `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-${value}` // Convert camelCase to kebab-case and append the value
      return styles[className] || '' // Return the corresponding class name or an empty string if it doesn't exist
    })
    .join(' ') // Join all the classes with a space

export const buildBooleanClassNameList = (
  styles: { [key: string]: string },
  props: { [key: string]: boolean },
) =>
  Object.entries(props) // Work with key-value pairs of the props
    .filter(([, value]) => value) // Filter props where the value is true
    .map(([key]) => {
      // Map the keys to their corresponding classes in `styles`
      // Convert the key into a class name following the convention
      const className = `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}` // Convert camelCase to kebab-case
      return styles[className] || '' // Return the corresponding class name or an empty string if it doesn't exist
    })
    .join(' ') // Join all the classes with a space
