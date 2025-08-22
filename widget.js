// Main widget function that receives parameters
function createWidget(imageUrl, path, offsetFromBottom) {
  // === CONFIG ===
  const baseUrl = "https://patient.patientpartner.com";
  const linkUrl = path && path.trim() ? `${baseUrl}${path}` : baseUrl;
  const imgSrc =
    imageUrl ||
    "https://patientpartner-images2.s3.us-west-1.amazonaws.com/website/widget/chat-widget-updated.png";

  const widgetSize = window.innerWidth < 600 ? "125px" : "200px";
  const bottomOffset = offsetFromBottom || "20px";

  // === CONTAINER LINK ===
  const link = document.createElement("a");
  link.href = linkUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  Object.assign(link.style, {
    position: "fixed",
    bottom: bottomOffset,
    right: "20px",
    width: widgetSize,
    height: widgetSize,
    zIndex: "9999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "grab",
    userSelect: "none",
    touchAction: "none",
  });

  // === IMAGE ===
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Widget Icon";
  img.draggable = false;
  Object.assign(img.style, {
    maxWidth: "100%",
    maxHeight: "100%",
    pointerEvents: "none",
  });

  link.appendChild(img);
  document.body.appendChild(link);

  // === DRAG FUNCTIONALITY ===
  let isDragging = false;
  let startY = 0;
  let startBottom = 0;
  let hasMoved = false;
  let touchStartTime = 0;
  let touchStartY = 0;

  // Mouse events
  link.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);

  // Touch events for mobile - use pointer events for better compatibility
  link.addEventListener("pointerdown", startDrag);
  document.addEventListener("pointermove", drag);
  document.addEventListener("pointerup", stopDrag);

  // Prevent click when dragging
  link.addEventListener("click", handleClick);

  function startDrag(e) {
    e.preventDefault();
    isDragging = true;
    hasMoved = false;
    touchStartTime = Date.now();

    if (e.type === "mousedown" || e.pointerType === "mouse") {
      startY = e.clientY;
    } else {
      startY = e.clientY;
      touchStartY = e.clientY;
    }

    startBottom = parseInt(link.style.bottom) || 20;
    link.style.cursor = "grabbing";
  }

  function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    let currentY = e.clientY;
    const deltaY = startY - currentY;

    // Only move if there's significant movement
    if (Math.abs(deltaY) > 15) {
      const newBottom = Math.max(
        20,
        Math.min(
          window.innerHeight - parseInt("150px") - 20,
          startBottom + deltaY
        )
      );

      link.style.bottom = newBottom + "px";
      hasMoved = true;
    }
  }

  function stopDrag(e) {
    if (!isDragging) return;

    const touchDuration = Date.now() - touchStartTime;
    const isTouch = e.pointerType === "touch" || e.type.includes("touch");

    // For touch events, be more lenient with click detection
    if (isTouch) {
      // If it was a quick touch with minimal movement, allow click
      if (touchDuration < 300 && !hasMoved) {
        hasMoved = false;
      }
    }

    isDragging = false;
    link.style.cursor = "grab";
  }

  function handleClick(e) {
    // Prevent click if we were dragging
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
      hasMoved = false;
    }
  }
}

// Auto-execute when script loads, reading attributes from script tag
(function () {
  const scriptTag = document.currentScript;
  const imageUrl = scriptTag.getAttribute("imageUrl");
  const path = scriptTag.getAttribute("path");
  const offsetFromBottom =
    scriptTag.getAttribute("offsetFromBottom") ||
    scriptTag.getAttribute("offsetfrombottom");

  createWidget(imageUrl, path, offsetFromBottom);
})();
