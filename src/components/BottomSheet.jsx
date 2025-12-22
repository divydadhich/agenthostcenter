export default function BottomSheet({ open, onClose, children }) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/40"
        />
  
        {/* Sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 animate-slideUp max-h-[90vh] overflow-y-auto">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
          {children}
        </div>
      </div>
    );
  }
  