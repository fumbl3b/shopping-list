/* eslint-disable no-console */
'use strict';

function buttonHandler(){
  $('.button-label').click(function (event) {
    //event.stopPropagation();
    if ($(this).text() === 'delete') {
      $(this).closest('li').remove();
    } else if ($(this).text() === 'check') {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }
  });
}

buttonHandler();

$('#js-shopping-list-form').submit(function (event) {
  event.preventDefault();

  let item = $('#shopping-list-entry').val();
  $('#shopping-list-entry').val('');

  $('.shopping-list').append(`<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  buttonHandler();
});