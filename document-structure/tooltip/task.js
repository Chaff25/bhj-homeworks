const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const activeTooltip = document.querySelector('.tooltip_active');

    if (activeTooltip) {
      activeTooltip.remove();
    }

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.classList.add('tooltip_active');
    tooltip.textContent = item.getAttribute('title');

    document.body.appendChild(tooltip);

    const coords = item.getBoundingClientRect();

    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 'px';
  });
});