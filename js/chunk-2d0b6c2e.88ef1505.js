(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c2e"],{"1f14":function(e,t,a){"use strict";a.r(t);a("27f1");var c=a("1c96"),n=a("7a23"),r=a("0d17"),o=a("6779"),i=a("3de1"),l=a("a336"),s=a("6be8"),b=a("453f"),m=a("bae1");const u={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},d=Object(n["createElementVNode"])("div",{class:"font-bold text-center mb-3 text-primaryColor"},"-- 矿池信息 --",-1),p={class:"mb-3"},j={class:"mb-3"},O={class:"mb-3"},f=Object(n["createElementVNode"])("div",{class:"font-bold text-center mb-3 text-primaryColor"},"-- 矿池配置 --",-1),v=Object(n["createElementVNode"])("div",null,"设置产量",-1),w={class:"border-1 border-primaryColor py-5px"};var V={__name:"MiningConfig",setup(e){const t=Object(n["inject"])("chainInfo"),a=Object(n["ref"])(null),V=Object(n["reactive"])({currentValue:"",inputValue:"",mintHashRate:""}),y=async()=>{const e=await a.value.pool(t);V.currentValue=r["a"].from(o["utils"].formatUnits(e.ism,18)).mulUnsafe(r["a"].from(String(86400))).round(0).toString(),V.mintHashRate=o["utils"].formatUnits(e.mintHashRate,18)},g=async()=>{if(Object(i["a"])(V.inputValue))try{let e=r["a"].from(V.inputValue).divUnsafe(r["a"].from(86400)).toString();e=o["utils"].parseUnits(e,18);const t=await a.value.setPoolYield(Object(s["a"])(e,0));Object(c["a"])("处理中..."),await t.wait(),Object(c["a"])("已设置"),await y()}catch(e){console.log(e),Object(c["a"])(e.data||e.message||e)}},x=Object(n["ref"])(""),E=async()=>{const e=await Object(b["a"])(t,m["b"].USDT,m["b"].MintPerformance,m["b"].MarsPoolAddress);console.log(e),x.value=r["a"].from(e.balance).divUnsafe(r["a"].from("0.1")).toString()},h=async()=>{a.value=new l["a"](t.provider,t.account),await y(),await E()};return Object(n["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&h()},{immediate:!0}),(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,[Object(n["createElementVNode"])("div",{class:"text-primaryColor",onClick:t[0]||(t[0]=t=>e.$router.back())},"<<返回"),d,Object(n["createElementVNode"])("div",p,"当前产量: "+Object(n["toDisplayString"])(Object(n["unref"])(s["a"])(V.currentValue)),1),Object(n["createElementVNode"])("div",j,"已增发算力: "+Object(n["toDisplayString"])(Object(n["unref"])(s["a"])(V.mintHashRate)),1),Object(n["createElementVNode"])("div",O,"当前总业绩: "+Object(n["toDisplayString"])(Object(n["unref"])(s["a"])(x.value)),1),f,v,Object(n["createElementVNode"])("div",w,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>V.inputValue=e)},null,512),[[n["vModelText"],V.inputValue]])]),Object(n["createElementVNode"])("div",{class:"text-center mt-2"},[Object(n["createElementVNode"])("button",{class:"primary-btn h-2.5rem w-10rem text-black font-bold",onClick:g},"确认设置")])]))}};const y=V;t["default"]=y}}]);