import { useEffect, useRef } from "react";
import { ArticleProps } from "../models/newsArticle.model";

const Modal = ({
  title,
  description,
  url,
  urlToImage,
  onClose,
}: ArticleProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </div>
    </div>
    // <div className="modal">
    //   {/* Add the ref attribute to the modal content element */}
    //   <div className="modal-content" ref={modalRef}>
    //     <span className="close" onClick={onClose}>
    //       &times;
    //     </span>
    //     {/* Use an iframe element to embed the web page inside the modal content */}
    //     <iframe src={url} title={title} width="100%" height="100%" />
    //   </div>
    // </div>
  );
};

export default Modal;
