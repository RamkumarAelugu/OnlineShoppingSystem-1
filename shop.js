let display= function(){
    let category_list=localStorage.getItem("category")?JSON.parse(localStorage.getItem("category")):[];
    let id_list=localStorage.getItem("product_id")?JSON.parse(localStorage.getItem("product_id")):[];
    let brand_list=localStorage.getItem("brand")?JSON.parse(localStorage.getItem("brand")):[];
    let description_list=localStorage.getItem("description")?JSON.parse(localStorage.getItem("description")):[];
    let price_list=localStorage.getItem("price")?JSON.parse(localStorage.getItem("price")):[];
    let image_list=localStorage.getItem("image")?JSON.parse(localStorage.getItem("image")):[];
    let each_list_c=[];
    let each_list_l=[];
    let each_list_m=[];
    let each_list_j=[];
    let each_list_ft=[];
    let each_list_w=[];
    if(category_list.length !== 0){
        for(let i=0;i<category_list.length;i++){
            let img8=image_list[i];
            let brand=brand_list[i];
            let des=description_list[i];
            let price=price_list[i];
            let category=category_list[i];
            let product_id=id_list[i];
            if(category === "footware"){
                each_list_ft.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
            else if(category==="watches") {
                each_list_w.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
            else if(category==="mobiles") {
                each_list_m.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
            else if(category==="jewellery") {
                each_list_j.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
            else if(category==="laptops") {
                each_list_l.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
            else{
                each_list_c.push(`<div class="card" id="${product_id}">
            <div class="line_sort">
                <div class="img">
                    <a href="product.html"><img src="${category}/${img8}" alt="image"></a>
                </div>
                <div class="content">
                    <h3>${brand}</h3>
                    <p>${des}</p>
                    <h4>price : rs ${price}/-</h4>
                    <a href="product.html"><button>BUY</button></a>
                </div>
            </div>
            <div class="details">
                <a href="product.html">see more</a>
            </div>
        </div>`);
            }
        }
        localStorage.setItem("clothes_p",JSON.stringify(each_list_c));
        localStorage.setItem("watches_p",JSON.stringify(each_list_w));
        localStorage.setItem("jewellery_p",JSON.stringify(each_list_j));
        localStorage.setItem("mobiles_p",JSON.stringify(each_list_m));
        localStorage.setItem("laptops_p",JSON.stringify(each_list_l));
        localStorage.setItem("footware_p",JSON.stringify(each_list_ft));
    }
    };
display();


