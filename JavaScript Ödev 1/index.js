
// isim bilgisinin alınmasi
let name = prompt("İsminizi Giriniz : ");
let nameDOM = document.querySelector("div#name>span");
nameDOM.innerHTML = name;
// isim bilgisinin alınmasi bitiş

// saat bilgisi

function clockTime() {
    // tarih oluşturuldu
    const todayTime = new Date();

    // saat dakika saniye ve gün alındı (gün index olarak alındı)
    let hours = todayTime.getHours();
    let minutes = todayTime.getMinutes();
    let seconds = todayTime.getSeconds();
    let day = todayTime.getDay();

    // index olarak alınan günün isimlendirilmesi yapıldı
    switch(day){
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Sali";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4: 
            day = "Perşembe";
            break;
        case 5: 
            day = "Cuma";
            break; 
        case 6: 
            day = "Cumartesi";
            break;  
        case 7: 
            day = "Pazar";
            break;               
    }

    // eğer saat dakika ve saniye 10 dan küçük ise yanına 0 konuldu örnek : ( 01 , 02 gibi)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // clock id si olan div elementimizin içine saat bilgileri eklendi
    document.querySelector("#clock").innerHTML = `${hours}:${minutes}:${seconds}   ${day}`

    // zamanlayıcı fonksiyonu başlatışdı . 
    setTimeout(clockTime , 1000);
}

clockTime();

//saat bilgisi bitiş