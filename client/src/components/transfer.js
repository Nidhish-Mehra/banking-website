import { useState } from "react";
import M from "materialize-css";

function Transfer() {  
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState("");
    const transfer = () => {
      fetch("/transaction", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          sender,
          receiver,
          amount,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({ html: data.message, classes: "#4caf50 green" });
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="container">
        <h3 style={{ textAlign: "center" }}>TRANSFER MONEY</h3>
        <div className="row card center" style={{paddingTop:"1.5rem"}}>
          <div class="input-field col s6 offset-s3">
            <select
              value={sender}
              onChange={(e) => {
                setSender(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Sender
              </option>
              <option value="Nidhish Mehra">Nidhish Mehra</option>
              <option value="Aarav Mukherjee">Aarav Mukherjee</option>
              <option value="Darshita Rao">Darshita Rao</option>
              <option value="Gitika Chauhaan">Gitika Chauhaan</option>
              <option value="Hardik Kumar">Hardik Kumar</option>
              <option value="Chintan Rane">Chintan Rane</option>
              <option value="Jay Verma">Jay Verma</option>
              <option value="Aditi Shetty">Aditi Shetty</option>
              <option value="Jyoti Pandey">Jyoti Pandey</option>
              <option value="Isha Agarwal">Isha Agarwal</option> 
            </select>
            <label>Sender</label>
          </div>
          <div class="input-field col s6 offset-s3">
            <select
              value={receiver}
              onChange={(e) => {
                setReceiver(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Receiver
              </option>
              <option value="Nidhish Mehra">Nidhish Mehra</option>
              <option value="Aarav Mukherjee">Aarav Mukherjee</option>
              <option value="Darshita Rao">Darshita Rao</option>
              <option value="Gitika Chauhaan">Gitika Chauhaan</option>
              <option value="Hardik Kumar">Hardik Kumar</option>
              <option value="Chintan Rane">Chintan Rane</option>
              <option value="Jay Verma">Jay Verma</option>
              <option value="Aditi Shetty">Aditi Shetty</option>
              <option value="Jyoti Pandey">Jyoti Pandey</option>
              <option value="Isha Agarwal">Isha Agarwal</option> 
            </select>
            <label>Receiver</label>
          </div>
          <div className="col s6 offset-s3">
            <input
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              type="text"
              id="amount"
            />
          </div>
          <div className="col s3">
            <button
              onClick={() => transfer()}
              style={{ margin: "20px" }}
              className="btn-large black"
            >
              Transfer
            </button>
          </div>
        </div>
      </div>
    )
}

export default Transfer
