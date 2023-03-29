const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Ścieżka do folderu z testami
  testDir: './Regression Test',

  // Liczba prób powtórzenia testów w razie niepowodzenia
  retries: 2,

  // Liczba wątków do uruchamiania testów
  workers: 4,

  // Czy uruchamiać testy równolegle na wielu przeglądarkach
  fullyParallel: true,

  // Maksymalny czas oczekiwania na zakończenie testu
  timeout: 600000,

  // Konfiguracja raportowania
  reporter: [
    ['list'],
    ['junit', { outputFile: './reports/results.xml' }]
  ],

  // Konfiguracja projektów dla różnych przeglądarek
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
      },

    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: false,
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
      },
    },

  ],

});