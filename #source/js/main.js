import noUiSlider from 'nouislider';
import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#slim-select',
  showSearch: false,
})

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});