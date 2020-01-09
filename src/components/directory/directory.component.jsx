import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionsProps }) => (
        <MenuItem key={id} {...sectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
