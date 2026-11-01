import { describe, expect, it } from 'vitest';
import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  it('returns a stable healthy response', () => {
    expect(new HealthController().check()).toEqual({ status: 'ok' });
  });
});
