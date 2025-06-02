import ColorThief from 'colorthief';
// TODO: Remove colorthief.d.ts when the package is updated to include types
export const extractColors = async (imageUrl: string) => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';

    return new Promise(resolve => {
      img.onload = () => {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 3);
        const hexColors = palette?.map((rgb: number[]) => {
          const [r, g, b] = rgb;
          return `rgb(${r}, ${g}, ${b})`;
        });
        resolve(hexColors);
      };
      img.src = imageUrl;
    });
  };