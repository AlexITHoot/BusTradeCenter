import noUiSlider from 'nouislider';
import SlimSelect from 'slim-select'
import wNumb from 'wnumb';

new SlimSelect({
  select: '#slim-select',
  showSearch: false,
})

var slider = document.querySelector('.range-slider');

// noUiSlider.create(slider,{
//         start: [200, 80000],
//         connect: true,
//         behaviour: 'tap',
//         tooltips: [true, true],
//         range: {
//             'min': 0,
//             'max': 100000
//         }   
// })
  // slider.forEach((item)=>{
   
  // });
  // let Option = function(){
  //   this.start = start,
  //   this.range = range,
  // }
  // class MyOption {
  //   constructor(start,range){
  //     this.start = start,
  //     this.range = range
  //   }
  // }

  // let y = new MyOption([0,100],{'min': 0,'max': 100000});
  // let y2 

    let c = {
        start: [100, 800],
        connect: true,
        behaviour: 'tap',
        tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
        range: {
            'min': 0,
            'max': 1000
        }
    }
    // noUiSlider.create(slider, c);   
    let x = noUiSlider.create(slider,c);
    console.log(x);
// item[0]={
//   start: [200, 800],
// }