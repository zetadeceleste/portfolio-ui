export const buildClassNameList = (
  styles: { [key: string]: string },
  props: { [key: string]: string | undefined },
) => {
  return Object.entries(props) // Work with key-value pairs of the props
    .filter(([, value]) => value !== undefined) // Filter out undefined props
    .map(([key, value]) => {
      // Convert the key and value into a class name following the convention
      const className = `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}-${value}` // Convert camelCase to kebab-case and append the value
      return styles[className] || '' // Return the corresponding class name or an empty string if it doesn't exist
    })
    .join(' ') // Join all the classes with a space
}

export default buildClassNameList

export const buildBooleanClassNameList = (
  styles: { [key: string]: string },
  props: { [key: string]: boolean },
) => {
  return Object.entries(props) // Work with key-value pairs of the props
    .filter(([, value]) => value) // Filter props where the value is true
    .map(([key]) => styles[key] || '') // Map the keys to their corresponding classes in `styles`
    .join(' ') // Join all the classes with a space
}
