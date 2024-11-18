// first task В чем разница между null и undefined?
/*
* undefined в JavaScript означает, что переменная была объявлена, но ей не было присвоено никакого значения.
* Null в JavaScript по сути означает «нет значения» или «без значения».
* Это значение, которое разработчики могут присвоить переменной, чтобы явно указать, что она не должна
* иметь никакого значения.
* */

//second task Почему вывод в консоль obj.someprop.x приводит к ошибке?
const obj = {};
console.log(obj.someprop.x);

/*
* Вызов obj.someprop возвращает undefined, потому что someprop не определено в объекте obj.
* Далее, JavaScript пытается получить доступ к свойству x у значения undefined.
* Это невозможно, так как undefined не является объектом,
* и обращение к его свойствам вызывает ошибку.
* */

//third task Как проверить, является ли значение массивом?
/*
* Метод Array.isArray() возвращает true, если объект является массивом и false,
* если он массивом не является.
* */
Array.isArray(obj)

//forth task Проверить, является ли целое число квадратом, не используя математические функции.
function isSq(number) {
    if (number < 0) return false;

    let i = 0;
    while (i * i <= number) {
        if (i * i === number) return true;
        i++;
    }
    return false;
}

// fifth task Палиндром

function palindrome(str) {
    const newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase(); //очищаем сроку от лишних символов и приводим к нижнему регистру
    return newStr.split('').reverse().join('') === newStr;
}

//sixth task Числа Фибоначчи

function fibonacci(n) {

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let prev = 0;
    let next = 1;
    let result;

    for (let i = 2; i <= n; i++) {
        result = prev + next;
        prev = next;
        next = result;
    }

    return result;
}

//seventh task Попробуйте проанализировать, что делает следующий код

const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7]; //объявления массива
nums.forEach(num => { // выполнения следующей функции для каждого элемента массива
    setTimeout(() => {console.log(num)}, num); //Для каждого числа num из массива вызывается функция setTimeout
}); // Внутри функции setTimeout выполняется console.log(num)

/*
* Метод setTimeout - предоставляет возможность выполнить функцию (в данном случае, вывести число в консоль)
* через заданный промежуток времени. Время задержки устанавливается равным значению num.
* Например: Для первого элемента 0: console.log(0) будет выполнен через 0 миллисекунд.
* Для второго элемента 39: console.log(39) будет выполнен через 39 миллисекунд. И тд.
*
* Но важно заметить, то что метод setTimeout является асинхронным и нет гарантии того, что число выведется через
* указанное время, всё зависит от загружености js движка.
* */



