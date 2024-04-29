// Define una función para calcular el precio
function calculatePrice(selectedItems) {
    let price = 500; // Precio base mínimo
    const itemPrices = {
        login: 100,
        catalog: 150,
        customSearch: 200,
        advancedSearch: 200,
        creditCardPayment: 150,
        formPayment: 200,
    };

    // Itera sobre los elementos seleccionados y calcula el precio total
    for (const item in selectedItems) {
        if (selectedItems[item]) {
            price += itemPrices[item];
        }
    }

    // Asegúrate de que el precio máximo sea 1000
    if (price > 1000) {
        price = 1000;
    }

    return price;
}

// Maneja el cambio en la selección de elementos
function handleItemSelection(item, selectedItems, setSelectedItems) {
    setSelectedItems({
        ...selectedItems,
        [item]: !selectedItems[item],
    });
}

// Maneja el cálculo del precio
function handleCalculatePrice(selectedItems) {
    const totalPrice = calculatePrice(selectedItems);
    alert(`El precio total es: $${totalPrice}`);
}

// Aquí puedes integrar estas funciones en tu componente page.jsx
// Asegúrate de ajustarlas según la estructura de tu componente y cómo manejas el estado.
