import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './three.js.png',
    fullDecall: './threejs.png'
});

export default state;