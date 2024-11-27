import { Buffer } from 'buffer';

// Polyfill global and Buffer for NEAR API
declare global {
  interface Window {
    global: any;
    Buffer: typeof Buffer;
  }
}

window.global = window;
window.Buffer = Buffer;