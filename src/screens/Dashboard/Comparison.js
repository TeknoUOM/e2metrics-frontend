import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "./TopBar";
import Widget from "./Widget";

const originalItems = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
];

const initialLayouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 2, h: 3, isResizable: false },
    { i: "b", x: 2, y: 0, w: 2, h: 3, isResizable: false },
    { i: "c", x: 4, y: 0, w: 2, h: 3, isResizable: false },
    { i: "d", x: 6, y: 0, w: 2, h: 3, isResizable: false },
    { i: "e", x: 8, y: 0, w: 2, h: 3, isResizable: false },
    { i: "f", x: 10, y: 0, w: 2, h: 3, isResizable: false },
    { i: "g", x: 0, y: 3, w: 2, h: 3, isResizable: false },
    { i: "h", x: 2, y: 3, w: 2, h: 3, isResizable: false },
    { i: "i", x: 4, y: 3, w: 2, h: 3, isResizable: false },
    { i: "j", x: 6, y: 3, w: 2, h: 3, isResizable: false },
    { i: "k", x: 8, y: 3, w: 2, h: 3, isResizable: false },
    { i: "l", x: 10, y: 3, w: 2, h: 3, isResizable: false },
    { i: "m", x: 0, y: 6, w: 4, h: 5, isResizable: false },
    { i: "n", x: 4, y: 6, w: 4, h: 5, isResizable: false },
    { i: "o", x: 8, y: 6, w: 4, h: 5, isResizable: false },
  ],
};
function Content({ size: { width } }) {
  const [items, setItems] = useState(originalItems);
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts
  );
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    console.log(itemId);
    setItems([...items, itemId]);
  };

  return (
    <>
      <TopBar
        onLayoutSave={onLayoutSave}
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        originalItems={originalItems}
      />
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={
              initialLayouts.lg.filter((element) => element.i == key)[0]
            }
          >
            <Widget
              id={key}
              onRemoveItem={onRemoveItem}
              backgroundColor="#867ae9"
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8-comparison")) || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8-comparison",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
