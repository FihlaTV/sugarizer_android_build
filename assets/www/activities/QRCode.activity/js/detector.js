/*! Sugarizer 2019-09-21 */
function PerspectiveTransform(a,b,c,d,e,f,g,h,i){this.a11=a,this.a12=d,this.a13=g,this.a21=b,this.a22=e,this.a23=h,this.a31=c,this.a32=f,this.a33=i,this.transformPoints1=function(a){for(var b=a.length,c=this.a11,d=this.a12,e=this.a13,f=this.a21,g=this.a22,h=this.a23,i=this.a31,j=this.a32,k=this.a33,l=0;l<b;l+=2){var m=a[l],n=a[l+1],o=e*m+h*n+k;a[l]=(c*m+f*n+i)/o,a[l+1]=(d*m+g*n+j)/o}},this.transformPoints2=function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d],f=b[d],g=this.a13*e+this.a23*f+this.a33;a[d]=(this.a11*e+this.a21*f+this.a31)/g,b[d]=(this.a12*e+this.a22*f+this.a32)/g}},this.buildAdjoint=function(){return new PerspectiveTransform(this.a22*this.a33-this.a23*this.a32,this.a23*this.a31-this.a21*this.a33,this.a21*this.a32-this.a22*this.a31,this.a13*this.a32-this.a12*this.a33,this.a11*this.a33-this.a13*this.a31,this.a12*this.a31-this.a11*this.a32,this.a12*this.a23-this.a13*this.a22,this.a13*this.a21-this.a11*this.a23,this.a11*this.a22-this.a12*this.a21)},this.times=function(a){return new PerspectiveTransform(this.a11*a.a11+this.a21*a.a12+this.a31*a.a13,this.a11*a.a21+this.a21*a.a22+this.a31*a.a23,this.a11*a.a31+this.a21*a.a32+this.a31*a.a33,this.a12*a.a11+this.a22*a.a12+this.a32*a.a13,this.a12*a.a21+this.a22*a.a22+this.a32*a.a23,this.a12*a.a31+this.a22*a.a32+this.a32*a.a33,this.a13*a.a11+this.a23*a.a12+this.a33*a.a13,this.a13*a.a21+this.a23*a.a22+this.a33*a.a23,this.a13*a.a31+this.a23*a.a32+this.a33*a.a33)}}function DetectorResult(a,b){this.bits=a,this.points=b}function Detector(a){this.image=a,this.resultPointCallback=null,this.sizeOfBlackWhiteBlackRun=function(a,b,c,d){var e=Math.abs(d-b)>Math.abs(c-a);if(e){var f=a;a=b,b=f,f=c,c=d,d=f}for(var g=Math.abs(c-a),h=Math.abs(d-b),i=-g>>1,j=b<d?1:-1,k=a<c?1:-1,l=0,m=a,n=b;m!=c;m+=k){var o=e?n:m,p=e?m:n;if(1==l?this.image[o+p*qrcode.width]&&l++:this.image[o+p*qrcode.width]||l++,3==l){var q=m-a,r=n-b;return Math.sqrt(q*q+r*r)}if((i+=h)>0){if(n==d)break;n+=j,i-=g}}var s=c-a,t=d-b;return Math.sqrt(s*s+t*t)},this.sizeOfBlackWhiteBlackRunBothWays=function(a,b,c,d){var e=this.sizeOfBlackWhiteBlackRun(a,b,c,d),f=1,g=a-(c-a);g<0?(f=a/(a-g),g=0):g>=qrcode.width&&(f=(qrcode.width-1-a)/(g-a),g=qrcode.width-1);var h=Math.floor(b-(d-b)*f);return f=1,h<0?(f=b/(b-h),h=0):h>=qrcode.height&&(f=(qrcode.height-1-b)/(h-b),h=qrcode.height-1),g=Math.floor(a+(g-a)*f),(e+=this.sizeOfBlackWhiteBlackRun(a,b,g,h))-1},this.calculateModuleSizeOneWay=function(a,b){var c=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(a.X),Math.floor(a.Y),Math.floor(b.X),Math.floor(b.Y)),d=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(b.X),Math.floor(b.Y),Math.floor(a.X),Math.floor(a.Y));return isNaN(c)?d/7:isNaN(d)?c/7:(c+d)/14},this.calculateModuleSize=function(a,b,c){return(this.calculateModuleSizeOneWay(a,b)+this.calculateModuleSizeOneWay(a,c))/2},this.distance=function(a,b){var c=a.X-b.X,d=a.Y-b.Y;return Math.sqrt(c*c+d*d)},this.computeDimension=function(a,b,c,d){var e=Math.round(this.distance(a,b)/d),f=Math.round(this.distance(a,c)/d),g=7+(e+f>>1);switch(3&g){case 0:g++;break;case 2:g--;break;case 3:throw"Error"}return g},this.findAlignmentInRegion=function(a,b,c,d){var e=Math.floor(d*a),f=Math.max(0,b-e),g=Math.min(qrcode.width-1,b+e);if(g-f<3*a)throw"Error";var h=Math.max(0,c-e),i=Math.min(qrcode.height-1,c+e);return new AlignmentPatternFinder(this.image,f,h,g-f,i-h,a,this.resultPointCallback).find()},this.createTransform=function(a,b,c,d,e){var f,g,h,i,j=e-3.5;return null!=d?(f=d.X,g=d.Y,h=i=j-3):(f=b.X-a.X+c.X,g=b.Y-a.Y+c.Y,h=i=j),PerspectiveTransform.quadrilateralToQuadrilateral(3.5,3.5,j,3.5,h,i,3.5,j,a.X,a.Y,b.X,b.Y,f,g,c.X,c.Y)},this.sampleGrid=function(a,b,c){return GridSampler.sampleGrid3(a,c,b)},this.processFinderPatternInfo=function(a){var b=a.TopLeft,c=a.TopRight,d=a.BottomLeft,e=this.calculateModuleSize(b,c,d);if(e<1)throw"Error";var f=this.computeDimension(b,c,d,e),g=Version.getProvisionalVersionForDimension(f),h=g.DimensionForVersion-7,i=null;if(g.AlignmentPatternCenters.length>0)for(var j=c.X-b.X+d.X,k=c.Y-b.Y+d.Y,l=1-3/h,m=Math.floor(b.X+l*(j-b.X)),n=Math.floor(b.Y+l*(k-b.Y)),o=4;o<=16;o<<=1){i=this.findAlignmentInRegion(e,m,n,o);break}var p,q=this.createTransform(b,c,d,i,f),r=this.sampleGrid(this.image,q,f);return p=null==i?new Array(d,b,c):new Array(d,b,c,i),new DetectorResult(r,p)},this.detect=function(){var a=(new FinderPatternFinder).findFinderPattern(this.image);return this.processFinderPatternInfo(a)}}PerspectiveTransform.quadrilateralToQuadrilateral=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=this.quadrilateralToSquare(a,b,c,d,e,f,g,h);return this.squareToQuadrilateral(i,j,k,l,m,n,o,p).times(q)},PerspectiveTransform.squareToQuadrilateral=function(a,b,c,d,e,f,g,h){var i=h-f,j=b-d+f-h;if(0==i&&0==j)return new PerspectiveTransform(c-a,e-c,a,d-b,f-d,b,0,0,1);var k=c-e,l=g-e,m=a-c+e-g,n=d-f,o=k*i-l*n,p=(m*i-l*j)/o,q=(k*j-m*n)/o;return new PerspectiveTransform(c-a+p*c,g-a+q*g,a,d-b+p*d,h-b+q*h,b,p,q,1)},PerspectiveTransform.quadrilateralToSquare=function(a,b,c,d,e,f,g,h){return this.squareToQuadrilateral(a,b,c,d,e,f,g,h).buildAdjoint()};