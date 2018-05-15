const a = 1;
Object.defineProperty(
  window,
  'MySweetApp',
  {
    value: 'v1.0.0',
    writable: true,
  },
);

function deliveryMethod() {
  // TODO
  return 'overnight';
}

function shipWeight() {
  const el = document.getElementById('weight');
  const count = el === null ? '0' : el.innerHTML;
  return parseInt(count, 10);
}

/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string[]) {
  function sendEmail(addr: string) {
    // Default to standard delivery if empty
    console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package');
    }
  }

  // If it's an array, loop over it
  if (Array.isArray(emailAddr)) {
    emailAddr.forEach((val: string, idx: number) => {
      sendEmail(val.trim());
    });
  } else {
    sendEmail(emailAddr.trim());
  }
}