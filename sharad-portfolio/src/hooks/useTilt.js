import { useEffect, useRef } from "react";

/**
 * A hook that adds a 3D tilt effect to an element based on mouse position.
 * @param {Object} options Configuration options
 * @param {number} options.maxTilt Maximum tilt angle in degrees (default: 10)
 * @param {number} options.perspective Perspective in px (default: 1000)
 * @param {number} options.scale Scale multiplier on hover (default: 1.02)
 * @param {number} options.speed Transition speed in ms (default: 400)
 * @returns {React.RefObject} Ref to attach to the target element
 */
export function useTilt({
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  speed = 400,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let transitionTimeoutId;

    const handleMouseMove = (e) => {
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      // Calculate mouse position relative to element center (-1 to 1)
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;

      // Calculate tilt angles (reverse Y to tilt towards mouse)
      const rotateX = -mouseY * maxTilt * 2;
      const rotateY = mouseX * maxTilt * 2;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      
      // Add a subtle glare effect based on mouse position
      const glareX = (e.clientX - rect.left) / width * 100;
      const glareY = (e.clientY - rect.top) / height * 100;
      
      // Apply the glare using a CSS custom property (optional, requires CSS support on the element)
      el.style.setProperty("--glare-x", `${glareX}%`);
      el.style.setProperty("--glare-y", `${glareY}%`);
    };

    const handleMouseEnter = () => {
      clearTimeout(transitionTimeoutId);
      el.style.transition = `transform 0.1s ease-out`;
      el.style.willChange = "transform";
    };

    const handleMouseLeave = () => {
      el.style.transition = `transform ${speed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.setProperty("--glare-x", `50%`);
      el.style.setProperty("--glare-y", `50%`);
      
      transitionTimeoutId = setTimeout(() => {
        if (el) el.style.willChange = "auto";
      }, speed);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(transitionTimeoutId);
    };
  }, [maxTilt, perspective, scale, speed]);

  return ref;
}
