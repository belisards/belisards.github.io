const t=document.getElementById("typewriter-target"),i=document.getElementById("cursor"),r=`Adriano
Belisario`;let e=0;function n(){t&&(e<r.length?(r[e]===`
`?t.innerHTML+="<br>":t.innerHTML+=r[e],e++,setTimeout(n,80+Math.random()*60)):(setTimeout(()=>{document.querySelectorAll(".redacted").forEach(o=>{o.classList.add("revealed")})},400),setTimeout(()=>{i?.remove()},2e3)))}setTimeout(n,500);
