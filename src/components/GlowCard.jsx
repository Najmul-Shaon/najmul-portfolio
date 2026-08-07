import { useEffect, useRef } from "react";

const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 12,
  gap: 32,
  opacity: 0,
};

// A single shared pointermove listener drives every mounted GlowCard, instead of
// each card attaching its own listener to document.body. Cards register their DOM
// node here; the listener is added on the first card and removed with the last.
const cards = new Set();
let listening = false;
let frame = null;
let lastEvent = null;

const applyGlow = (event) => {
  for (const card of cards) {
    const bounds = card.getBoundingClientRect();

    const isActive =
      event.x > bounds.left - CONFIG.proximity &&
      event.x < bounds.left + bounds.width + CONFIG.proximity &&
      event.y > bounds.top - CONFIG.proximity &&
      event.y < bounds.top + bounds.height + CONFIG.proximity;

    card.style.setProperty("--active", isActive ? 1 : CONFIG.opacity);

    const centerX = bounds.left + bounds.width * 0.5;
    const centerY = bounds.top + bounds.height * 0.5;
    let angle = (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
    angle = angle < 0 ? angle + 360 : angle;

    card.style.setProperty("--start", angle + 90);
  }
};

// Coalesce rapid pointermove events into one update per animation frame.
const onPointerMove = (event) => {
  lastEvent = event;
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = null;
    if (lastEvent) applyGlow(lastEvent);
  });
};

const register = (card) => {
  cards.add(card);
  if (!listening) {
    document.body.addEventListener("pointermove", onPointerMove);
    listening = true;
  }
};

const unregister = (card) => {
  cards.delete(card);
  if (cards.size === 0 && listening) {
    document.body.removeEventListener("pointermove", onPointerMove);
    if (frame) cancelAnimationFrame(frame);
    frame = null;
    lastEvent = null;
    listening = false;
  }
};

const GlowCard = ({ children, identifier }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;

    if (container) {
      container.style.setProperty("--gap", CONFIG.gap);
      container.style.setProperty("--blur", CONFIG.blur);
      container.style.setProperty("--spread", CONFIG.spread);
      container.style.setProperty("--direction", "row");
    }

    if (!card) return;
    register(card);
    return () => unregister(card);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`glow-container-${identifier} glow-container h-full`}
    >
      <article
        ref={cardRef}
        className={`glow-card glow-card-${identifier} h-full cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div
          className="glows pointer-events-none"
          style={{ pointerEvents: "none" }}
        ></div>
        <div className="relative z-[1]">{children}</div>
      </article>
    </div>
  );
};

export default GlowCard;
