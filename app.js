// For1: k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi dastur.
let k = 5, n = 3;
for (let i = 0; i < n; i++) {
    console.log(k);
}

// For2: a va b butun sonlari berilgan (a < b). a va b orasidagi barcha sonlarni chiqarish va ularning sonini aniqlash.
let a = 2, b = 6; 
let count = 0;
for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
}
console.log("Sonlar soni:", count);

// For3: a va b butun sonlari berilgan (a < b). a va b orasidagi sonlarni kamayish tartibida chiqarish va ularning sonini aniqlash.
a = 2; b = 6; 
count = 0;
for (let i = b; i >= a; i--) {
    if (i !== a && i !== b) {
        console.log(i);
        count++;
    }
}
console.log("Sonlar soni:", count);

// For4: Bir kg konfetning narxi berilgan. 1 kg dan 10 kg gacha bo'lgan konfet narxlarini chiqarish.
let price = 2000; 
for (let i = 1; i <= 10; i++) {
    console.log(`${i} kg konfet narxi:`, price * i);
}

// For5: Bir kg konfetning narxi berilgan. 0.1 kg dan 1 kg gacha bo'lgan konfet narxlarini chiqarish.
price = 2000; 
for (let i = 0.1; i <= 1; i += 0.1) {
    console.log(`${i.toFixed(1)} kg konfet narxi:`, price * i);
}

// For6: Bir kg konfetning narxi berilgan. 1.2 kg dan 2 kg gacha bo'lgan konfet narxlarini chiqarish.
price = 2000;
for (let i = 1.2; i <= 2; i += 0.2) {
    console.log(`${i.toFixed(1)} kg konfet narxi:`, price * i);
}

// For7: a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini hisoblash.
a = 1; b = 5;
let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}
console.log("Yig'indi:", sum);

// For8: a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini hisoblash.
a = 1; b = 5; 
let product = 1;
for (let i = a; i <= b; i++) {
    product *= i;
}
console.log("Ko'paytma:", product);

// For9: a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini hisoblash.
a = 1; b = 5;
sum = 0;
for (let i = a; i <= b; i++) {
    sum += i * i;
}
console.log("Kvadratlar yig'indisi:", sum);

// For10: n butun soni berilgan (n > 0). S = 1 + 1/2 + 1/3 + ... + 1/n yig'indisini hisoblash.
n = 5; 
sum = 0;
for (let i = 1; i <= n; i++) {
    sum += 1 / i;
}
console.log("S yig'indisi:", sum);
