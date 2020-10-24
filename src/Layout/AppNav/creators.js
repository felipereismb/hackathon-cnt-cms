export function createMenu(icon, label, content) {
  return {
    icon,
    label,
    content,
  };
}

export function createItemMenu(icon, label, url) {
  return {
    icon,
    label,
    to: url,
  };
}

export function createContentItem(label, url) {
  return {
    label,
    to: url,
  };
}
