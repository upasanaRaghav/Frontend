import { useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Button } from "@mui/material";

const ChatInput = ({ handleSendMessage }) => {
  const [msgInput, setMsgInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (msgInput.length > 0) {
      handleSendMessage(msgInput);
      setMsgInput("");
    }
  };

  return (
    <>
      <form className="form" onSubmit={(e) => sendMessage(e)}>
        <div className="flex items-center gap-1 md:gap-4 text-black">
          <input
            type="text"
            placeholder="Type a message"
            value={msgInput}
            onChange={(e) => {
              setMsgInput(e.target.value);
            }}
            className="flex-grow md:px-5 py-3 rounded-full focus:outline-none text-black"
          />
          <Button type="submit">
            <SendRoundedIcon fontSize="large" sx={{ color: "white" }} />
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChatInput;
