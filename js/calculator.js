const RATE_NOTICE = "환율을 선택하세요";

function calculateUS() {
    const sellingPrice = getSellingPrice();
    const localPrice = parseFloat(document.getElementById("usPrice").value);
    const exchangeRate = parseFloat(document.getElementById("usRate").value);
    const weight = getWeight();
    const quantity = parseInt(document.getElementById("usQty").value) || 1;

    if (!sellingPrice || isNaN(localPrice) || isNaN(weight)) {
        clearResult("usResult", "usRate2", "");
        return;
    }
    if (isNaN(exchangeRate)) {
        clearResult("usResult", "usRate2", RATE_NOTICE);
        return;
    }

    const shippingFee = getShippingFee(usShippingFees, weight);
    if (shippingFee === null) {
        clearResult("usResult", "usRate2", "무게 초과 (미국 최대 20.0kg)");
        return;
    }

    const totalLocalPrice = localPrice * quantity;
    const cost = totalLocalPrice * exchangeRate * 1.024 + shippingFee;
    const profit = Math.floor(sellingPrice * 0.95 - cost);
    showResult("usResult", "usRate2", profit, sellingPrice);
}

function calculateDE() {
    const sellingPrice = getSellingPrice();
    const localPrice = parseFloat(document.getElementById("dePrice").value);
    const exchangeRate = parseFloat(document.getElementById("deRate").value);
    const weight = getWeight();
    const quantity = parseInt(document.getElementById("deQty").value) || 1;

    if (!sellingPrice || isNaN(localPrice) || isNaN(weight)) {
        clearResult("deResult", "deRate2", "");
        return;
    }
    if (isNaN(exchangeRate)) {
        clearResult("deResult", "deRate2", RATE_NOTICE);
        return;
    }

    const shippingCost = getShippingFee(deShippingFees, weight);
    if (shippingCost === null) {
        clearResult("deResult", "deRate2", "무게 초과 (독일 최대 30.0kg)");
        return;
    }

    const totalLocalPrice = localPrice * quantity;
    const agencyFee = getAgencyFee(totalLocalPrice);
    const localCost = (totalLocalPrice / 1.19) * exchangeRate * 1.085;
    const profit = Math.floor(sellingPrice * 0.95 - localCost - shippingCost - agencyFee);
    showResult("deResult", "deRate2", profit, sellingPrice);
}

function calculateUK() {
    const sellingPrice = getSellingPrice();
    const localPrice = parseFloat(document.getElementById("ukPrice").value);
    const exchangeRate = parseFloat(document.getElementById("ukRate").value);
    const weight = getWeight();
    const quantity = parseInt(document.getElementById("ukQty").value) || 1;

    if (!sellingPrice || isNaN(localPrice) || isNaN(weight)) {
        clearResult("ukResult", "ukRate2", "");
        return;
    }
    if (isNaN(exchangeRate)) {
        clearResult("ukResult", "ukRate2", RATE_NOTICE);
        return;
    }

    const shippingCost = getShippingFee(ukShippingFees, weight);
    if (shippingCost === null) {
        clearResult("ukResult", "ukRate2", "무게 초과 (영국 최대 30.0kg)");
        return;
    }

    const totalLocalPrice = localPrice * quantity;
    const agencyFee = getAgencyFee(totalLocalPrice);
    const localCost = (totalLocalPrice / 1.20) * exchangeRate * 1.085;
    const profit = Math.floor(sellingPrice * 0.95 - localCost - shippingCost - agencyFee);
    showResult("ukResult", "ukRate2", profit, sellingPrice);
}

function calculateJP() {
    const sellingPrice = getSellingPrice();
    const localPrice = parseFloat(document.getElementById("jpPrice").value);
    const exchangeRate = parseFloat(document.getElementById("jpRate").value);
    const quantity = parseInt(document.getElementById("jpQty").value) || 1;

    if (!sellingPrice || isNaN(localPrice)) {
        clearResult("jpResult", "jpRate2", "");
        return;
    }
    if (isNaN(exchangeRate)) {
        clearResult("jpResult", "jpRate2", RATE_NOTICE);
        return;
    }

    const totalLocalPrice = localPrice * quantity;
    const shippingFee = 10000;
    const profit = Math.round(sellingPrice * 0.96 - (totalLocalPrice * exchangeRate * 1.022) - shippingFee);
    showResult("jpResult", "jpRate2", profit, sellingPrice);
}

function calculateAll() {
    calculateUS();
    calculateDE();
    calculateUK();
    calculateJP();
}
