import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss'; // Añade esta línea

export default {
  plugins: [
    tailwindcss(), // Añade Tailwind antes de autoprefixer
    autoprefixer({
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'last 4 Safari versions',
        'last 4 Android versions',
        'last 4 ChromeAndroid versions',
        'last 4 FirefoxAndroid versions',
        'last 4 iOS versions',
      ],
    }),
  ],
};
