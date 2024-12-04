import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  // Permitir almacenar cualquier tipo de objeto
  getItem<T>(key: string): T | null {
    if (this.isLocalStorageAvailable()) {
      const item = localStorage.getItem(key);
      if (item) {
        try {
          return JSON.parse(item) as T;  // Intentamos deserializar el objeto
        } catch (error) {
          console.error('Error al parsear el item de localStorage', error);
          return null;
        }
      }
    }
    return null;
  }

  // Permitir almacenar cualquier tipo de objeto
  setItem<T>(key: string, value: T): void {
    if (this.isLocalStorageAvailable()) {
      try {
        const serializedValue = JSON.stringify(value);  // Serializamos el objeto
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error('Error al serializar el objeto para localStorage', error);
      }
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }
}
