function t(){return(t=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t}).apply(this,arguments)}const r=require("lodash.map"),a=require("tailwindcss/plugin")(function({config:t,addUtilities:a,addBase:e,theme:s,e:n}){"jit"==t("mode")&&(e({"*, ::before, ::after":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-translate-z":"0","--tw-rotate-x":"0","--tw-rotate-y":"0","--tw-rotate-z":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-scale-z":"1","--tw-transform":["translateX(var(--tw-translate-x))","translateY(var(--tw-translate-y))","rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z))","translateZ(var(--tw-translate-z))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scale3d(var(--tw-scale-x), var(--tw-scale-y), var(--tw-scale-z))"].join(" ")}}),a({".transform-style-flat":{"transform-style":"flat"},".transform-style-3d":{"transform-style":"preserve-3d"}}),a({".backface-visible":{"backface-visibility":"visible"},".backface-hidden":{"backface-visibility":"hidden"}}),a(r(s("transformOrigin"),(t,r)=>({[`.${n(`perspective-origin-${r}`)}`]:{"perspective-origin":t}}))),a(r(s("perspectiveValues"),(t,r)=>({[`.${n(`perspective-${r}`)}`]:{perspective:t}}))),a({".transform-3d-none":{transform:"none"}}),a(r(s("rotate3d"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-rotate-x${r}`)}`:`.${n(`rotate-x-${r}`)}`,{[a]:{"--tw-rotate-x":t,transform:"var(--tw-transform)"}}})),a(r(s("rotate3d"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-rotate-y${r}`)}`:`.${n(`rotate-y-${r}`)}`,{[a]:{"--tw-rotate-y":t,transform:"var(--tw-transform)"}}})),a(r(s("rotate3d"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-rotate-z${r}`)}`:`.${n(`rotate-z-${r}`)}`,{[a]:{"--tw-rotate-z":t,transform:"var(--tw-transform)"}}})),a(r(s("translate"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-translate-x${r}`)}`:`.${n(`translate-x-${r}`)}`,{[a]:{"--tw-translate-x":t,transform:"var(--tw-transform)"}}})),a(r(s("translate"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-translate-y${r}`)}`:`.${n(`translate-y-${r}`)}`,{[a]:{"--tw-translate-y":t,transform:"var(--tw-transform)"}}})),a(r(s("translate"),(t,r)=>{let a;return a=r.startsWith("-")?`.${n(`-translate-z${r}`)}`:`.${n(`translate-z-${r}`)}`,{[a]:{"--tw-translate-z":t,transform:"var(--tw-transform)"}}})),a(r(s("scale"),(t,r)=>({[`.${n(`scale-x-${r}`)}`]:{"--tw-scale-x":t,transform:"var(--tw-transform)"}}))),a(r(s("scale"),(t,r)=>({[`.${n(`scale-y-${r}`)}`]:{"--tw-scale-y":t,transform:"var(--tw-transform)"}}))),a(r(s("scale"),(t,r)=>({[`.${n(`scale-z-${r}`)}`]:{"--tw-scale-z":t,transform:"var(--tw-transform)"}}))))},{theme:{perspectiveValues:{none:"none",1:"100px",2:"200px",3:"300px",4:"600px",5:"500px",6:"600px",7:"700px",8:"800px",9:"900px",10:"1000px","25vw":"25vw","50vw":"50vw","75w":"75vw","100vw":"100vw"},translate3d:(r,{negative:a})=>t({},r("spacing"),a(r("spacing"))),rotate3d:r=>t({},r("rotate"),{"-60":"-60deg","-50":"-50deg","-40":"-40deg","-35":"-35deg","-30":"-30deg","-25":"-25deg","-20":"-20deg","-15":"-15deg","-10":"-10deg",10:"10deg",15:"15deg",20:"20deg",25:"25deg",30:"30deg",35:"35deg",40:"40deg",50:"50deg",60:"60deg"})}});module.exports=a;
//# sourceMappingURL=tailwindcss-perspective.modern.js.map