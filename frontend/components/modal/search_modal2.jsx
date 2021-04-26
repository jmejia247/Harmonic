import React from "react";
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SearchResultContainer from "../SearchResults/search_result_container";

function SearchModal2({ modal, closeModal, openModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "searchResults2":
      debugger;
      component = <SearchResultContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="search-modal-child2" onClick={(e) => e.stopPropagation()}>
      {component}
    </div>
  );
}

const mSTP = (state) => {
  debugger;
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  debugger;
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(SearchModal2);
