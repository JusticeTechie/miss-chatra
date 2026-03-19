// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iCJfaPD5OSvOlT/atodSAnarLrKOq9zRrtMvvp3PYhOv5qJFS64l4qN8n5r31QQmC/TV5NnQdCHwEfCbBIKHSYsTVxjStS2ys9lphNKqt5r1yhXzB5ztvX+uABwot38x2l0HQTVl3LBKHgkNd2NqVSHp8r7eCl+k7YpMiasvv2KMx8zshk9bQ01phVOyHaeNKb+gNsafqaRXXHZIP9ZXrUj/K+NGqqjTBDD3jjdYkMQ4jr4QH9w5XavZkULUnK5N/FwdMJrMdvQRfrjuKa57PGgWn/Mm7JebAE5VSvA9D2aXU+M/GJ8wFWpihBBXd1s8cQiKe1AXdOkAvtQ9pt2XVKGNflOvfpDCvzZQVznr1biTX6NsThpdhn1GDRmOerAswHmuLMXcYLvCTL0G2JcpUERYGyqEKdlLLCd2ya8s9WeAEwsXJSLVHIjqmpzuS408TLYpVsstF4y6KFqJwnL4I+glwJ4mfVHz0TcMVW4K3a9fxSvYWLf0o62RahZWo2kP75y0JMIPfxJ7viACJbBDBw0dSXL2wbKHzAcl+vKBHUDvIFLouFg5Z3yJmefHtcHKDBEgpt5CsFbReBQOCwU9LYEG6KTrcWbe05NwLm5Ng7bQjslwAgXhPopf+G3XIl3KxmtC4jY9OY57ScFu6gtC73W0g2R0rT7rRZTzxwSQHDaznPoCZeMUE+vRta3N8LATBCEeCcdxPIiLkQ9avim9GF36v3jN/EFA70c6OIOCJSGheD0WpYj3/d5GmOujM7ua4+GPEm2QWlVcgldUo05iQGWWfRonqJkD8k9eZRi9Hc5YwrsArfUQdj9Pt/uKVm0S52rzr7Y0gZ9LL8J3nFgvML5ltLc4lBqeJMNqp9Cfda/uYIS6aYiC27W0GBwccRqeJpqqGriRH812Vp0xRBCtwp84k3s/FvmmLs4scGcgicI5bLeRK/yT5f9aQhZFPoDBjqJKq6aN1yVbfp1+h3exdZBfXQ8A5if95D8Z4gZyqLqnVdL7LF2jNONsMq4kWiEWh7ND8FYxkYSogqYzyEssdLDvmoKyr4NYG0109TGANqmHB8af0JWbsq3jWDCyorOTx2K41fSOHCj2Fy6wTnPXxVK4XXcW/Bw0cMoFwOaqrIwgSIj4r4ktGAZDO6Qmh0f1dTDqILtqNXyJTFYIQKNFW7CQxPyACMbhAuCc37DAz9Q4pDHg3QyKCt4Z6rDFHRuLSXjOaUaQaADNIMyi9hT0EzWe7oR5PcC4gxtezOBM0mEdEKQalnUf7txoecpgp1utEStTvkWEsDkrA8DunoSJLmST5z9GyaeJXg8eGFVsPC9M1m42VgYGQU95uPvESNfwD8enwHQu6wMf04M19B9hVAF5+Gu4eMvc9oBiIzDwTGIcDZIthv3LMtIJ1iaDEOugwgY=';
  const _INTEGRITY_HASH = '19aade8fd48fde047e28c4d2529777cb6eb09d85101a51222899dc7ca86d8ae5';
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
