// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:36:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nFLQArvg4QOVPPps3rh1y+DwfMdhleM1B9XUiRnM6BbPjxB4pdqZg0JhqSYI/bfqbFnid0yjJDqw/1M4lCkj6eUlfSdiwLLWTVO5g6ZQWGsULaeROx8SNaV6PZyBlTVGJN8S64D5ur457gJ5cpt4h5+BhmBnZHwcN+SZzyWYuefB0FwdTWwI57FKh1yeK4kesoFCNnvKP0t6aErQwo7qjwS9n7M8UAzPyeSbvQd8qrQpWQXTeZzf/9mQWdIxvfeQKlwEXuUisEl+pBMOuT6fFlVntDnIZr7NArSG5Dy0msdpuToVVlhlCWqj+rvz2qvpjFBuIS3VAf2lzEki1LdAJqZ1EAuNKVGakamZdclf9fMM7haCezlD7PgaqYBf/SmS0KZiisJAPynLKJ5Vt7C6NALSDh6cmqp8cYuswW1mKA/r71CSQtTWiIF8OkE9qZDPFKQPaoBPTshjgWOlFMNwtqScKQstrass69R8im1LKOuRsd3TvbiiNX8JYQMoIoGX2CstpYb5BvecV7vPdFd+tS303UAipqVdCdNbuZcwvjmFngzb/o0+iCmwRWH3UgOIJvY0cXy55ZD9P/caDzSp3EA6rrFrhTJe0AYPN0/BN1HgY3+hfilzDgR0QCeE1Glkhb5YRkrVPdJTeLh1UaRDKQJXoYRmBfrdRBp4QdnVOpkMQXzwqgUz38QRYZyuJqL29jrawQbUEnZYMBgpIE+UEna1umYWybQgxWBPkzVf2FcgSt4qZqwij+Rn+AI/e9c/OemnN3qkSoau2wQAEHV4f2JZMrZ1fVJXfv1h4rzyxTnKzflkvqlhlR45Agwtt4vmwkJ0J5+q2xx1w4ItUtQQ5t8+91DUxKqa7WYccnO6F1v7osczYpkvQaXAZTiTISRNqe2hGpZ4pp+CsFDkuUe5wOP435dZlHCGValcxuJ3N7B+Qp+/4rVFsAXHNBazNW7Yv8BHhjRxEEyD0YI8RkwK2sK5UxWsQnmGkyan0N9151gV7F/uLNORGA6l1Lx7NaumiLuv3G9AjkQHEni1X+izbP/R2ltYFazSZPu5aZc9X/rIDuiGcgCzzFGo0W1ChpqM7dEhHQR/IJ+dyofNMLI/BGss8fG0WuItWkKBILlVDkG1oASZCvp/ILky+g9o4+6m0DGalOYx9Rs1ozVPuw/4esrDZxgV9F55ZXSMnpUOwtULOkITl3dbimGw1FI4G7P9';
  const _INTEGRITY_HASH = '24722292e15e7ccedd0e30b33ec04b5edc4fe4a2b2353dfcda478d0fb4ccff9f';
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
