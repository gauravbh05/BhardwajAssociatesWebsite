/**
 * security.js — Bhardwaj Associates
 * Client-side deterrents: right-click, DevTools, drag, print protection.
 * NOTE: These are deterrents, not absolute locks. Server-side headers
 * (see .htaccess / _headers) provide the real security layer.
 */

(function () {
  'use strict';

  /* ── 1. Disable right-click context menu ── */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  });

  /* ── 2. Block keyboard shortcuts ── */
  document.addEventListener('keydown', function (e) {
    const key  = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // F12 — DevTools
    if (e.key === 'F12') { e.preventDefault(); return false; }

    // Ctrl+U — View Source
    // Ctrl+S — Save page
    // Ctrl+P — Print
    // Ctrl+A — Select All
    if (ctrl && ['u', 's', 'p', 'a'].includes(key)) {
      e.preventDefault(); return false;
    }

    // Ctrl+Shift+I/J/C/K — DevTools (Chrome, Firefox, Safari)
    if (ctrl && e.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) {
      e.preventDefault(); return false;
    }

    // PrintScreen — clear clipboard immediately after capture attempt
    if (e.key === 'PrintScreen') {
      setTimeout(function () {
        navigator.clipboard && navigator.clipboard.writeText('').catch(function () {});
      }, 300);
    }
  });

  /* ── 3. Disable image drag ── */
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') { e.preventDefault(); return false; }
  });

  /* ── 4. Disable text selection on images and cards ── */
  document.addEventListener('selectstart', function (e) {
    if (e.target.closest('img, .service-card, .hero-image, .team-photo')) {
      e.preventDefault(); return false;
    }
  });

  /* ── 5. DevTools size-change detection ── */
  var devToolsOpen = false;
  var threshold    = 160;
  setInterval(function () {
    var widthDiff  = window.outerWidth  - window.innerWidth  > threshold;
    var heightDiff = window.outerHeight - window.innerHeight > threshold;
    if ((widthDiff || heightDiff) && !devToolsOpen) {
      devToolsOpen = true;
      document.body.style.filter = 'blur(8px)';
    } else if (!widthDiff && !heightDiff && devToolsOpen) {
      devToolsOpen = false;
      document.body.style.filter = '';
    }
  }, 1000);

  /* ── 6. Watermark on copy attempt ── */
  document.addEventListener('copy', function (e) {
    var selection = window.getSelection ? window.getSelection().toString() : '';
    if (selection && e.clipboardData) {
      e.clipboardData.setData('text/plain',
        selection + '\n\n— Bhardwaj Associates, Ghaziabad | +91 9810115840');
      e.preventDefault();
    }
  });

})();
