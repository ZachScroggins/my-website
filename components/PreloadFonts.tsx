import React from 'react';

const fonts = [
  { name: 'nunito-v16-latin-regular' },
  { name: 'nunito-v16-latin-200' },
  { name: 'nunito-v16-latin-300' },
  { name: 'nunito-v16-latin-600' },
  { name: 'nunito-v16-latin-700' },
  { name: 'nunito-v16-latin-800' },
  { name: 'nunito-v16-latin-900' },
];

const PreloadFonts = () => (
  <>
    {fonts.map((font, index) => (
      <React.Fragment key={index}>
        <link
          rel='preload'
          href={`/fonts/${font.name}.woff`}
          crossOrigin='anonymous'
          as='font'
          type='font/woff'
        />
        <link
          rel='preload'
          href={`/fonts/${font.name}.woff2`}
          crossOrigin='anonymous'
          as='font'
          type='font/woff2'
        />
      </React.Fragment>
    ))}
  </>
);

export default PreloadFonts;
