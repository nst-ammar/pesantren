import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Handles scrolling on route changes: scrolls to the hash target section
// (e.g. /#psb from another page) or back to the top of the page.
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const { hash, key } = location;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // key changes on every navigation, so re-clicking the same link
    // still scrolls back to the top.
    window.scrollTo({ top: 0 });
  }, [location, location.hash, location.key]);

  return null;
}
