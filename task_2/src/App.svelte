<script lang="ts">

  let baseCurrency = 'USD';
  let targetCurrency = 'EUR';
  let amount = 0;
  let convertedAmount = 0;
  let exchangeRate = 0;

  function updateExchangeRate() {
    fetch(`https://v6.exchangerate-api.com/v6/86e8b164ca4e6fb948bab443/latest/${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        exchangeRate = data.conversion_rates[targetCurrency];
        convertCurrency();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function convertCurrency() {
    convertedAmount = amount * exchangeRate;
  }
  
  function handleBaseCurrencyChange(event) {
    baseCurrency = event.target.value;
    updateExchangeRate();
  }
  
  function handleTargetCurrencyChange(event) {
    targetCurrency = event.target.value;
    updateExchangeRate();
  }
  
  function handleAmountChange(event) {
    amount = parseFloat(event.target.value);
    convertCurrency();
  }
</script>


<main>
  <h1>Конвертер Валют</h1>
  
  <div>
    <label for="base-currency">ИЗ:</label>
    <select id="base-currency" on:change={handleBaseCurrencyChange}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">AED</option>
   
    </select>
  </div>
  
  <div>
    <label for="target-currency">В:</label>
    <select id="target-currency" on:change={handleTargetCurrencyChange}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="GBP">AED</option>

    </select>
  </div>
  
  <div>
    <label for="amount">Сумма:</label>
    <input type="number" id="amount" bind:value={amount} on:input={handleAmountChange} />
  </div>
  
  <div>
    <label for="converted-amount">Конвертированная сумма:</label>
    <input type="text" id="converted-amount" readonly value={convertedAmount.toFixed(2)} />
  </div>
</main>
<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
  }
  
  div {
    margin: 10px 0;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  select,
  input {
    padding: 5px;
  }
</style>

