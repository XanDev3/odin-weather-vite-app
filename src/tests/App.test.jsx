import { describe, it, expect } from 'vitest';
import { render, screen} from '@testing-library/react'
import App from '../App'

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', ()=>{
    it('reanders headline', () => {
        render(<App title="Weather App" />)
        
        screen.debug();
    });
})