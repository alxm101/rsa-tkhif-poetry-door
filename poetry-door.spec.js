import {
    frontDoorResponse,
    frontDoorPassword,
    backDoorResponse,
    backDoorPassword
  } from './poetry-door.js'
  
  describe('front door response', () => {
    test('should return the first letter of the line', () => {
      expect(frontDoorResponse('Stands so high')).toBe('S');
      expect(frontDoorResponse('Huge hooves too')).toBe('H');
      expect(frontDoorResponse('Impatiently waits for')).toBe('I');
      expect(frontDoorResponse('Reins and harness')).toBe('R');
      expect(frontDoorResponse('Eager to leave')).toBe('E');
    });
  });
  
  describe('front door password', () => {
    test('should capitalize correctly', () => {
      expect(frontDoorPassword('SHIRE')).toBe('Shire');
      expect(frontDoorPassword('shire')).toBe('Shire');
    });
  });
  
  describe('back door response', () => {
    test('should return the last non-whitespace character of the line', () => {
      expect(backDoorResponse('Stands so high')).toBe('h');
      expect(backDoorResponse('Huge hooves too')).toBe('o');
      expect(backDoorResponse('Impatiently waits for')).toBe('r');
      expect(backDoorResponse('Reins and harness')).toBe('s');
      expect(backDoorResponse('Eager to leave')).toBe('e');
      expect(backDoorResponse('Stands so high   ')).toBe('h');
    });
  });
  
  describe('back door password', () => {
    test('should capitalize and add polite phrase', () => {
      expect(backDoorPassword('horse')).toBe('Horse, please');
      expect(backDoorPassword('HORSE')).toBe('Horse, please');
    });
  });
  