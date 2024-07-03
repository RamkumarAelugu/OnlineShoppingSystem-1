let prod_details=function(a){
    let id_s1=document.querySelector(`${a} .categ`).innerText;
    let img_src3=document.querySelector(`${a} .img a img`).src;
    let brandf1=document.querySelector(`${a} .content h3`).innerText;
    let paraf1=document.querySelector(`${a} .content p`).innerText;
    let pricef1=document.querySelector(`${a} .content h4`).innerText;
    localStorage.setItem("id_s2",JSON.stringify(id_s1));
    localStorage.setItem("img_src2",JSON.stringify(img_src3));
    localStorage.setItem("brandf2",JSON.stringify(brandf1));
    localStorage.setItem("paraf2",JSON.stringify(paraf1));
    localStorage.setItem("pricef2",JSON.stringify(pricef1));
};

