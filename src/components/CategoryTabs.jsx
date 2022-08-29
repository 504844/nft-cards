import React from "react";

function CategoryTabs(props) {
  let activeTab;
  if (props.item.active) {
    activeTab = "active";
  }
  return (
    <li className="nav-item">
      <a className={`nav-link ${activeTab}`} href="#">
        {props.item.category}
      </a>
    </li>
  );
}

export default CategoryTabs;
