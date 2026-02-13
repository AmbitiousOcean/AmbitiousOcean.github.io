/**
 * Make each row of .comp-grid images share the SAME height:
 * - Keep the shorter image's rendered height
 * - Crop the taller image vertically (center crop)
 *
 * Works best when .comp-grid uses 2 columns on desktop and 1 on mobile.
 */
(function () {
  function countColumns(grid) {
    const cols = getComputedStyle(grid).gridTemplateColumns || "";
    // Count top-level space-separated tokens (ignore spaces inside parentheses)
    let depth = 0, token = "", count = 0;
    for (let i = 0; i < cols.length; i++) {
      const ch = cols[i];
      if (ch === "(") depth++;
      if (ch === ")") depth = Math.max(0, depth - 1);
      if (ch === " " && depth === 0) {
        if (token.trim().length) count++;
        token = "";
      } else {
        token += ch;
      }
    }
    if (token.trim().length) count++;
    return Math.max(1, count);
  }

  function resetImages(imgs) {
    imgs.forEach(img => {
      img.style.height = "auto";
      // Ensure center crop when a fixed height is applied
      img.style.objectFit = "cover";
      img.style.objectPosition = "center";
    });
  }

  function applyRowMinCrop() {
    document.querySelectorAll(".comp-grid").forEach(grid => {
      const imgs = Array.from(grid.querySelectorAll("img"));
      if (!imgs.length) return;

      resetImages(imgs);

      const ncols = countColumns(grid);

      for (let i = 0; i < imgs.length; i += ncols) {
        const row = imgs.slice(i, i + ncols);
        if (row.length < 2) continue; // single image row: nothing to match

        const heights = row.map(img => img.getBoundingClientRect().height);
        if (heights.some(h => !h || h <= 0)) continue;

        const minH = Math.min.apply(null, heights);

        row.forEach(img => {
          img.style.height = minH + "px";
        });
      }
    });
  }

  // Run after everything is loaded (images included)
  window.addEventListener("load", applyRowMinCrop);

  // Re-run on resize (responsive layout changes)
  let rafId = null;
  window.addEventListener("resize", () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      rafId = null;
      applyRowMinCrop();
    });
  });

  // Also re-run as each image finishes loading (covers late/lazy loads)
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".comp-grid img").forEach(img => {
      if (!img.complete) {
        img.addEventListener("load", () => requestAnimationFrame(applyRowMinCrop), { once: true });
      }
    });
  });
})();
