import { NextRequest } from 'next/server';

/**
 * Validates request origin and referer to prevent CSRF and unauthorized cross-origin requests,
 * preserving exact behavior of Flask's security_check function.
 */
export function securityCheck(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host') || '';

  if (origin && !origin.includes(host) && !origin.includes('localhost') && !origin.includes('127.0.0.1')) {
    return false;
  }
  if (referer && !referer.includes(host) && !referer.includes('localhost') && !referer.includes('127.0.0.1')) {
    return false;
  }
  return true;
}
