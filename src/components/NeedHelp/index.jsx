import clsx from "clsx";
import { useOnClickOutside, useScrollToElement } from "hooks-react-custom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useChatHistoryStore } from "../../store/chatHistoryStore.ts";
import { FaPaperPlane } from "react-icons/fa";
import PuffLoader from "react-spinners/PuffLoader";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { FaBrain, FaTimes } from "react-icons/fa";

const NeedHelp = () => {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const { messages, addMessage } = useChatHistoryStore();

  useOnClickOutside(ref, () => setIsOpen(false));
  const [refBottomElement, scrollToBottom] = useScrollToElement();

  const sendMessage = async () => {
    try {
      if (inputText.trim() === "" || loading) return;
      setTimeout(() => {
        scrollToBottom({
          behavior: "smooth",
        });
      }, 500);
      addMessage({
        user: "me",
        content: inputText,
      });
      setInputText("");
      setLoading(true);
      const apiUrl = "https://api.openai.com/v1/chat/completions"; // Update with the correct API endpoint
      const apiKey = import.meta.env.VITE_GPT_API_KEYS; // Replace with your actual API key
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const requestBody = {
        messages: [{ role: "user", content: inputText }],
        model: "gpt-4o-mini",
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      addMessage({
        user: "gpt",
        content: data.choices[0].message.content,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        scrollToBottom({
          behavior: "smooth",
        });
      }, 500);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => {
        scrollToBottom({});
      }, 500);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={clsx(
        "sm:fixed flex right-0 bottom-[20vh] cursor-pointer transition-all sm:translate-x-[500px]",
        isOpen && "sm:!translate-x-0"
      )}
    >
      <div
        onClick={() => setIsOpen((p) => !p)}
        className="hover:!bg-opacity-90 transition-all sm:static fixed bottom-11 right-11"
      >
        <p
          style={{ writingMode: "vertical-lr" }}
          className="rotate-180 hidden sm:block px-2 py-4 bg-[#292c33] select-none rounded-r-[8px] text-white"
        >
          Need help!
        </p>
        <p className="bg-[#292c33] sm:hidden select-none text-white px-4 flex items-center gap-2 py-2 rounded-[24px]">
          <FaBrain />
          <span> Need help!</span>
        </p>
      </div>
      <div
        className={clsx(
          "sm:w-[500px] sm:static fixed inset-0 z-[999999] flex flex-col border border-grey-200 sm:p-2 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded-bl-[8px] overflow-y-visible sm:max-h-[500px] sm:h-[500px]",
          !isOpen && "hidden sm:flex"
        )}
      >
        <div className="h-[70px] sm:hidden bg-[#262626] flex items-center p-4 text-white font-bold gap-2">
          <div onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </div>
          <div>TymeX Bot</div>
        </div>
        <div className="flex-1 overflow-y-scroll p-4 sm:p-0 pb-5 sm:max-h-[calc(500px_-_80px)] h-full sm:px-1">
          {messages.map((message, index) => {
            const isMe = message.user === "me";
            return (
              <div
                key={index}
                className={clsx("flex mb-3", isMe && "justify-end ")}
              >
                <div
                  className={clsx(
                    "flex flex-col px-2 max-w-[80%]",
                    isMe && "justify-end text-left"
                  )}
                >
                  <p
                    className={clsx(
                      "font-bold text-[14px]",
                      isMe && "text-right"
                    )}
                  >
                    {!isMe ? "TymeXBot" : "You"}
                  </p>
                  <div
                    data-color-mode={isMe ? "light" : "dark"}
                    className={clsx(
                      "text-[13px] bg-[#0e1217] text-white rounded-[8px] rounded-tl-none  px-4 py-2",
                      isMe &&
                        "!bg-gray-100 text-black rounded-[8px] rounded-tl-[8px] rounded-tr-none"
                    )}
                  >
                    <MarkdownEditor.Markdown
                      className={clsx("text-[13px]", isMe && "!bg-transparent")}
                      source={message.content}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={refBottomElement}></div>
        </div>
        <div className="flex items-center gap-2 p-4 sm:p-0">
          <textarea
            disabled={loading}
            type="text"
            placeholder="Type your message here..."
            value={inputText}
            className="disabled:bg-opacity-70 max-h-[80px] min-h-[40px] border border-gray-200 px-4 py-2 rounded-[8px] w-full bg-neutral-200 outline-none"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            disabled={loading || inputText.trim() === ""}
            className="h-full disabled:bg-opacity-70 px-4 text-white bg-black rounded-[8px] hover:bg-opacity-80 transition-all"
            onClick={sendMessage}
          >
            {loading ? <PuffLoader size={20} color="#fff" /> : <FaPaperPlane />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
