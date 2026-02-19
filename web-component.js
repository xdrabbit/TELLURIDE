/**
 * Ghost Lens - Web Component
 * Use in any HTML/vanilla JS app without React
 * 
 * @example
 * <ghost-lens idle-delay="3000"></ghost-lens>
 * <button data-ghost="Click to save your changes">Save</button>
 */

import { GhostLensEngine, isGhostLensDisabled } from './core.js';

class GhostLensElement extends HTMLElement {
  static get observedAttributes() {
    return ['idle-delay', 'disabled', 'accent-color'];
  }

  connectedCallback() {
    if (this.hasAttribute('disabled') || isGhostLensDisabled()) return;

    const options = {
      idleDelay: parseInt(this.getAttribute('idle-delay') || '3000', 10),
      accentColor: this.getAttribute('accent-color') || '#00c8ff',
    };

    this._engine = new GhostLensEngine(null, options);
    this.style.display = 'none';
  }

  disconnectedCallback() {
    this._engine?.destroy();
    this._engine = null;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (!this._engine) return;
    if (name === 'idle-delay') {
      this._engine.setIdleDelay(parseInt(newVal, 10));
    }
    if (name === 'disabled') {
      newVal !== null ? this._engine.deactivate() : null;
    }
  }

  // Public API via element methods
  activate() { this._engine?.activate(); }
  deactivate() { this._engine?.deactivate(); }
}

if (!customElements.get('ghost-lens')) {
  customElements.define('ghost-lens', GhostLensElement);
}

export { GhostLensElement };
