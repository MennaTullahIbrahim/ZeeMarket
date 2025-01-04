fetch('js/items.json')
              .then(Response => Response.json())
              .then(data => {
                const products_dev = document.getElementById("products_dev")
                all_products_json = data;

                data.forEach(product => {

                    const old_price_exists = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                       
                    const percent_disc_div = product.old_price ? `<span class="sale-percentage">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
                    products_dev.innerHTML +=`
                      <div class="product products_dev">
                      <div class="icons">
                           <span><i onclick="add_to_cart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                           <span><i class="fa-solid fa-heart"></i></span>
                           <span><i class="fa-solid fa-share"></i></span>
                      </div>
                      ${percent_disc_div}
  
                      <div class="product_img">
                            <img src="${product.img}" alt="">
                            <img class="img-hover" src="${product.img_hover}" alt="">
                      </div>
                      <h3 class="product_name"><a href="/ZeeMarket/item.html">${product.name}</a></h3>
                      <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          
                      </div>
                      <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_exists}
                      </div>
                      </div>`
              });
            });