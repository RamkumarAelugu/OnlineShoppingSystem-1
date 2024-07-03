let result=document.getElementById("form_submit");
result.addEventListener("submit", function(){
    location.href="shoping.html";
    let brand = document.getElementById("brand").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let image=document.getElementById("add_product_image").files[0];
    let img6=image.name;
    let category=document.getElementById("select_cat").value;
    let category_list=localStorage.getItem("category")?JSON.parse(localStorage.getItem("category")):[];
    category_list.push(category);
    localStorage.setItem("category",JSON.stringify(category_list));
    let product_id=document.getElementById("product_id").value;
    let id_list=localStorage.getItem("product_id")?JSON.parse(localStorage.getItem("product_id")):[];
    id_list.push(product_id);
    localStorage.setItem("product_id",JSON.stringify(id_list));
    let brand_list=localStorage.getItem("brand")?JSON.parse(localStorage.getItem("brand")):[];
    brand_list.push(brand);
    localStorage.setItem("brand",JSON.stringify(brand_list));
    let description_list=localStorage.getItem("description")?JSON.parse(localStorage.getItem("description")):[];
    description_list.push(description);
    localStorage.setItem("description",JSON.stringify(description_list));
    let price_list=localStorage.getItem("price")?JSON.parse(localStorage.getItem("price")):[];
    price_list.push(price);
    localStorage.setItem("price",JSON.stringify(price_list));
    let image_list=localStorage.getItem("image")?JSON.parse(localStorage.getItem("image")):[];
    image_list.push(img6);
    localStorage.setItem("image",JSON.stringify(image_list));
    alert("product added successfully");
    display()
});

