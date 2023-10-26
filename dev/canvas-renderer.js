class ElementRenderer {
  constructor() {
    this.createElement = this.createElement.bind(this);
    this.renderElements = this.renderElements.bind(this);
  }

  createElement(jsonElement, environment, _editMode = false) {
    if (environment === "React") {
      const { type, props } = jsonElement;
      // If x and y are defined, add them to the style
      if(props.style.x !== undefined && props.style.y !== undefined) {
        props.style = {
          ...props.style,
          position: 'absolute',
          left: `${props.style.x}px`,
          top: `${props.style.y}px`
        };
      }

      // Handle innerHTML safely in React
      if (props.innerHTML) {
        props.dangerouslySetInnerHTML = { __html: props.innerHTML };
        delete props.innerHTML;
      }

      return window.React.createElement(type, props);
    }

    if (environment === "Vanilla") {
      const element = document.createElement(jsonElement.type);
      // Copy properties from JSON to the element, like 'style', 'className', etc.
      Object.keys(jsonElement.props).forEach((key) => {
        console.log('jsonElement', jsonElement)
        if (key === 'style' && (jsonElement.props.style.x !== undefined && jsonElement.props.style.y !== undefined)) {
          console.log('key', key)
          // Include x and y for absolute positioning
          element.style.position = 'absolute';
          element.style.left = `${jsonElement.props.style.x}px`;
          element.style.top = `${jsonElement.props.style.y}px`;
        } else {
          element[key] = jsonElement.props[key];
        }
      });
      return element;
    }

    throw new Error("Invalid environment specified");
  }

  renderElements(jsonArray, container, environment, editMode = false) {
    jsonArray.forEach((jsonElement) => {
      const element = this.createElement(jsonElement, environment, editMode);

      if (environment === "React") {
        // In React, this element would be used within JSX, not appended like this.
        // This is for demonstration purposes.
        container.appendChild(element);
      }

      if (environment === "Vanilla") {
        container.appendChild(element);
      }
    });
  }
}


window.ElementRenderer = ElementRenderer;

