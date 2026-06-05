function calculate(price, qty, itemid)
{
    if(isNaN(qty) || qty < 0)
    {
        alert("Quantity must be a positive number");
        document.getElementById(itemid).value = "";
        return;
    }

    var money = price * qty;

    document.getElementById(itemid).value =
        money.toFixed(2);
}

function sum()
{
    var item1 =
        Number(document.getElementById("item1").value);

    var item2 =
        Number(document.getElementById("item2").value);

    var item3 =
        Number(document.getElementById("item3").value);

    var total = item1 + item2 + item3;

    document.getElementById("total").value =
        total.toFixed(2);
}
