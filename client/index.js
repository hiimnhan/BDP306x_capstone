import { getExchangeRate, exchangeTokens } from "./services/networkService";
import EnvConfig from "./configs/env";
$(function () {
  initiateProject();

  function initiateProject() {
    const defaultSrcSymbol = EnvConfig.TOKENS[0].symbol;
    const defaultDestSymbol = EnvConfig.TOKENS[1].symbol;
    
    initiateDropdown();
    initiateSelectedToken(defaultSrcSymbol, defaultDestSymbol);
    initiateDefaultRate(defaultSrcSymbol, defaultDestSymbol);

    $('#swap-button').prop('disabled', true);
  }
  
  function initiateDropdown() {
    let dropdownSrcTokens = '';
    let dropdownDestTokens = ''
    
    EnvConfig.TOKENS.forEach((token) => {
      dropdownSrcTokens += `<div class="dropdown__item--src">${token.symbol}</div>`;
    });

    EnvConfig.TOKENS.forEach((token) => {
      dropdownDestTokens += `<div class="dropdown__item--dest">${token.symbol}</div>`;
    });
    
    $('.dropdown__content--src').html(dropdownSrcTokens);
    $('.dropdown__content--dest').html(dropdownDestTokens);
  }
  
  function initiateSelectedToken(srcSymbol, destSymbol) {
    $('#selected-src-symbol').html(srcSymbol);
    $('#selected-dest-symbol').html(destSymbol);
    $('#rate-src-symbol').html(srcSymbol);
    $('#rate-dest-symbol').html(destSymbol);
    $('#selected-transfer-token').html(srcSymbol);
  }
  
  function initiateDefaultRate(srcSymbol, destSymbol) {
    const srcToken = findTokenBySymbol(srcSymbol);
    const destToken = findTokenBySymbol(destSymbol);

    $('#rate-src-symbol').html(srcSymbol);
    $('#rate-dest-symbol').html(destSymbol);
    
    getExchangeRate(srcToken.address, destToken.address).then((result) => {
      let rate;
      if (result[1] === 1) rate = (result[0] / result[1])
      else rate = ((result[0] / result[1]).toFixed(4));
      $('#exchange-rate').html(rate);
      $('modal-dest-rate').html(rate);
    }).catch((error) => {
      console.log(error);
      $('#exchange-rate').html(0);
      $('.modal-dest-rate').html(0);
    });
  }

  function findTokenBySymbol(symbol) {
    return EnvConfig.TOKENS.find(token => token.symbol === symbol);
  }
  
  
  // On changing token from dropdown.
  $(document).on('click', '.dropdown__item--src', function () {
    const selectedSymbol = $(this).html();
    $(this).parent().siblings('.dropdown__trigger').find('#selected-src-symbol').html(selectedSymbol);
    $('.modal-src-token').html(selectedSymbol); 
    const destSymbol = $('#selected-dest-symbol').html();
    $('.modal-dest-token').html(destSymbol)
    initiateDefaultRate(selectedSymbol, destSymbol);
    updateDestAmount();
  });

  $(document).on('click', '.dropdown__item--dest', function () {
    const selectedSymbol = $(this).html();
    $('.modal-dest-token').html(selectedSymbol)
    $(this).parent().siblings('.dropdown__trigger').find('#selected-dest-symbol').html(selectedSymbol);
    const srcSymbol = $('#selected-src-symbol').html();
    $('.modal-src-token').html(srcSymbol);

    initiateDefaultRate(srcSymbol, selectedSymbol);
    updateDestAmount();
  });
  

  // Import Metamask
  $('#import-metamask').on('click', async function () {
    /* TODO: Importing wallet by Metamask goes here. */
    const {ethereum} = window;
    try {
      await ethereum.request({method: 'eth_requestAccounts'});
      const accounts = await ethereum.request({method: 'eth_accounts'});
      console.log('accounts: ', accounts[0]);
    } catch (error) {
      console.log('connect metaMask error: ', error);
    }
  });

  // Handle on Source Amount Changed
  $('#swap-source-amount').on('input change', function () {
    /* TODO: Fetching latest rate with new amount */
    updateDestAmount();
    $('#swap-button').prop('disabled', !$(this).val().length);
  });

  function updateDestAmount() {
    const amount = $('#swap-source-amount').val();
    const rate = $('#exchange-rate').text();
    const destAmount = amount * rate;

    $('.input-placeholder').html(destAmount);
    $('#modal-src-amount').html(amount);
    $('#modal-dest-amount').html(destAmount);

  }

  function exchangeToken(srcSymbol, destSymbol, amount) {
    const srcToken = findTokenBySymbol(srcSymbol);
    const destToken = findTokenBySymbol(destSymbol);
    console.log('token', [srcToken, destToken]);

    exchangeTokens(srcToken.address, destToken.address, amount)
      .then(res=> console.log('exchange', res))
      .catch(error => console.log('error ex', error));
  }

  $('.button-confirm').on('click', () => {
    const srcSymbol = $('.modal-src-token').text();
    const destSymbol = $('.modal-dest-token').text();
    console.log('sym', [srcSymbol, destSymbol]);
    const amount = $('#modal-src-amount').text();
    console.log('a', amount);

    exchangeToken(srcSymbol, destSymbol, amount);
  })


  // Handle on click token in Token Dropdown List
  $('.dropdown__item--src').on('click', function () {
    $(this).parents('.dropdown').removeClass('dropdown--active');
    /* TODO: Select Token logic goes here */
  });

  $('.dropdown__item--dest').on('click', function () {
    $(this).parents('.dropdown').removeClass('dropdown--active');
    /* TODO: Select Token logic goes here */
  });

  // Handle on Swap Now button clicked
  $('#swap-button').on('click', function () {
    const modalId = $(this).data('modal-id');
    $(`#${modalId}`).addClass('modal--active');
  });

  // Tab Processing
  $('.tab__item').on('click', function () {
    const contentId = $(this).data('content-id');
    $('.tab__item').removeClass('tab__item--active');
    $(this).addClass('tab__item--active');

    if (contentId === 'swap') {
      $('#swap').addClass('active');
      $('#transfer').removeClass('active');
    } else {
      $('#transfer').addClass('active');
      $('#swap').removeClass('active');
    }
  });

  // Dropdown Processing
  $('.dropdown__trigger').on('click', function () {
    $(this).parent().toggleClass('dropdown--active');
  });

  // Close Modal
  $('.modal').on('click', function (e) {
    if(e.target !== this ) return;
    $(this).removeClass('modal--active');
  });
  $('.button-cancel').on('click', function(e) {
    if (e.target !== this) return;
    $('.modal').removeClass('modal--active');
  })
});
