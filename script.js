function openOffer(val){
    var name;
    var openName;
    let arr = [18,24,36];

    for(let i=1;i<4;i++){
        name = "offer"+i;
        openName = "offer-open"+i;
        var content1 = document.getElementById(name);
        var content2 = document.getElementById(openName)
        
        if (i==val){
            content1.classList.add('hidden');
            content2.classList.remove('hidden');
            const x = document.getElementsByClassName('total-price');
            x[0].innerHTML = "Total: $"+ arr[i-1]+ ".00 USD";

        }else{
            content1.classList.remove('hidden');
            content2.classList.add('hidden');
        }
    }
    
}

