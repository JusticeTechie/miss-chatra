// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:34:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mx2DNAnygwxP4/Aua0a1dQDrQhJBP1Hxd8H6g2bUOLZp/+HEKbYA0NSN198MedV16rf0WlMP/sKsKG2nMmWH61jiQRtQX6mrW38e3dw25eYpDLR1Uwebx5BQLJdbLsmPy9J7a8H6xRUntngU95F6fwPR5lMMRK7Q0DwyqUG+D3d4DF3R4Pa5Es+9IhS/A+zcFJ8W9iI0+6SSXryG+3uhcfmuu2xFDn6eF+BTHsmVxxiLmC6At9I5hCeYEm/hR/iIPR7hJrJZItaYTIlaZPVBi3/fAf8+gwoBvP9pOGxh7p5frsR4LlwPSKFsBcMWpcJlWXtysv+smoTePi/vs+iwMbki0S8gUR7LLWa21Wy1PLj0N8EK0LBUn4DthhCXA+O7DhKjW529vr2yz7pjP7O8DHnlP5FknjzfD7aDIzrjxg5aHDpMao5CjZ4KyLMDHTMmw2obo6KtANU9/7XvLzxmbZHnKK7hDgcZ5VrNKUTyTMKlwgdWkUCnu+R7IJrDF98U6UUAHbROrodZ5QZ3ufn2tfiszH+GnkgcPxvtCoEZr7OVNpfNmNkbJlpV3tVPHT1FrCDGmTSEU81ywhHBGdb5n9xXeD7veWMy6wTPGqBPdSBD3svOTlawfRoKSHt7MWVo827JfmonQAQu+y+DSjYv/lf+zupfExOpZcKAEgHEgGOZRRxKSvNukBa5znnbxs7p1po6RTu2ywZ6CwSkQBlRzZDUrL+6x2TBJSbfDyg+5RjMsGOE+rmgYwdp0bOM8HfV79a+HtjDvhcY9hx+ZPZ9joXBugD8ZS1KJzq1G/DoPCRFXLK6wEM1ScOroznyy9r8qdLJawyw2n6N54SojZGknzI6HTTF816Cl3Jrs0yqMuH+PF/JBjx01N6V5x+CknRokkhgPkEcHTm0JUX2b8zEI9jyORdmx1V9QZ2ALZBmE+qAUA0wkNzAD9YrGlr5+PKS8/4jDGee3ElkxdSFFiI+hwLwFiKHy8LMcnCNZ77FN0nk8IPd3nF1a61nS/93T1ZF9R5yu1D0qZZyFFrsMtrV5VH8YF7pH16ZdbR1gf98nyJz1OUpLKv1zlA7VsbYWstLipYyHrSDXlqmmP119LxJP3ARM6RPGH+k/QMpMFkKhMW1MNeOWrMxTE5esGqBTH6f+wsQSeNQxw/hKQmCocvq71jvgcfrZPIYx6+9Mqf7SyPF3QqJtWZ8ltTmXV9ZcdNtzdyW7ZgfipNW5s6dLplv4jIcmdWBzzRds1vPdRyrHHyYXSO2e9/RkkiJhKuPGkqHkB55Lhu9nAwamOVJa3Z7BaCPFkJwmI6XzBuwoQdBD+YVED+OfkFGnb4PGdmSOjl7OnHHSWEid09zsw==';
  const _INTEGRITY_HASH = 'bc12577910f6258e7ab3e21f5cc314c5a2a82334ab31e03ab058e54b2b0cc246';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
