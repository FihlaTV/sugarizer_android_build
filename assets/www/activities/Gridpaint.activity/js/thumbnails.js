/*! Sugarizer 2019-09-21 */
function thumbsInit(){tl={x0:20,y0:100,xd:200,yd:200,xn:5},thumbframe.style.width="1024px",thumbframe.style.height="748px",newThumbCanvases(),select(selected)}function newThumbCanvases(){var a,b=tl.y0;for(i=0;i<15;i++){i%tl.xn==0&&(a=tl.x0);var c=newThumbCanvas(a,b);drawThumb(c,gallery[i]),thumbframe.appendChild(c),thumbcnvs.push(c),a+=tl.xd,i%tl.xn==tl.xn-1&&(b+=tl.yd)}}function newThumbCanvas(a,b){var c=document.createElement("canvas");return c.style.position="absolute",c.style.width="176px",c.style.height="147px",c.style.left=a+"px",c.style.top=b+"px",c.width=176,c.height=147,c}function drawThumb(a,b){var c=a.getContext("2d");c.save(),c.fillStyle="lightblue",c.scale(176/720,176/720),c.strokeStyle="#404040",c.lineWidth=1;for(var d=0;d<shapes.length;d++)c.fillStyle=fromColorLetter(b[d]),shapePath(d,c),c.fill();for(var d=0;d<shapes.length;d++)shapePath(d,c),c.stroke();c.restore()}function handleThumbStart(a,b){var c=Math.floor((b-tl.y0)/tl.yd)*tl.xn+Math.floor((a-tl.x0)/tl.xd);c<0||c>=15||(select(c),editMode(!0))}function handleRotate(a){var b=window.orientation;90==b||-90==b?(frame.style.width="1024px",frame.style.height="748px",editMode(!0)):(frame.style.width="768px",frame.style.height="1004px",selectorMode(!0))}function editMode(a){mode="edit",thumbframe.style.visibility="hidden",onStart=handleStart,loadPos(selected),changed=!1,a&&saveGallery(),clearbtn.style.display="inline"}function selectorMode(a){mode="selector",thumbframe.style.visibility="visible",onStart=handleThumbStart,changed&&savePos(selected),a&&saveGallery(),clearbtn.style.display="none"}function select(a){thumbcnvs[selected].style.border="0px",thumbcnvs[a].style.border="3px solid black",selected=a}function loadPos(a){for(var b=gallery[a],c=0;c<colors.length;c++)colors[c]=fromColorLetter(b[c]);for(var c=0;c<shapes.length;c++)fillPiece(c);for(var c=0;c<shapes.length;c++)strokePiece(c)}function savePos(a){var b=posString();drawThumb(thumbcnvs[a],b),gallery[a]=b,saveGallery()}function storedPos(a){for(var b="",c=0;c<colors.length;c++)b+="w";return b}function posString(){for(var a="",b=0;b<colors.length;b++)a+=toColorLetter(colors[b]);return a}function timestamp(){return Math.floor(Date.now()/1e3)}function fromColorLetter(a){return cnames[cletters.indexOf(a)]}function toColorLetter(a){return cletters[cnames.indexOf(a)]}var thumbcnvs=[],thumbframe,mode,selected=0,tl;