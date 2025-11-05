import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const {_id} = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

  const handleBidModal = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSumbmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(_id, name, email, bid)
  };
  return (
    <div>
      <div>
        <div></div>
        <div>
          <button className="btn btn-primary" onClick={handleBidModal}>
            I want to buy this product
          </button>

          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer!</h3>
              <p className="py-4">Offer something seller can not resist</p>

              <form onSubmit={handleBidSumbmit}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    readOnly
                    defaultValue={user.displayName}
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    readOnly
                    defaultValue={user.email}
                  />
                  <label className="label">Bids</label>
                  <input type="text" className="input" name="bid" placeholder="Your Bid" />
                  <button className="btn btn-neutral mt-4">
                    Place your bid
                  </button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
