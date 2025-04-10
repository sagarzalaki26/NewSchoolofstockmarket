
scrip
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const qtyDisplay = document.getElementById('qtyDisplay');

    let quantity = parseFloat(qtyDisplay.textContent);

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 0.01) {
            quantity = Math.max(0.01, quantity - 0.01);
            qtyDisplay.textContent = quantity.toFixed(2);
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantity += 0.01;
        qtyDisplay.textContent = quantity.toFixed(2);
    });

