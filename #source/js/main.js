import noUiSlider from 'nouislider';
import SlimSelect from 'slim-select';
import wNumb from 'wnumb';
import Datepicker from 'vanillajs-datepicker/Datepicker';

//Slimselect

let slimSelect = document.querySelectorAll('.slim-select');

slimSelect.forEach((el) => {
  new SlimSelect({
    select: el,
    showSearch: false,
  })
});

//NoUISlider

document.addEventListener("DOMContentLoaded", () => {
  let jsRange = document.querySelectorAll('.js-range');

  if (jsRange.length > 0) {
    jsRange.forEach((e) => {
      noUiSlider.create(e, {
        start: [e.getAttribute('data-noui-min') || 0, e.getAttribute('data-noui-max') || 0],
        step: Number(e.getAttribute('data-noui-step') || 10),
        margin: 0,
        connect: true,
        direction: "ltr",
        orientation: "horizontal",
        behaviour: "tap-drag",
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
        range: {
          min: Number(e.getAttribute('data-noui-min') || 0),
          max: Number(e.getAttribute('data-noui-max') || 0)
        },
        format: wNumb({
          decimals: 0
        })
      });
      e.noUiSlider.on("update", function (values) {
        if (e.closest(".range")) {
          e.closest(".range").querySelector('.slider-value-min').value = values[0];
          e.closest(".range").querySelector('.slider-value-max').value = values[1];

          e.closest(".range").querySelector('.slider-value-min').addEventListener('change', function () {
            e.noUiSlider.set([this.value, null]);
          });
          e.closest(".range").querySelector('.slider-value-max').addEventListener('change', function () {
            e.noUiSlider.set([null, this.value]);
          });
        }
      });
    })
  }
});


//Catalog view switcher

let catalogViewSwitchList = document.querySelectorAll('.catalog-view__switch a');
let productList = document.querySelectorAll('.product_list');

catalogViewSwitchList.forEach((el) => {

  el.addEventListener('click', function (e) {
    e.preventDefault();
    catalogViewSwitchList.forEach((el) => {
      el.classList.remove('active');
    })
    if (!el.classList.contains('active')) {
      el.classList.add('active');
    }
    productList.forEach((item) => {
      if (item.classList.contains(el.getAttribute('data-view'))) {
        productList.forEach((i) => {
          i.classList.remove('active');
        })
        item.classList.add('active');
      }
    })
  })
});

//Matrix

let matrixBodyItem = document.querySelectorAll('.matrix-body');

let itemHeight = []

matrixBodyItem.forEach((el) => {

  let elChildren = [...el.children];

  elChildren.forEach((element, index) => {

    if (!itemHeight[index] || itemHeight[index] < element.offsetHeight) {
      itemHeight[index] = element.offsetHeight
    }

  })

})

matrixBodyItem.forEach((el) => {

  let elChildren = [...el.children];

  elChildren.forEach((element, index) => {

    element.style.cssText = `height:${itemHeight[index]}px`;
  })
})

//Datepicker

document.addEventListener("DOMContentLoaded", () => {
  const elem = document.querySelector('.datepicker');
  if (elem) {
    const datepicker = new Datepicker(elem, {
      // ...options
    });
  }
});

const loadFile = function (e) {
  const output = document.querySelector('.file-output');
  let image = document.createElement('img');
  output.appendChild(image);

  image.src = URL.createObjectURL(e.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src) // free memory
  }
};

document.querySelector('.group.file input').addEventListener('change', loadFile);
