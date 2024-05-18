import{g as _,f as L,h as R,n as I,k as N,r as w,C as H,j as t,S as A,N as B,l as x,m as z,H as F,i as G}from"./index-47d36eb3.js";function D(l){let{swiper:e,extendParams:b,on:h}=l;b({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let g=!1,T=!1;e.thumbs={swiper:null};function j(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const s=i.clickedIndex,a=i.clickedSlide;if(a&&a.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let c;i.params.loop?c=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):c=s,e.params.loop?e.slideToLoop(c):e.slideTo(c)}function v(){const{thumbs:i}=e.params;if(g)return!1;g=!0;const s=e.constructor;if(i.swiper instanceof s)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(L(i.swiper)){const a=Object.assign({},i.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),T=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",j),!0}function d(i){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const a=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let c=1;const o=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(c=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),s.slides.forEach(u=>u.classList.remove(o)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let u=0;u<c;u+=1)R(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+u}"]`).forEach(n=>{n.classList.add(o)});else for(let u=0;u<c;u+=1)s.slides[e.realIndex+u]&&s.slides[e.realIndex+u].classList.add(o);const m=e.params.thumbs.autoScrollOffset,S=m&&!s.params.loop;if(e.realIndex!==s.realIndex||S){const u=s.activeIndex;let n,y;if(s.params.loop){const r=s.slides.filter(M=>M.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=s.slides.indexOf(r),y=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,y=n>e.previousIndex?"next":"prev";S&&(n+=y==="next"?m:-1*m),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n>u?n=n-Math.floor(a/2)+1:n=n+Math.floor(a/2)-1:n>u&&s.params.slidesPerGroup,s.slideTo(n,i?0:void 0))}}h("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const s=_(),a=()=>{const o=typeof i.swiper=="string"?s.querySelector(i.swiper):i.swiper;if(o&&o.swiper)i.swiper=o.swiper,v(),d(!0);else if(o){const m=S=>{i.swiper=S.detail[0],o.removeEventListener("init",m),v(),d(!0),i.swiper.update(),e.update()};o.addEventListener("init",m)}return o},c=()=>{if(e.destroyed)return;a()||requestAnimationFrame(c)};requestAnimationFrame(c)}else v(),d(!0)}),h("slideChange update resize observerUpdate",()=>{d()}),h("setTransition",(i,s)=>{const a=e.thumbs.swiper;!a||a.destroyed||a.setTransition(s)}),h("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||T&&i.destroy()}),Object.assign(e.thumbs,{init:v,update:d})}function O(l){let{swiper:e,extendParams:b,emit:h,once:g}=l;b({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function T(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function j(){if(e.params.cssMode)return;const{touchEventsData:d,touches:i}=e;d.velocities.length===0&&d.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:I()})}function v(d){let{currentPos:i}=d;if(e.params.cssMode)return;const{params:s,wrapperEl:a,rtlTranslate:c,snapGrid:o,touchEventsData:m}=e,u=I()-m.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<o.length?e.slideTo(o.length-1):e.slideTo(e.slides.length-1);return}if(s.freeMode.momentum){if(m.velocities.length>1){const p=m.velocities.pop(),f=m.velocities.pop(),V=p.position-f.position,k=p.time-f.time;e.velocity=V/k,e.velocity/=2,Math.abs(e.velocity)<s.freeMode.minimumVelocity&&(e.velocity=0),(k>150||I()-p.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=s.freeMode.momentumVelocityRatio,m.velocities.length=0;let n=1e3*s.freeMode.momentumRatio;const y=e.velocity*n;let r=e.translate+y;c&&(r=-r);let M=!1,P;const C=Math.abs(e.velocity)*20*s.freeMode.momentumBounceRatio;let E;if(r<e.maxTranslate())s.freeMode.momentumBounce?(r+e.maxTranslate()<-C&&(r=e.maxTranslate()-C),P=e.maxTranslate(),M=!0,m.allowMomentumBounce=!0):r=e.maxTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(r>e.minTranslate())s.freeMode.momentumBounce?(r-e.minTranslate()>C&&(r=e.minTranslate()+C),P=e.minTranslate(),M=!0,m.allowMomentumBounce=!0):r=e.minTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(s.freeMode.sticky){let p;for(let f=0;f<o.length;f+=1)if(o[f]>-r){p=f;break}Math.abs(o[p]-r)<Math.abs(o[p-1]-r)||e.swipeDirection==="next"?r=o[p]:r=o[p-1],r=-r}if(E&&g("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(c?n=Math.abs((-r-e.translate)/e.velocity):n=Math.abs((r-e.translate)/e.velocity),s.freeMode.sticky){const p=Math.abs((c?-r:r)-e.translate),f=e.slidesSizesGrid[e.activeIndex];p<f?n=s.speed:p<2*f?n=s.speed*1.5:n=s.speed*2.5}}else if(s.freeMode.sticky){e.slideToClosest();return}s.freeMode.momentumBounce&&M?(e.updateProgress(P),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating=!0,N(a,()=>{!e||e.destroyed||!m.allowMomentumBounce||(h("momentumBounce"),e.setTransition(s.speed),setTimeout(()=>{e.setTranslate(P),N(a,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(h("_freeModeNoMomentumRelease"),e.updateProgress(r),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,N(a,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(r),e.updateActiveIndex(),e.updateSlidesClasses()}else if(s.freeMode.sticky){e.slideToClosest();return}else s.freeMode&&h("_freeModeNoMomentumRelease");(!s.freeMode.momentum||u>=s.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:T,onTouchMove:j,onTouchEnd:v}})}const $=({product:l})=>{const{user:e,favorites:b,favoritesHandler:h,addCarts:g,addCardsCountPlus:T,addCardsCountMinus:j}=w.useContext(H),[v,d]=w.useState(!1),[i,s]=w.useState(1);return w.useEffect(()=>{var a;d(!((a=e.carts)!=null&&a.some(c=>c.id===l.id)))},[]),t.jsxs("div",{className:"purches__inform",children:[t.jsx("h3",{children:l.title}),t.jsx("p",{className:"purches__inform-category",children:l.category}),t.jsxs("div",{className:"payGroup",children:[t.jsxs("p",{className:"payGroup-price",children:[l.price,"₽"]}),v?t.jsx("button",{form:"chengePSC",onClick:()=>{g(l),d(!1),s(1)},children:"В корзину"}):t.jsxs("div",{className:"chengePSC",children:[t.jsx("button",{type:"button",onClick:()=>{s(a=>a>1?a-1:d(!0)),j(l.id)},children:"-"}),t.jsx("p",{children:i}),t.jsx("button",{type:"button",onClick:()=>{T(l._id)},children:"+"})]}),t.jsxs("div",{className:"payGroup-favorite",children:[t.jsx("img",{onClick:()=>h(l),src:b.some(a=>a.id===l.id)?"/images/icons/HeartRed.svg":"/images/icons/favorite.svg",alt:""}),t.jsx("p",{children:"Добавить в желаемое"})]})]}),t.jsxs("div",{className:"productDescription",children:[t.jsx("h4",{children:"Описание"}),t.jsx("p",{children:l.description})]})]})};const q=({product:l})=>{const[e,b]=w.useState(null);return t.jsxs("div",{className:"product__slider",children:[t.jsxs(A,{loop:!0,spaceBetween:10,navigation:!1,thumbs:{swiper:e},modules:[O,B,D],className:"mySwiper2",children:[t.jsx(x,{children:t.jsx("img",{src:l.image,alt:"chair"})}),t.jsx(x,{children:t.jsx("img",{src:"../../../public/images/image/chair3.png",alt:"chair"})}),t.jsx(x,{children:t.jsx("img",{src:"../../../public/images/image/chair4.png",alt:"chair"})}),t.jsx(x,{children:t.jsx("img",{src:"../../../public/images/image/chair5.png",alt:"chair"})}),t.jsx(x,{children:t.jsx("img",{src:"../../../public/images/image/chair6.png",alt:"chair"})})]}),t.jsxs(A,{onSwiper:b,loop:!0,spaceBetween:10,slidesPerView:"auto",navigation:!0,freeMode:!0,watchSlidesProgress:!0,modules:[O,B,D],className:"mySwiper-product",children:[t.jsx(x,{children:t.jsx("div",{className:"a",children:t.jsx("img",{src:l.image,alt:"chair"})})}),t.jsx(x,{children:t.jsx("div",{className:"a",children:t.jsx("img",{src:"/images/image/chair3.png",alt:"chair"})})}),t.jsx(x,{children:t.jsx("div",{className:"a",children:t.jsx("img",{src:"/images/image/chair4.png",alt:"chair"})})}),t.jsx(x,{children:t.jsx("div",{className:"a",children:t.jsx("img",{src:"/images/image/chair5.png",alt:"chair"})})}),t.jsx(x,{children:t.jsx("div",{className:"a",children:t.jsx("img",{src:"/images/image/chair6.png",alt:"chair"})})})]})]})},Y=()=>{const l=z(),[e,b]=w.useState({});return w.useEffect(()=>{(async()=>{try{const g=await G.get(`app/products/get/${l.id}`);b({...g.data})}catch{console.log("erorr fetchProduct")}})()},[l.id]),"_id"in e?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"cardProduct",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"cardProduct__inner",children:[t.jsx(q,{product:e}),t.jsx($,{product:e})]})})}),t.jsx(F,{})]}):t.jsx("h2",{children:"loading"})};export{Y as default};
