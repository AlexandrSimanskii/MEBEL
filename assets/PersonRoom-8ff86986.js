import{r as n,C as x,j as s}from"./index-47d36eb3.js";const p=()=>{var t;const{user:r,setUser:h}=n.useContext(x),[c,d]=n.useState([]),[i,j]=n.useState(!1),l=()=>{var o;return(o=r==null?void 0:r.orders)==null?void 0:o.map(a=>a.order).flat()};return n.useEffect(()=>{d(l())},[r]),s.jsx("section",{className:"room",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"room__inner",children:[s.jsxs("ul",{className:"room__bonus",children:[s.jsx("h4",{children:"Бонусная программа"}),s.jsxs("li",{className:"room__bonus-list",children:[s.jsxs("p",{children:["У вас ","",r.id?c&&Math.round(c.reduce((e,o)=>e+o.price,0)/100*3):0,""," бонусных баллов"]}),s.jsx("a",{children:"Правила бонусной программы"})]})]}),s.jsxs("ul",{className:"program-conditions",children:[s.jsx("li",{className:"program-conditions__cashback",children:"Возвращаем до 7% на бонусный счет"}),s.jsx("li",{className:"program-conditions__rub",children:"1 бонус = 1 рубль"}),s.jsx("li",{className:"program-conditions__present",children:"Оплачивайте бонусами до 20% от покупки"})]}),s.jsx("div",{className:"room__bottom",children:((t=r.orders)==null?void 0:t.length)&&s.jsxs("table",{children:[s.jsx("caption",{children:"Купленные товары"}),s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"Товар"}),s.jsx("td",{children:"Цена"}),s.jsx("td",{children:"Количество"}),s.jsx("td",{children:"Дата"})]})}),s.jsx("tbody",{children:c==null?void 0:c.map(e=>s.jsx(n.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("img",{className:"room__bottom-img",src:e.image,alt:""})}),s.jsxs("td",{children:[e.price," руб"]}),s.jsxs("td",{children:[e.count," "]}),s.jsx("td",{children:e.data})]})},e.id))})]})}),i?s.jsx("div",{className:"popup",children:s.jsx("img",{src:"/images/image/bonus.jpg",alt:""})}):""]})})})};export{p as default};
