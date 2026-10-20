function verify() {
    console.log("Число:")
    let number = parseFloat(elementNumber.value);
    let result;
    console.log(number)

        if (elementNumber.value.trim() === "" || !Number.isFinite(number)) {
        result = "Введите корректное число";
        } 
        else if (number > 0) {
        result = "Число положительное";
        } 
        else if (number < 0) {
        result = "Число отрицательное";
        } 
        else {
        result = "Число равно нулю";
        }

    console.log("Результат:", result);

    elementResult.value = result;

}

const elementNumber = document.getElementById("number");
const elementResult = document.getElementById("result");
const elementVerify = document.getElementById("verify");
const elementForm = document.getElementById("UserEnter");

elementVerify.addEventListener("click", verify);

elementForm.addEventListener("submit", function(event) {
console.log("Отправка данных на сервер");

verify();

if (
    elementNumber.value.trim() === "" ||
    !Number.isFinite(parseFloat(elementNumber.value))
) {
    event.preventDefault();
    alert("Введите корректное число перед отправкой.");
    console.log("Отправка отменена: введено некорректное число");
} else {
    console.log("Число:", elementNumber.value);
    console.log("Результат:", elementResult.value);
    console.log("Форма отправляется");
}

});