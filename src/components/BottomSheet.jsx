import { useEffect, useRef, useState } from "react";

export default function BottomSheet({ open, onClose, children }) {
  const startY = useRef(0);
  const dragging = useRef(false);

  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTranslateY(0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const onPointerDown = (e) => {
    dragging.current = true;
    startY.current = e.clientY;
    setIsDragging(true);
    document.body.style.touchAction = "none";
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const diff = e.clientY - startY.current;
    if (diff > 0) setTranslateY(diff);
  };

  const onPointerUp = () => {
    dragging.current = false;
    setIsDragging(false);
    document.body.style.touchAction = "";

    if (translateY > 120) onClose();
    else setTranslateY(0);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* SHEET */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center">
        <div
          style={{
            transform: `translateY(${translateY}px)`,
            transition: isDragging ? "none" : "transform 0.25s ease",
          }}
          className="w-full max-w-[420px] bg-[#e8f0ff] rounded-t-3xl"
        >
          {/* HANDLE (DRAG ONLY HERE) */}
          <div
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{ touchAction: "none" }}
            className="flex justify-center py-4"
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* CONTENT */}
          <div className="px-4 pb-6 max-h-[75vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
