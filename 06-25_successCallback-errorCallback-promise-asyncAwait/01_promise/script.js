function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//* --------------------------------------------------------

function question_1() {
    const min = +document.getElementById("min").value;
    const max = +document.getElementById("max").value;

    const result = document.getElementById("result");

    generate_7_boom_after_dela_async(min, max).then(n => result.innerText = n).catch(err => alert(err));
}

function generate_7_boom_after_dela_async(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = get_random(min, max);
            if (random % 7 === 0 || random % 10 === 7) {
                resolve(random);
            }
            reject(`Error the number is: ${random} `);
        }, 1000);
    });
}

//* --------------------------------------------------------

function question_2() { }

function prime_number_after_delay_async(min, max) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const random = get_random(min, max);
        }, 1000);
    });
}

//* --------------------------------------------------------

function question_7() {
    generate_strong_password_async().then(p => console.log(`Password: ${p}`)).catch(err => console.log(err));
}

function generate_strong_password_async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let password = '';

            for (let i = 0; i < 6; i++) {
                const char = Math.floor(Math.random() * chars.length);
                password += chars[char];

            }
            if (verification(password)) {
                resolve(password);
            }

            reject(`The passwors isn't strong enough: ${password}`);
        }, 1000);
    })
}

function verification(password) {
    const numbers = /\d/.test(password);
    const lowe_case = /[a-z]/.test(password);
    const upper_case = /[A-Z]/.test(password);

    return numbers && lowe_case && upper_case;
}

question_7();