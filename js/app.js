function populateSelect(el, start, end, step) {
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- 선택 --";
    placeholder.selected = true;
    el.appendChild(placeholder);
    for (let i = start; i <= end; i += step) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        el.appendChild(opt);
    }
}

function initDropdowns() {
    const weightEl = document.getElementById("weight");
    validWeights.forEach(w => {
        const opt = document.createElement("option");
        opt.value = w;
        opt.textContent = w.toFixed(1);
        if (w === 1.0) opt.selected = true;
        weightEl.appendChild(opt);
    });

    populateSelect(document.getElementById("usRate"), 1200, 1700, 10);
    populateSelect(document.getElementById("deRate"), 1450, 1900, 10);
    populateSelect(document.getElementById("ukRate"), 1650, 2200, 10);

    const jpRateEl = document.getElementById("jpRate");
    const jpPlaceholder = document.createElement("option");
    jpPlaceholder.value = "";
    jpPlaceholder.textContent = "-- 선택 --";
    jpPlaceholder.selected = true;
    jpRateEl.appendChild(jpPlaceholder);
    for (let i = 85; i <= 120; i++) {
        const opt = document.createElement("option");
        opt.value = (i / 10).toFixed(2);
        opt.textContent = (i / 10).toFixed(2);
        jpRateEl.appendChild(opt);
    }
}

function resetFields() {
    document.getElementById("sellingPrice").value = "";
    document.getElementById("usPrice").value = "";
    document.getElementById("dePrice").value = "";
    document.getElementById("ukPrice").value = "";
    document.getElementById("jpPrice").value = "";
    document.getElementById("usResult").textContent = "";
    document.getElementById("deResult").textContent = "";
    document.getElementById("ukResult").textContent = "";
    document.getElementById("jpResult").textContent = "";
    document.getElementById("usRate2").textContent = "";
    document.getElementById("deRate2").textContent = "";
    document.getElementById("ukRate2").textContent = "";
    document.getElementById("jpRate2").textContent = "";
    document.getElementById("weight").value = "1";
    document.getElementById("usQty").value = "1";
    document.getElementById("deQty").value = "1";
    document.getElementById("ukQty").value = "1";
    document.getElementById("jpQty").value = "1";
    document.getElementById("sellingPrice").focus();
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") resetFields();
});

window.onload = function() {
    initDropdowns();
};
