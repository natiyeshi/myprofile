
const file = {
    1 : ["asset/img/bakaal/Screenshot (135).png",
     "asset/img/bakaal/Screenshot (137).png","asset/img/bakaal/Screenshot (138).png",
     "asset/img/bakaal/Screenshot (139).png","asset/img/bakaal/Screenshot (1340).png"],
    2 : ["asset/img/car/Screenshot (114).png",
      "asset/img/car/Screenshot (116).png","asset/img/car/Screenshot (120).png",
      "asset/img/car/Screenshot (124).png","asset/img/car/Screenshot (131).png"],
    3 : ["asset/img/Doctor/Screenshot (108).png",
       "asset/img/Doctor/Screenshot (109).png","asset/img/Doctor/Screenshot (111).png",
       "asset/img/Doctor/Screenshot (110).png","asset/img/Doctor/Screenshot (112).png"],
    4 : ["asset/img/satm/Screenshot (101).png",
        "asset/img/satm/Screenshot (100).png","asset/img/satm/Screenshot (102).png",
        "asset/img/satm/Screenshot (104).png","asset/img/satm/Screenshot (107).png"],
}

for(let i = 1; i < 5; i++){
    document.querySelector(`.front${i}`).addEventListener("click",()=>{
        front(i)
    })
    document.querySelector(`.back${i}`).addEventListener("click",()=>{
        back(i)
    })
}
counter = [0,0,0,0,0]
function front(i){
    if(counter[i] + 1 > 3) counter[i] = -1
    $(".img"+i).fadeTo(200,0.15,()=>{
        setTimeout(()=>{
            document.querySelector(`.img${i}`).src = file[i][++counter[i]]
            $(".img"+i).fadeTo("fast",1)
        },100)
    })
  
}   

function back(i){
    if(counter[i] - 1 < 0) counter[i] = 4
    $(".img"+i).fadeTo(200,0.15,()=>{
        setTimeout(()=>{
            document.querySelector(`.img${i}`).src = file[i][--counter[i]]
            $(".img"+i).fadeTo("fast",1)
        },100)
    })
  
}   

for(let i = 1; i < 5; i++){
    $(`.show${i}`).click(()=>{
        $(`.detail${i}`).slideToggle(360)
    })
}