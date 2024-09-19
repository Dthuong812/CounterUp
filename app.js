// // for(let index = 0 ;index<Array.length; index ++){
// //     const element = arr[index];
// // } haàm đòng bộ nên phải chờ chạy xong nó mới chạy hàm paint()
// //
// setInterval(()=>{

// },1000)
// //sau 1000 nó sẽ cập nhật lại 1 lần nhưng nó cho hàm paint() chạy trc
// paint() 
var listCount = document.querySelectorAll('.counter');

function count(element){
    var numEl = element.querySelector('.number');
    var to = parseInt(numEl.innerText);
    var count = 0;
    var time = 1000;
    var step = to / time; 
    let counting = setInterval(() => {
        count += step;
        if (count > to) {
            clearInterval(counting);
            numEl.innerText = to; 
        } else {
            numEl.innerText = Math.round(count); 
        }
    }, 1); 
}

listCount.forEach(count);





// var count = 0
// setInterval(()=>{
//     count++
//     var tk = document.querySelector('.tiktok h2')
//     var ins = document.querySelector('.instagram h2')
//     var ytb = document.querySelector('.youtube h2')
//     tk.innerText =count
//     ins.innerText =count
//     ytb.innerText =count
// },1)