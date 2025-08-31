// Development utilities for better debugging and development experience

// Enable console logging in development only
export const devLog = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 [DEV]:', ...args);
  }
};

// Enable console warnings in development only
export const devWarn = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️ [DEV]:', ...args);
  }
};

// Enable console errors in development only
export const devError = (...args: any[]) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('❌ [DEV]:', ...args);
  }
};

// Performance measurement utility
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    devLog(`${name} took ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};

// Component render counter for debugging
export const useRenderCount = (componentName: string) => {
  if (process.env.NODE_ENV === 'development') {
    const renderCount = React.useRef(0);
    renderCount.current += 1;
    devLog(`${componentName} rendered ${renderCount.current} times`);
  }
};

// Import React for the hook
import React from 'react';
