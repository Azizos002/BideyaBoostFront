(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{913:(e,t,s)=>{Promise.resolve().then(s.bind(s,5984)),Promise.resolve().then(s.t.bind(s,6874,23))},4436:(e,t,s)=>{"use strict";s.d(t,{k5:()=>x});var r=s(2115),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(l),a=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach(function(t){var r,l,n;r=e,l=t,n=s[t],(l=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var r=s.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(l))in r?Object.defineProperty(r,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[l]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function x(e){return t=>r.createElement(m,o({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,s)=>r.createElement(t.tag,c({key:s},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var s,{attr:l,size:n,title:i}=e,x=function(e,t){if(null==e)return{};var s,r,l=function(e,t){if(null==e)return{};var s={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;s[r]=e[r]}return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}(e,a),m=n||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,x,{className:s,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==n?r.createElement(n.Consumer,null,e=>t(e)):t(l)}},5984:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var r=s(5155),l=s(6874),n=s.n(l),a=s(4315),o=s(3029),i=s(5695),c=s(2115),x=s(5799);function m(){let[e,t]=(0,c.useState)({email:"",password:""}),[s,l]=(0,c.useState)(""),m=(0,i.useRouter)(),d=e=>{let{name:s,value:r}=e.target;t(e=>({...e,[s]:r}))};return(0,r.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-white",children:[(0,r.jsx)(x.N9,{})," ",(0,r.jsxs)("div",{className:"border-2 border-[#E4E5E0] flex bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full",children:[(0,r.jsxs)("div",{className:"p-4 w-[50%]",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-[#013069] text-center",children:" Login"}),(0,r.jsxs)("form",{className:"space-y-4",onSubmit:t=>{if(t.preventDefault(),Object.values(e).some(e=>""===e)){l("Veuillez remplir tous les champs !");return}console.log("Form Data:",e),x.oR.success("Welcome back!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout(()=>{m.push("/PodcastPage")},3e3)},children:[(0,r.jsx)("div",{className:"flex flex-col items-center justify-center p-4",children:(0,r.jsx)("div",{className:"w-[400px] h-[40px] bg-[#317AC1] rounded-[10px] flex items-center justify-center",children:(0,r.jsxs)("div",{className:"flex space-x-20",children:[(0,r.jsx)("label",{className:"flex items-center",children:(0,r.jsx)("span",{className:"text-white",children:"Student"})}),(0,r.jsxs)("label",{className:"flex items-center relative",children:[(0,r.jsx)("div",{className:"absolute bottom-[-3.5px] left-1/2 transform -translate-x-1/2 w-[130px] h-[26px] bg-white rounded-sm"}),(0,r.jsx)("span",{className:"text-[#000000] relative z-10",children:"Teacher"})]}),(0,r.jsx)("label",{className:"flex items-center",children:(0,r.jsx)("span",{className:"text-white",children:"Parent"})})]})})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"w-[400px]",children:[(0,r.jsx)("label",{htmlFor:"emailPhone",className:"block text-sm font-medium text-[#000000] pl-5.5 mb-1",children:"Email or phone number"}),(0,r.jsx)("input",{type:"text",id:"emailPhone",name:"email",value:e.email,onChange:d,placeholder:"Enter your Email or your phone number",className:"w-full h-[40px] pl-6 pr-3 py-2 border-[1px] border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm",required:!0})]})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"w-[400px]",children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-[#000000] pl-5.5 mb-1",children:"Password"}),(0,r.jsx)("input",{type:"password",id:"password",name:"password",value:e.password,onChange:d,placeholder:"password",className:"w-full h-[40px] pl-6 pr-3 py-2 border-[1px] border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm",required:!0})]})})}),s&&(0,r.jsx)("p",{className:"text-red-500 text-sm",children:s}),(0,r.jsxs)("div",{className:"flex items-center space-x-15",children:[(0,r.jsx)("div",{className:"flex items-center ml-13",children:(0,r.jsx)("img",{src:"/imnotarobot.jpg",alt:"I'm not a robot",className:"h-9 w-auto"})}),(0,r.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,r.jsx)(a.zGo,{className:"text-[#0C9BAB] h-4 w-4 ml-12"}),(0,r.jsx)("span",{className:"text-[12px] text-[#000000]",children:"Keep me logged in"})]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center my-6 w-[400px] mx-auto",children:[(0,r.jsx)("div",{className:"w-[400%] h-px bg-[#E4E5E0]"}),(0,r.jsx)("span",{className:"mx-4 text-[12px] text-[#E4E5E0]",children:"OR"}),(0,r.jsx)("div",{className:"w-[400%] h-px bg-[#E4E5E0]"})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("button",{type:"button",className:"w-[300px] h-[35px] text-131900 rounded-md mt-4 focus:outline-none focus:ring-2 border-2 border-[#E4E4E0] flex items-center justify-center mx-auto",children:[(0,r.jsx)(o.F4b,{className:"w-5 h-5 mr-3"}),(0,r.jsx)("span",{children:"Sign in with Google"})]})}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{type:"submit",className:"w-[250px] h-[35px] bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Log in"})}),(0,r.jsxs)("p",{className:"text-sm text-center text-gray-600",children:["Don’t have an account?"," ",(0,r.jsxs)(n(),{href:"/SignInPage",className:"text-blue-600 hover:underline relative",children:["Create one now",(0,r.jsx)("span",{className:"absolute bottom-0 left-0.5 right-0.5 w-full h-[1px] bg-blue-400"})]})]})]})]}),(0,r.jsxs)("div",{className:"relative w-[50%] flex items-center justify-center bg-cover bg-center",style:{backgroundImage:"url(/img2.jpg)"},children:[(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-20"}),(0,r.jsxs)("div",{className:"relative z-10 bg-[#D9D9D9] rounded-[20px] p-8 w-[90%] h-[90%] text-center",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-[#013069]",children:"\uD83D\uDE80 WELCOME \uD83D\uDE80"}),(0,r.jsx)("h2",{className:"text-xl font-semibold mt-2 text-[#013069]",children:"\uD83D\uDE80 TO BIDEYA BOOST \uD83D\uDE80"}),(0,r.jsxs)("p",{className:"mt-4 text-sm Konkhmer Sleokchher font-semibold text-[#013069]",children:["Your future starts here! Bideya Boost empowers students and graduates with ",(0,r.jsx)("u",{children:"personalized guidance"}),", ",(0,r.jsx)("u",{children:"expert mentorship"}),", and ",(0,r.jsx)("u",{children:"real-world opportunities"})," to make informed career and education choices."]}),(0,r.jsxs)("ul",{className:"mt-6 text-sm text-[#013069] Konkhmer Sleokchher font-semibold space-y-2",children:[(0,r.jsx)("li",{children:" Discover your strengths"}),(0,r.jsx)("li",{children:" Gain expert insights"}),(0,r.jsx)("li",{children:" Connect with professionals"}),(0,r.jsx)("li",{children:" Unlock your potential"})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("p",{className:"text-md text-[#013069] font-semibold",children:"Log in now and take control of your journey!"}),(0,r.jsx)("div",{className:"w-full h-[1px] bg-[#013069] my-5"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-[#013069] text-center",children:"Follow us on our social media"})]}),(0,r.jsxs)("div",{className:"mt-4 flex justify-center space-x-5",children:[(0,r.jsx)(a.iYk,{className:"text-[#1877F2] text-2xl hover:scale-100 transition-transform cursor-pointer"}),(0,r.jsx)(a.ao$,{className:"text-[#C13584] text-2xl hover:scale-100 transition-transform cursor-pointer"}),(0,r.jsx)(a.TCj,{className:"text-black text-2xl hover:scale-100 transition-transform cursor-pointer"}),(0,r.jsx)(a.Vk6,{className:"text-red-600 text-2xl hover:scale-100 transition-transform cursor-pointer"})]})]})]})]})]})}s(5716)}},e=>{var t=t=>e(e.s=t);e.O(0,[797,446,753,874,960,441,684,358],()=>t(913)),_N_E=e.O()}]);