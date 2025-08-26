const products = document.querySelectorAll('.product')

function fadeIn(array, index=0) {
    if (index >= array.length) {return;}

    array[index].style.opacity = "1";
    array[index].style.transform = "translateY(0)";

    setTimeout(() => {
        fadeIn(array, index+1);
    }, 100);
}

fadeIn(products);