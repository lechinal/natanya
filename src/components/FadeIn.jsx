import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function FadeIn({ id, children, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
