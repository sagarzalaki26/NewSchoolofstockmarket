
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#f3f4f6',
                success: '#10b981',
                danger: '#ef4444',
                warning: '#f59e0b',
                info: '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
}



// Initialize TradingView widget
new TradingView.widget({
  container_id: "tradingviewChart",
  width: "100%",
  height: "100%",
  symbol: "NSE:INDUSINDBK",
  interval: "D",
  timezone: "Asia/Kolkata",
  theme: "light",
  style: "1",
  toolbar_bg: "#f1f3f6",
  hide_side_toolbar: false,
  allow_symbol_change: true,
  withdateranges: true,
  locale: "en",
  autosize: true
});

// Simulating live price updates (in a real case, fetch data from API)
function updateLivePrice() {
  let price = (Math.random() * (1600 - 1400) + 1400).toFixed(2); // Random price between 1400 - 1600
  document.getElementById("livePrice").textContent = `₹${price}`;
}

setInterval(updateLivePrice, 2000); // Update price every 2 seconds

function buyStock() {
  let price = document.getElementById("livePrice").textContent;
  alert(`Buying at ${price}`);
}

function sellStock() {
  let price = document.getElementById("livePrice").textContent;
  alert(`Selling at ${price}`);
}


let qty = 0.01;
const step = 0.01;
const minQty = 0.01;

function updateQtyDisplay() {
  document.getElementById('qtyDisplay').innerText = qty.toFixed(2);
}

function increaseQty() {
  qty += step;
  updateQtyDisplay();
}

function decreaseQty() {
  if (qty > minQty) {
    qty -= step;
    updateQtyDisplay();
  }
}

updateQtyDisplay(); // Initial update
