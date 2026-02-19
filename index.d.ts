/**
 * Ghost Lens - TypeScript Definitions
 */

export interface GhostLensOptions {
  /** Milliseconds of idle time before lens activates. Default: 3000 */
  idleDelay?: number;
  /** Milliseconds after activity before resetting idle timer. Default: 300 */
  resetDelay?: number;
  /** Duration of curtain sweep animation in ms. Default: 600 */
  curtainDuration?: number;
  /** CSS color for the curtain sweep. Default: 'rgba(0, 200, 255, 0.06)' */
  curtainColor?: string;
  /** CSS color for tooltip background */
  tooltipBg?: string;
  /** CSS color for tooltip border */
  tooltipBorder?: string;
  /** CSS color for tooltip text */
  tooltipColor?: string;
  /** Primary accent color. Default: '#00c8ff' */
  accentColor?: string;
  /** Z-index for the overlay. Default: 9999 */
  zIndex?: number;
  /** Badge title text. Default: 'GHOST LENS' */
  badgeText?: string;
  /** Badge subtitle text. Default: 'Augmentation Active' */
  badgeSubtext?: string;
  /** Disable the lens entirely */
  disabled?: boolean;
  /** Callback when lens activates */
  onActivate?: () => void;
  /** Callback when lens deactivates */
  onDeactivate?: () => void;
}

// Core Engine
export class GhostLensEngine {
  constructor(container: HTMLElement | null, options?: GhostLensOptions);
  activate(): void;
  deactivate(): void;
  setIdleDelay(ms: number): void;
  destroy(): void;
}

export function isGhostLensDisabled(): boolean;

// React
export function useGhostLens(options?: GhostLensOptions): {
  activate: () => void;
  deactivate: () => void;
  setIdleDelay: (ms: number) => void;
};

export function GhostLens(props: GhostLensOptions & { children?: any }): any;

export function ghost(text: string): { 'data-ghost': string };

// Web Component
export class GhostLensElement extends HTMLElement {
  activate(): void;
  deactivate(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'ghost-lens': GhostLensElement;
  }
}
