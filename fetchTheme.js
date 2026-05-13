async function run() {
    const res = await fetch('https://cdn-jfepl.nitrocdn.com/IvslcYSboHnVotRTPmSOaEogFdyMPlgO/assets/static/optimized/rev-feaec19/ccurity.com.mx/externalFontFace/nitro-min-noimport-7e33ee812344c858e675554e3c9f4b68-stylesheet.css');
    const text = await res.text();
    console.log("FONT FAMILIES:");
    console.log(Array.from(new Set(text.match(/font-family:[^;]*/g))));
    
    // Also let's check for variables in the main CSS file for the site
    const res2 = await fetch('https://ccurity.com.mx/');
    const html = await res2.text();
    
    // find elementor CSS or global CSS
    const globalCssLinks = html.match(/href="([^"]+\.css[^"]*)"/g).filter(s => !s.includes('googleapis'));
    
    console.log("OTHER CSS LINKS:");
    console.log(globalCssLinks.slice(0, 5));
}
run();
