import React, { Component } from "react";
import Section from "../../components/section/section.component";

import "./home-page.styles.scss";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Model S",
          imageUrl: "model-s.jpg",
          description: "Order Online for Touchless Delivery",
          id: 1,
          leftButtonText: "custom order",
          rightButtonText: "existing inventory",
        },
        {
          title: "Model 3",
          imageUrl: "model-3.jpg",
          description: "Order Online for Touchless Delivery",
          id: 2,
          leftButtonText: "custom order",
          rightButtonText: "existing inventory",
        },
        {
          title: "Model X",
          imageUrl: "model-x.jpg",
          description: "Order Online for Touchless Delivery",
          id: 3,
          leftButtonText: "custom order",
          rightButtonText: "existing inventory",
        },
        {
          title: "Model Y",
          imageUrl: "model-y.jpg",
          description: "Order Online for Touchless Delivery",
          id: 4,
          leftButtonText: "custom order",
          rightButtonText: "existing inventory",
        },
        {
          title: "Solar Panels",
          imageUrl: "solar-panel.jpg",
          description: "Lowest Cost Solar Panels in America",
          id: 5,
          leftButtonText: "order now",
          rightButtonText: "learn more",
        },
        {
          title: "Solar Roof",
          imageUrl: "solar-roof.jpg",
          description: "Produce Clean Energy From Your Roof",
          id: 6,
          leftButtonText: "order now",
          rightButtonText: "learn more",
        },
        {
          title: "Accessories",
          imageUrl: "accessories.jpg",
          description: "",
          id: 7,
          leftButtonText: "shop now",
          
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="container">
        {sections.map(({ id, ...others }) => (
          <Section key={id} {...others} />
        ))}
      </div>
    );
  }
}

// function HomePage() {
//   return (
//     <div className="container">
//       <Section />
//       <Section />
//       <Section />
//       <Section />
//     </div>
//   );
// }

export default HomePage;
