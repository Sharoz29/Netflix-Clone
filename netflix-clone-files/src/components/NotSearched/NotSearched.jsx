import "./NotSearched.css";
import Footer from "../Footer/Footer";
import * as React from "react";

const NotSearched = ({ searched }) => {
  const wrongSearch = searched;

  return (
    <div className="no-results">
      <div className="no-result-container">
        <h1 className="no-result-title">Whoops, something went wrong ...</h1>
        <span className="no-result-reason">
          {` Your search for "${wrongSearch}" did not have any matches.`}
          <br />
          <span>Suggestions:</span>
        </span>
        <ol>
          <li className="no-result-suggestion">Try different keywords</li>
          <li className="no-result-suggestion">
            Looking for a film or TV programme?
          </li>
          <li className="no-result-suggestion">
            Try using a film, TV programme title, an actor or director.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};
export default NotSearched;
