// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 01:35:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yr3v0IeHiR8FVFc5tXlwc/zywLD0rN6TSE3GlqCSy+fEoR1wSkd2Yrf+irTYQhWXiMgmrPSqN+mjaTWfpd9ZCwNY7OEuyiks2NqmlK+JVLAD6qJsvXY6+9zBXypXVf/KUBwrhXqZwYGiWVydO/nGFiNBeJx1LFPYNOIcHTXTCJKslW8loGAieu/u68hl7xobnWOTE/lM53IQ3on/ytGRrou2v8pG+OfQUPDR26R9ZtYSlVMCaIwKgopGF62dSqJv9+zqzqDGbKoUVlXz7a86iw+GHlvaJjhx8DiqS6d/xFtPbS6a37koMWx48pEd5q0Ptiyq5lWrkGgtxaozvsDZjJCG+QLXI1EMVhTKpTnUyluHQVEUFY+xzHpf1FeAr21IJJNvlwTwg2qts65SUh7AlOiJU3ufzKA8f1mpFLJ5Wrq8qu41lncbMpt5QaMg+CuHcgAXUK55BhUWC2GInr3+ZeBaCU9adPX5ptfas4YeF/W0FdIKJtmVCqx8KcMn1ofbDHq8z78n4x/xzcZIDZAo1Y6UFy8KAqLTczHBsXwyiKZMPXbX5L1C7EIDJLIEFrUePGc7j0M+g8fK5bIKQaK4rMwDjnaRvmxAmCOv96lvqhMzct/83Ljp2IvgKZ2fJgsxO9JrsQVrjU9npxRjYZFXb11SETKEuSd7EftSrTARTT4rGAGSdfjpCzwAyf+N0lSg3F0Y2//hXjmvLk3icRjdaXJ73w5iJAITuKJ5U1rCw+ZoQbsbURVeIRtagtegFxhBwNaRTrRjyzBKJ0naWpTJhfSngwbDdcpNxDduN991U5IlNPsWdBH5FLBFwIZCOBbybHw1lLXCF8xceKDe3nmUdVN6gsAitE18tcMlx1/ztTkHT0/0FEen1b9IbIRlmT66Y2pR4mzHTIN7IEHMHaML0YawN0IOh7TAuBsfigOy7PhBiW2ECRgT4WxI2Fw+xP/LHbcT1wsHGpNyQ41iHIDXby9Azprjwc+a5uQxGSUcRPNUWNepcP6gNivAtqwnzR5bTxpGbeZ/xZ1NppWdTShJ4QTtujBK+uszhThf9/8bm9vGiSb/kbjJedCj9cP4uGcAbgb/fqLEGjb17FJBVtVpE6LL2B+M0tZ4T7cQF19tRHXWGQ43vuszZCDgenijZ6bq3+xHmYq9jX2Ypx3y35hhhfQC8VHLXtvmh8puzk1C6Vwlb7/yuebJsxULiQz3CiziZQqtRzYbLOrZhQ4RS8vIeglbvxf/nfhNmoNdpSJiBRnvpL1vUtCrP9bfyz5snGPEYlUsM8CExqis7nM64lJL3JPMwx/cvpuZZMm/UoA/E0Nwu7O4NU4MyNw8T1vmHABh90SSWRk9B/kQjyXCNw5PIlazIgi/dB/qnUpLjtxGyBG/HtDDHOkrjfDtijVCGgcsDf/8+aytfoUGz//k';
  const _INTEGRITY_HASH = '607829e42290b6bff2df7932bab8534ac7374dbcc986047ab49a1b9b06d47b9b';
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
