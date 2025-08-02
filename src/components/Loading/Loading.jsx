import { LazyLoadImage } from "react-lazy-load-image-component";
import { sourceGif } from "../../assets";

import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <LazyLoadImage src={sourceGif} alt="No gif ?" />
    </div>
  );
};

export default Loading;
