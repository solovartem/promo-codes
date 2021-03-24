// A helper function to copy promocode to clipboard.
// A temporary element is created without affecting current view and removed after intended copy action.
const copyToClipboard = (str: string): void => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

export default copyToClipboard
