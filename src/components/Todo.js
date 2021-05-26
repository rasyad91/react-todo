import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");

    function updateTitle(e) {
        setTitle(e.target.value)
    }

  const deleteHandler = () => {
      setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
};

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
            <input name="title" type="text" value={title} onChange={updateTitle}></input>
            </h5>
        <p className="card-text"></p>
        <button className="btn btn-danger" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    {/* { showModal ? <Modal /> : null} */}
    { showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    { showModal && <Backdrop onCancel={closeModalHandler}/> }

    </div>
  );
}

export default Todo;
