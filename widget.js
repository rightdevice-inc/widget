// Main widget function that receives parameters
function createWidget(imageUrl, path) {
  // === CONFIG ===
  const baseUrl = "https://patient.patientpartner.com";
  const linkUrl = path && path.trim() ? `${baseUrl}${path}` : baseUrl;
  const imgSrc =
    imageUrl ||
    "https://patientpartner-images2.s3.us-west-1.amazonaws.com/website/widget/widget.png";

  // === RESPONSIVE SIZING ===
  // More reliable mobile detection that works with device simulators
  // const isMobile = () => {
  //   // Check user agent for mobile devices
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   const isMobileUA =
  //     /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
  //       userAgent
  //     );

  //   // Check if viewport is set for mobile (common in responsive sites)
  //   const viewport = document.querySelector('meta[name="viewport"]');
  //   const hasMobileViewport =
  //     viewport && viewport.content.includes("width=device-width");

  //   // Check actual screen width (more reliable than window.innerWidth in simulators)
  //   const screenWidth = window.screen.width || window.innerWidth;
  //   const isSmallScreen = screenWidth <= 768;

  //   return isMobileUA || hasMobileViewport || isSmallScreen;
  // };

  // const isMobileDevice = isMobile();
  // const widgetSize = isMobileDevice ? "400px" : "100px";

  // === CONTAINER LINK ===
  const link = document.createElement("a");
  link.href = linkUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  Object.assign(link.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "200px",
    height: "200px",
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
          window.innerHeight - parseInt(widgetSize) - 20,
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

  // // === RESPONSIVE RESIZE HANDLER ===
  // function handleResize() {
  //   const newIsMobile = isMobile();
  //   const newSize = newIsMobile ? "400px" : "100px";

  //   if (newIsMobile !== isMobileDevice) {
  //     link.style.width = newSize;
  //     link.style.height = newSize;
  //   }
  // }

  // // Listen for window resize events
  // window.addEventListener("resize", handleResize);
}

// Auto-execute when script loads, reading attributes from script tag
(function () {
  const scriptTag = document.currentScript;
  const imageUrl = scriptTag.getAttribute("imageUrl");
  const path = scriptTag.getAttribute("path");

  createWidget(imageUrl, path);
})();
