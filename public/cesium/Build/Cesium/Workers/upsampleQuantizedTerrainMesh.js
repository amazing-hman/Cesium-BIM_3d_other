/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as be,b as Ne}from"./chunk-UHQPUMWN.js";import{a as Ae}from"./chunk-T2JXMNUX.js";import{a as ue}from"./chunk-6HPXDM4G.js";import{a as ee}from"./chunk-7QQVIQUI.js";import"./chunk-B5XY4KJS.js";import"./chunk-BXEYVAPQ.js";import"./chunk-AAT5S4I6.js";import"./chunk-S2GBLW2R.js";import{a as Ve}from"./chunk-7P3UWTUX.js";import{d as de}from"./chunk-VNH2ZAFU.js";import"./chunk-2YKWURU2.js";import{c as Se,d as Z}from"./chunk-TL76KVMB.js";import"./chunk-EK7K4JTS.js";import{a as A,b as Ie,c as Ce}from"./chunk-TZVAMLG3.js";import{a as N}from"./chunk-7IOYEWZQ.js";import"./chunk-XE4KLUZ2.js";import"./chunk-TL6AL3PA.js";import"./chunk-DYKDQ7Q5.js";import{a as V,b as q}from"./chunk-57R6MEVR.js";import{e as f}from"./chunk-KNXNZS2Q.js";var ne={};ne.clipTriangleAtAxisAlignedThreshold=function(n,h,o,i,s,e){if(!f(n))throw new V("threshold is required.");if(!f(h))throw new V("keepAbove is required.");if(!f(o))throw new V("u0 is required.");if(!f(i))throw new V("u1 is required.");if(!f(s))throw new V("u2 is required.");f(e)?e.length=0:e=[];let g,w,c;h?(g=o<n,w=i<n,c=s<n):(g=o>n,w=i>n,c=s>n);let p=g+w+c,d,u,r,l,I,C;return p===1?g?(d=(n-o)/(i-o),u=(n-o)/(s-o),e.push(1),e.push(2),u!==1&&(e.push(-1),e.push(0),e.push(2),e.push(u)),d!==1&&(e.push(-1),e.push(0),e.push(1),e.push(d))):w?(r=(n-i)/(s-i),l=(n-i)/(o-i),e.push(2),e.push(0),l!==1&&(e.push(-1),e.push(1),e.push(0),e.push(l)),r!==1&&(e.push(-1),e.push(1),e.push(2),e.push(r))):c&&(I=(n-s)/(o-s),C=(n-s)/(i-s),e.push(0),e.push(1),C!==1&&(e.push(-1),e.push(2),e.push(1),e.push(C)),I!==1&&(e.push(-1),e.push(2),e.push(0),e.push(I))):p===2?!g&&o!==n?(l=(n-i)/(o-i),I=(n-s)/(o-s),e.push(0),e.push(-1),e.push(1),e.push(0),e.push(l),e.push(-1),e.push(2),e.push(0),e.push(I)):!w&&i!==n?(C=(n-s)/(i-s),d=(n-o)/(i-o),e.push(1),e.push(-1),e.push(2),e.push(1),e.push(C),e.push(-1),e.push(0),e.push(1),e.push(d)):!c&&s!==n&&(u=(n-o)/(s-o),r=(n-i)/(s-i),e.push(2),e.push(-1),e.push(0),e.push(2),e.push(u),e.push(-1),e.push(1),e.push(2),e.push(r)):p!==3&&(e.push(0),e.push(1),e.push(2)),e};ne.computeBarycentricCoordinates=function(n,h,o,i,s,e,g,w,c){if(!f(n))throw new V("x is required.");if(!f(h))throw new V("y is required.");if(!f(o))throw new V("x1 is required.");if(!f(i))throw new V("y1 is required.");if(!f(s))throw new V("x2 is required.");if(!f(e))throw new V("y2 is required.");if(!f(g))throw new V("x3 is required.");if(!f(w))throw new V("y3 is required.");let p=o-g,d=g-s,u=e-w,r=i-w,l=1/(u*p+d*r),I=h-w,C=n-g,R=(u*C+d*I)*l,O=(-r*C+p*I)*l,W=1-R-O;return f(c)?(c.x=R,c.y=O,c.z=W,c):new A(R,O,W)};ne.computeLineSegmentLineSegmentIntersection=function(n,h,o,i,s,e,g,w,c){q.typeOf.number("x00",n),q.typeOf.number("y00",h),q.typeOf.number("x01",o),q.typeOf.number("y01",i),q.typeOf.number("x10",s),q.typeOf.number("y10",e),q.typeOf.number("x11",g),q.typeOf.number("y11",w);let p=(g-s)*(h-e)-(w-e)*(n-s),d=(o-n)*(h-e)-(i-h)*(n-s),u=(w-e)*(o-n)-(g-s)*(i-h);if(u===0)return;let r=p/u,l=d/u;if(r>=0&&r<=1&&l>=0&&l<=1)return f(c)||(c=new Z),c.x=n+r*(o-n),c.y=h+r*(i-h),c};var ie=ne;var a=32767,z=a/2|0,Me=[],ze=[],Xe=[],te=new Ie,E=new A,Ke=[],We=[],Ye=[],Le=[],_e=[],Je=new A,Qe=new de,Ze=new ue,Ge=new Z,$e=new A;function je(n,h){let o=n.isEastChild,i=n.isNorthChild,s=o?z:0,e=o?a:z,g=i?z:0,w=i?a:z,c=Ke,p=We,d=Ye,u=_e;c.length=0,p.length=0,d.length=0,u.length=0;let r=Le;r.length=0;let l={},I=n.vertices,C=n.indices;C=C.subarray(0,n.indexCountWithoutSkirts);let R=Ne.clone(n.encoding),O=R.hasVertexNormals,W=0,Y=n.vertexCountWithoutSkirts,se=n.minimumHeight,ae=n.maximumHeight,D=new Array(Y),G=new Array(Y),L=new Array(Y),F=O?new Array(Y*2):void 0,$=20,H,t,k,x,y;for(t=0,k=0;t<Y;++t,k+=2){let v=R.decodeTextureCoordinates(I,t,Ge);if(H=R.decodeHeight(I,t),x=N.clamp(v.x*a|0,0,a),y=N.clamp(v.y*a|0,0,a),L[t]=N.clamp((H-se)/(ae-se)*a|0,0,a),x<$&&(x=0),y<$&&(y=0),a-x<$&&(x=a),a-y<$&&(y=a),D[t]=x,G[t]=y,O){let Q=R.getOctEncodedNormal(I,t,$e);F[k]=Q.x,F[k+1]=Q.y}(o&&x>=z||!o&&x<=z)&&(i&&y>=z||!i&&y<=z)&&(l[t]=W,c.push(x),p.push(y),d.push(L[t]),O&&(u.push(F[k]),u.push(F[k+1])),++W)}let T=[];T.push(new m),T.push(new m),T.push(new m);let B=[];B.push(new m),B.push(new m),B.push(new m);let b,j;for(t=0;t<C.length;t+=3){let v=C[t],Q=C[t+1],Be=C[t+2],De=D[v],Fe=D[Q],ke=D[Be];T[0].initializeIndexed(D,G,L,F,v),T[1].initializeIndexed(D,G,L,F,Q),T[2].initializeIndexed(D,G,L,F,Be);let P=ie.clipTriangleAtAxisAlignedThreshold(z,o,De,Fe,ke,Me);b=0,!(b>=P.length)&&(b=B[0].initializeFromClipResult(P,b,T),!(b>=P.length)&&(b=B[1].initializeFromClipResult(P,b,T),!(b>=P.length)&&(b=B[2].initializeFromClipResult(P,b,T),j=ie.clipTriangleAtAxisAlignedThreshold(z,i,B[0].getV(),B[1].getV(),B[2].getV(),ze),Oe(c,p,d,u,r,l,j,B,O),b<P.length&&(B[2].clone(B[1]),B[2].initializeFromClipResult(P,b,T),j=ie.clipTriangleAtAxisAlignedThreshold(z,i,B[0].getV(),B[1].getV(),B[2].getV(),ze),Oe(c,p,d,u,r,l,j,B,O)))))}let He=o?-a:0,qe=i?-a:0,me=[],ge=[],le=[],we=[],U=Number.MAX_VALUE,_=-U,M=Xe;M.length=0;let re=Ce.clone(n.ellipsoid),J=Se.clone(n.childRectangle),Ee=J.north,Re=J.south,ce=J.east,xe=J.west;for(ce<xe&&(ce+=N.TWO_PI),t=0;t<c.length;++t)x=Math.round(c[t]),x<=s?(me.push(t),x=0):x>=e?(le.push(t),x=a):x=x*2+He,c[t]=x,y=Math.round(p[t]),y<=g?(ge.push(t),y=0):y>=w?(we.push(t),y=a):y=y*2+qe,p[t]=y,H=N.lerp(se,ae,d[t]/a),H<U&&(U=H),H>_&&(_=H),d[t]=H,te.longitude=N.lerp(xe,ce,x/a),te.latitude=N.lerp(Re,Ee,y/a),te.height=H,re.cartographicToCartesian(te,E),M.push(E.x),M.push(E.y),M.push(E.z);let he=de.fromVertices(M,A.ZERO,3,Qe),Ue=ue.fromRectangle(J,U,_,re,Ze),ve=new be(re).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(he.center,M,3,he.center,U,Je),Pe=_-U,X=new Uint16Array(c.length+p.length+d.length);for(t=0;t<c.length;++t)X[t]=c[t];let fe=c.length;for(t=0;t<p.length;++t)X[fe+t]=p[t];for(fe+=p.length,t=0;t<d.length;++t)X[fe+t]=a*(d[t]-U)/Pe;let pe=Ve.createTypedArray(c.length,r),ye;if(O){let v=new Uint8Array(u);h.push(X.buffer,pe.buffer,v.buffer),ye=v.buffer}else h.push(X.buffer,pe.buffer);return{vertices:X.buffer,encodedNormals:ye,indices:pe.buffer,minimumHeight:U,maximumHeight:_,westIndices:me,southIndices:ge,eastIndices:le,northIndices:we,boundingSphere:he,orientedBoundingBox:Ue,horizonOcclusionPoint:ve}}function m(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}m.prototype.clone=function(n){return f(n)||(n=new m),n.uBuffer=this.uBuffer,n.vBuffer=this.vBuffer,n.heightBuffer=this.heightBuffer,n.normalBuffer=this.normalBuffer,n.index=this.index,n.first=this.first,n.second=this.second,n.ratio=this.ratio,n};m.prototype.initializeIndexed=function(n,h,o,i,s){this.uBuffer=n,this.vBuffer=h,this.heightBuffer=o,this.normalBuffer=i,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0};m.prototype.initializeFromClipResult=function(n,h,o){let i=h+1;return n[h]!==-1?o[n[h]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=o[n[i]],++i,this.second=o[n[i]],++i,this.ratio=n[i],++i),i};m.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})};m.prototype.isIndexed=function(){return f(this.index)};m.prototype.getH=function(){return f(this.index)?this.heightBuffer[this.index]:N.lerp(this.first.getH(),this.second.getH(),this.ratio)};m.prototype.getU=function(){return f(this.index)?this.uBuffer[this.index]:N.lerp(this.first.getU(),this.second.getU(),this.ratio)};m.prototype.getV=function(){return f(this.index)?this.vBuffer[this.index]:N.lerp(this.first.getV(),this.second.getV(),this.ratio)};var K=new Z,oe=-1,en=[new A,new A],nn=[new A,new A];function Te(n,h){++oe;let o=en[oe],i=nn[oe];return o=ee.octDecode(n.first.getNormalX(),n.first.getNormalY(),o),i=ee.octDecode(n.second.getNormalX(),n.second.getNormalY(),i),E=A.lerp(o,i,n.ratio,E),A.normalize(E,E),ee.octEncode(E,h),--oe,h}m.prototype.getNormalX=function(){return f(this.index)?this.normalBuffer[this.index*2]:(K=Te(this,K),K.x)};m.prototype.getNormalY=function(){return f(this.index)?this.normalBuffer[this.index*2+1]:(K=Te(this,K),K.y)};var S=[];S.push(new m);S.push(new m);S.push(new m);S.push(new m);function Oe(n,h,o,i,s,e,g,w,c){if(g.length===0)return;let p=0,d=0;for(;d<g.length;)d=S[p++].initializeFromClipResult(g,d,w);for(let u=0;u<p;++u){let r=S[u];if(r.isIndexed())r.newIndex=e[r.index],r.uBuffer=n,r.vBuffer=h,r.heightBuffer=o,c&&(r.normalBuffer=i);else{let l=r.getKey();if(f(e[l]))r.newIndex=e[l];else{let I=n.length;n.push(r.getU()),h.push(r.getV()),o.push(r.getH()),c&&(i.push(r.getNormalX()),i.push(r.getNormalY())),r.newIndex=I,e[l]=I}}}p===3?(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex)):p===4&&(s.push(S[0].newIndex),s.push(S[1].newIndex),s.push(S[2].newIndex),s.push(S[0].newIndex),s.push(S[2].newIndex),s.push(S[3].newIndex))}var An=Ae(je);export{An as default};
