const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
          "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
      },
      {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
      },
      {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
          "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
      },
      {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
          "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
      },
      {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
          "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
      },
      {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
          "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
      },
      {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
          "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
      },
      {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
          "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
      },
      {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
          "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
      },
      {
        id: 10,
        title: "Karını Yarık",
        category: "Turk",
        price: 15.99,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBd8X9AlSyVTjdKf1d65HuKXvTq4-7PEKOw&usqp=CAU",
        desc: `Karnıyarık Türk mutfağının belli başlı patlıcan yemeklerinden biridir. Hazırlanırken ana malzeme olan patlıcanın dışında soğan, biber, domates ve kıyma da kullanılır. Benzeri bir patlıcan yemeği imambayıldıdır. İmambayıldının karnıyarıktan farkı içinde et olmaması ve soğuk olarak servis edilmesidir.`,
      },
      {
        id: 11,
        title: "pide",
        category: "Turk",
        price: 29.99,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtFAAh0EyHN9OY01oZyVYH813luxaGVwNWw&usqp=CAU",
        desc: `Pide, Türk ve Orta Doğu mutfaklarında yaygın olan, Balkan mutfaklarında da görülebilen yassı bir ekmek çeşididir.`,
      }
]

let menuDOM = document.querySelector(".menu")

let buttonDOM = document.querySelector(".button-container")



// buton css ve html oluşturuldu
const createButton = (item) => {
   
    let btn = document.createElement("button")
    btn.classList.add("btn", "btn-outline-dark", "me-2")
    btn.setAttribute("data-id",`${item}`)
    btn.innerHTML = `${item}`
    buttonDOM.appendChild(btn)



}

// menu div yapısı oluşturuldu ( css ve html)
const menuIList = (item) => {
    let showMenu = item.map(item => {
        return `<div class="menu-items col-sm-12 col-lg-6 mt-5">
                    <div class="row">
                        <div class="col-sm-4 ">
                            <img src="${item.img}" alt="${item.desc}" class="w-100 rounded">
                        </div>
                        <div class="col-sm-8 menu-info">
                            <div class="menu-title d-flex">
                                <h4 class="d-inline">${item.title}</h4>
                                <h4 class="d-inline ms-auto">${item.price}</h4>
                            </div>
                            <div class="menu-text pt-3">
                                ${item.desc}
                            </div>
                        </div> 
                    </div> 
                </div>          
        `               
       
    })
    showMenu = showMenu.join("");
    menuDOM.innerHTML = showMenu;
    }


    
// tekrarlanan kategorileri ignoreladık
const categories =  menu.reduce((category,item)=>{
                        if(!category.includes(item.category)){
                         category.push(item.category)
                        }
                        return category
                    },["All"])
    
// kategorilere göre filtreleme yapıldı ve buttonlar getirildi                 
const categoryList = () => {
    // buttonlar getirildi
    const button = categories.map(category => {
        return createButton(category)
    })

    // butonların click eventinde filtreleme yapıldı
    let btnItem = document.querySelectorAll(".btn")
    btnItem.forEach((btn) => {
        btn.addEventListener("click", (evnt) =>{
            const ctgry = evnt.target.getAttribute("data-id")
            const getctgry = menu.filter(item => {
                if(item.category === ctgry){
                    return item
                }
            })
            if(ctgry === "All"){
                menuIList(menu)
            }else {
                menuIList(getctgry)
            }
            
        })
    })

}




// fonksiyonlar çağırıldı

categoryList()

menuIList(menu)
