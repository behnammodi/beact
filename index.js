function beact(element, child, attributes) {
  var element = document.createElement(element);

  if (child) {
    if (typeof (child) === 'string' || typeof (child) === 'number') {
      element.innerHTML = child;
    } else if (child instanceof Array) {
      child.forEach(function (item) {
        element.appendChild(item);
      });
    } else {
      element.appendChild(child);
    }
  }

  if (attributes) {
    Object.keys(attributes).forEach(function (attribute) {
      if (attribute.substr(0, 2) === 'on') {
        element[attribute] = attributes[attribute];
      } else if (attribute === 'style') {
        var styles = attributes[attribute]
        Object.keys(styles).forEach(function (style) {
          element.style[style.split(/(?=[A-Z])/).join('-').toLowerCase()] = styles[style];
        });
      } else {
        element.setAttribute(attribute, attributes[attribute]);
      }
    });
  }

  return element
}

module.exports = beact;