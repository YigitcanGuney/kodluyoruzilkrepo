
let option = {
    animation : true ,
    delay : 2000
}

let listDOM = document.querySelector("#todoList");

listDOM.addEventListener("click", function(span){
    if(span.target.tagName === "SPAN"){
        let x = span.target.parentElement
        x.classList.add("d-none")
    }
})

  listDOM.addEventListener("click",function (li) {
      if (li.target.tagName === "LI") {
        li.target.classList.toggle("checked");
      }
    },
   
);


function addItem() {
    let inputDOM = document.querySelector("#task").value;
    let span = document.createElement("span")
    let liDOM = document.createElement('li')
    if(inputDOM == ""){
        let dangerToast = document.querySelector("#danger")
        let opDangerToast = new bootstrap.Toast(dangerToast,option)
        opDangerToast.show()
    }else {
        liDOM.classList.add('d-flex','position-relative')
        liDOM.innerHTML = `${inputDOM}`              
        listDOM.appendChild(liDOM)
        document.querySelector("#task").value = "";
        let successToast = document.querySelector("#success")
        let opSuccessToast = new bootstrap.Toast(successToast,option)
        opSuccessToast.show()
    }

    

   
    span.innerHTML = `\u00D7`
    span.classList.add("close")
    liDOM.appendChild(span)

   
}





