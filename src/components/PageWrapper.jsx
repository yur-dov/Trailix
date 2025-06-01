// PageWrapper.jsx
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PageWrapper({ children }) {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert(); // Очистка при размонтировании
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
