import React from "react"

// Componets
import Hero from "./Hero"
import GridColumn from "./GridColumn"
import Gallery from "./Gallery/GalleryItem"
import GridTwo from "./GridTwo"
import GridRow from "./GridRow"
import Footer from "./Footer"
import Media from "./Media"

const Components = {
  Hero: Hero,
  GridColumn: GridColumn,
  Gallery: Gallery,
  GridTwo: GridTwo,
  GridRow: GridRow,
  Footer: Footer,
  Media: Media
  };


  const renderBlock = (block) => {
    // component does exist
    if (typeof Components[block.component_type] !== "undefined") {
      return React.createElement(Components[block.component_type], {
        key: block.id,
        data: block
      });
    }
    // component doesn't exist yet
    return React.createElement(
    () => console.log("Component does not exist"+block.id),
    { key: block.id }
    );
  }

  export default renderBlock;