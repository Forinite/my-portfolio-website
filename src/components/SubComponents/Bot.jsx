import { useEffect, useRef, useState } from "react";
import { tipsArray } from "../../constants/botIndex";

const Bot = ({ isOnline }) => {
  const botRef = useRef(null);
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  const [eyeHeight, setEyeHeight] = useState(14);

  const blink = () => {
    // Close the eyes
    setEyeHeight(2);

    // Reopen the eyes after a short delay
    setTimeout(() => {
      setEyeHeight(24);
    }, 200); // Adjust the delay for the blink duration
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const bot = botRef.current;
      if (!bot) return;

      const botRect = bot.getBoundingClientRect();
      const centerX = botRect.left + botRect.width / 2;
      const centerY = botRect.top + botRect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const angle = Math.atan2(dy, dx);

      const moveDistance = 4; // Distance the eyes can move
      const offsetX = moveDistance * Math.cos(angle);
      const offsetY = moveDistance * Math.sin(angle);

      // Update the eyes' positions
      if (leftEye.current) {
        leftEye.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        leftEye.current.style.height = `${offsetX + 24}px`;
      }
      if (rightEye.current) {
        rightEye.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        rightEye.current.style.height = `${offsetX + 24}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const [dialogMessage, setDialogMessage] = useState("Hello! I'm a bot!");

  const toggleDialog = () => {
    if (!isDialogVisible) {
      // Get the bot's position and set the dialog's position accordingly
      const botRect = botRef.current.getBoundingClientRect();
      setDialogPosition({
        top: 0, // Adjust as needed for spacing
        left: botRect.left, // Adjust as needed for spacing
      });
      setIsDialogVisible(true);
      const randomTip = tipsArray[Math.floor(Math.random() * tipsArray.length)];
      setDialogMessage(randomTip);
    } else {
      setIsDialogVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (botRef.current && !botRef.current.contains(event.target)) {
      setIsDialogVisible(false); // Close dialog if clicking outside
    }
  };

  useEffect(() => {
    // Add a click listener to the document to detect outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="flex ">
      <div
        ref={botRef}
        className="top-1 mx-auto min-w-14 h-14 rounded-full bg-black flex relative"
        onClick={() => {
          blink();
          toggleDialog(); // Open or close the dialog
        }}
      >
        <div
          ref={leftEye}
          style={{ height: `${eyeHeight}px`, transition: "height 0.2s" }}
          className={`absolute left-2 top-4 rounded-full w-4 ${
            isOnline ? "bg-[#00ff26]" : "bg-[red]"
          }`}
        ></div>
        <div
          ref={rightEye}
          style={{ height: `${eyeHeight}px`, transition: "height 0.2s" }}
          className={`absolute right-2 top-4 rounded-full w-4 ${
            isOnline ? "bg-[#00ff26]" : "bg-[red]"
          }`}
        ></div>
      </div>

      {/* Dialog Box */}
      {isDialogVisible && (
        <div
          className=" border-purple-300  pointer-events-none select-none ml-4 z-50 relative bg-white shadow-lg border rounded p-4 max-w-[16rem] lg:max-w-[16rem]"
          // style={{
          //   top: `${dialogPosition.top}px`,
          //   left: `${dialogPosition.left}px`,
          // }}
        >
          <p>{dialogMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Bot;
