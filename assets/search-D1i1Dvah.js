import"./style-DyaW2XIo.js";const t=o=>{fetch(`/api/server?hero=${encodeURIComponent(o)}`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e)}).catch(e=>{console.error("Error:",e)})};t("batman");const r=()=>{fetch("/api/test").then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{console.log(o)}).catch(o=>{console.error("Error:",o)})};console.log("Hello WOrld");r();const n=async()=>{const e=await(await fetch("/helloworld")).text();console.log(e)};n();
