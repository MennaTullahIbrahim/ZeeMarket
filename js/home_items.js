fetch('js/items.json')
              .then(Response => Response.json())
              .then(data => {
                const swiper_items_sale = document.getElementById("swiper_items_sale")

                all_products_json = data;

                data.forEach(product => {
                  if(product.old_price){
                     const percent_disc= Math.floor((product.old_price - product.price) / product.old_price * 100)
                     swiper_items_sale.innerHTML +=`
                     <div class="product swiper-slide">
                    <div class="icons">
                         <span><i onclick="add_to_cart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                         <span><i class="fa-solid fa-heart"></i></span>
                         <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <span class="sale-percentage">%${percent_disc}</span>

                    <div class="product_img">
                          <img src="${product.img}" alt="">
                          <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="product_name"><a href="/Project_X/item.html">${product.name}</a></h3>
                    <div class="stars">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        
                    </div>
                    <div class="price">
                          <p><span>$${product.price}</span></p>
                          <p class="old-price">$${product.price}</p>
                    </div>
                    </div>`
                  }
                  
                });
     });