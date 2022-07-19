import noUiSlider from 'nouislider';
import SlimSelect from 'slim-select';
import wNumb from 'wnumb';

let slimSelect = document.querySelectorAll('.slim-select');

slimSelect.forEach((el) => {
  new SlimSelect({
    select: el,
    showSearch: false,
  })
});

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
        e.closest(".range").querySelector('.slider-value-min').value = values[0];
        e.closest(".range").querySelector('.slider-value-max').value = values[1];
      });
      e.closest(".range").querySelector('.slider-value-min').addEventListener('change', function () {
        e.noUiSlider.set([this.value, null]);
      });
      e.closest(".range").querySelector('.slider-value-max').addEventListener('change', function () {
        e.noUiSlider.set([null, this.value]);
      });
    })
  }
});

