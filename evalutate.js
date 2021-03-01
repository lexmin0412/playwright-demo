const {
  firefox
} = require( 'playwright' );

( async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto( 'https://www.baidu.com/' );
  const dimensions = await page.evaluate( () => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  } );
  console.log( dimensions );
  console.log( 'dimensions', dimensions )
  await setTimeout( () => {
     browser.close();
  }, 5000 );
} )();