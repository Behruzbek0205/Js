//  1. misol
// age 18 yoki undan katta bo‘lsa "Voyaga yetgan", aks holda "Voyaga yetmagan" chiqadigan kod yoz.
// let age = prompt("Yoshingizni kiriting")
// if (age >= 18) {
//   console.log("voyaga etgan");
// } else {
//   console.log("voyaga etmangan");
// }

//  2. misol
// number musbat yoki manfiy ekanini tekshir.

// let son = prompt("number kriting");
// if (son % 2 === 0) {
//   console.log("Musbat son");
// } else {
//   console.log("Manfiy son");
// }

//  3. misol
// password "12345" ga teng bo‘lsa "To‘g‘ri parol" chiqsin.
// let password = prompt('Password kiriting')
// if (password == "12345") {
//   console.log("To‘g‘ri parol");
// }else{
//   console.log("Passwordingiz xato");
// }

// 4. misol
// money 50 000 dan kam bo‘lsa "Pul yetarli emas", aks holda "Xarid mumkin".
// let money = prompt("Pul sanang");
// if (money >= 50000) {
//   console.log("Xarid mumkin");
// } else {
//   console.log("Pul yetarli emas");
// }

//  5. misol
// temp 0 dan past bo‘lsa "Muz", aks holda "Muz emas".
// let temp = prompt("Temperaturani kiriting ?");
// if (temp >= 0) {
//   console.log("Suv muz emas");
// } else {
//   console.log("Suv muzlagan");
// }

//  6. misol
// isLogin true bo‘lsa "Xush kelibsiz", false bo‘lsa "Login qiling" chiqsin.

// let isLogin = false;

// if (!isLogin) {
//   console.log("Xush kelibsiz");
// } else {
//   console.log("Login qiling");
// }

// 7. misol
//  car true bo‘lsa "Mashina bor", false bo‘lsa "Mashina yo‘q".

// let car = true;

// if (car) {
//   console.log("Mashina bor");
// } else {
//   console.log("Mashina yo‘q");
// }

// 8. misol
// score 60 dan katta bo‘lsa "O‘tdi", aks holda "Yiqildi".
// let score = prompt("scoringizni kiriting");
// if (score >= 60) {
//   console.log("Ottingiz");
// } else {
//   console.log("Yiqildingiz");
// }

// 9.misol
// online holatini tekshir.
// let online = true;

// if (online) {
//   console.log("Online");
// } else {
//   console.log("Offline");
// }

// 10.misol
//light "on" bo‘lsa "Yoqilgan", aks holda "O‘chiq".
// let isLogin = false;

// if (isLogin) {
//   console.log("Xush kelibsiz");
// } else {
//   console.log("Login qiling");
// }

// 11.misol
// ball: 90+ → A 80–89 → B qolgan → C:

// let ball = prompt("Balingizni kiriting ");

// if (ball >= 90) {
//   console.log("A");
// } else if (ball >= 80 && 89) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// 12.misol
// hour: < 12 → Ertalab < 18 → Kunduz else → Kech

// let hour = prompt("Soat kiriting ");
// if (hour < 12 ) {
//   console.log("Ertalab");
// } else if (hour < 18 ) {
//   console.log("Kunduzi");
// } else {
//   console.log("Kech");
// }

// // birinchi masala
// let masala = prompt("manfiy yoki musbatni aniqlang")
// if (masala >0){
//   console.log("musbat");
// }else if(masala <=0){
//   console.log("manfiy");
// }

// // ikkinchi masala
// let son = Number(prompt("juft yoki toq sonni aniqlang"))
// console.log(son);
// if(son % 2 === 0){
//   console.log("juft son");
// }else{
//   console.log("toq son");
// }

// // 4 masala
// let baho = prompt("balingizni baholang")
// if ( baho >=90){
//   console.log("alo");
// } else if(baho >=80 && baho <=89){
//   console.log("yaxshi");
// }else if (baho >=70 && baho <=79){
//   console.log("qoniqarli");
// }else if ( baho >=0 && baho <=69){
//   console.log("qoniqarsiz");
// }

// // 5 masala
// let chegirma = prompt("chegirmani xisoblang")
// if (chegirma >100){
//   console.log("10% chegirma");
// }else if(chegirma >50 && chegirma <=100){
//   console.log("5% chegirma");
// }else if (chegirma <=50){
//   console.log("chegirma yoq");
// }

// // 6 masala
// let yosh = prompt("Yoshinigizni kiriting!");
// if (yosh >= 18) {
//   console.log("siz katta yoshdasiz");
// }else {
//   console.log("Voyaga yetmagan");
// }

// // 7 masala
// let login = prompt("Loginni kiriting:");
// let parol = prompt("Parolni kiriting:");

// if (login === "admin" && parol === "1234") {
//   console.log("Hush kelibsiz");
// } else {
//   console.log("Login yoki parol noto‘g‘ri");
// }
// // 8 masala
// let harakat = prompt("Tepalik yoki pastlikni aniqlash")
// if(harakat <0){
//   console.log("Muzlik");
// }else if (harakat >=0 && harakat <=30){
//   console.log("Yoqimli harorat");
// }else if (harakat >30){
//   console.log("Juda issiq");
// }

// // 9 masala
// let soat = prompt("Havola qabul qilish")
// if (soat >=6 && harakat <12){
//   console.log("Ertalab");
// }else if(soat >=12 && soat <18){
//   console.log("Kunduzi");
// }else if (soat >=18 && soat <=23 || soat <=0 && soat <6 ){
//   console.log("Kechasi");
// }

// // 10 masala
// let oy = prompt("Oy mavsumi aniqlash")
// if (oy ==12 && oy ==1 && oy ==2){
//   console.log("Qish");
// }else if( oy ==3 && oy ==4 && oy ==5){
//   console.log("Bahor");
// }else if (oy == 6 && oy == 7 && oy ==8){
//   console.log("yoz");
// }else if (oy ==9 && oy ==10 && oy ==11 ){
//   console.log("Kuz");
// }

// // 11 masala
// let kun = prompt("hafta kunlari")
// if(kun == 1){
//   console.log("Dushanba");
// }else if (kun == 2){
//   console.log("Seshanba");
// }else if (kun == 3){
//   console.log("Chorshanba");
// }else if (kun == 4){
//   console.log("Payshanba");
// }else if (kun == 5){
//   console.log("Juma");
// }else if (kun == 6){
//   console.log("Shanba");
// }else if (kun == 7){
//   console.log("Yakshanba");
// }

// // 12 masala
// let narx =prompt("narxni aniqlang")
// if(narx <=10){
//   console.log("narx 500 so‘m.");
// }else if(narx >=10){
//   console.log("narx 450 so‘m.");
// }

// //13 masala
// let fasl = prompt("Yil fasli bo‘yicha harorat tavsiyasi")
// if (fasl ==="Qish"){
//   console.log("Sovuq, issiq kiyining.");
// }else if(fasl ==="Bahor"){
//   console.log("Ob-havo o‘zgaruvchan, ehtiyot bo‘ling.");
// }else if(fasl ==="Yoz"){
//   console.log("Issiq, suyuqlik ko‘proq iching.");
// }else if(fasl ==="Kuz"){
//   console.log("Sovuq kunlarga tayyor turing.");
// }

// // 14 masala
// let ballar = prompt("O‘yin ballariga qarab bonus hisoblash")
// if (ballar <=50){
//   console.log("hech qanday bonus yo‘q.");
// }else if(ballar >=50 && ballar <=100){
//   console.log("10 bonus ball qo‘shilsin.");
// }else if(ballar >100){
//   console.log("20 bonus ball qo‘shilsin.");
// }// //  15 masala
// let bolish = prompt("Son 5 ga va 3 ga bo‘linishini tekshirish")
// if(bolish % 5 === 0 && bolish % 3=== 0){
//   console.log("5 va 3 ga bo‘linadi");
// }else{
//   console.log("bolinmaydi");
// }

// // 16 masala
// let tezlik = prompt("Avtomobil jarimasi")
// if(tezlik <=60){
//   console.log("Tezlik me’yorida");
// }else if(tezlik >=60 && tezlik <=80){
//   console.log("Ogohlantirish");
// }else if(tezlik >=80){
//   console.log("Jarima");
// }

// // 17 masala
// let daromad = prompt("Oylik daromadingizni kiriting");
// let xarajat = prompt("Oylik xarajatingizni kiriting");

// if (xarajat < daromad) {
//   console.log("Tejamkorlik");
// } else if (xarajat === daromad) {
//   console.log("Barqaror");
// } else if (xarajat > daromad) {
//   console.log("Ortiqcha sarf-xarajat");
// } else {
//   console.log("Noto‘g‘ri ma'lumot kiritildi");
// }

// // 18 masala
// let price = prompt("Narx cheklovi")
// if (price >=100){
//   console.log("Qimmat");
// }else if(price >=50 && price <=100){
//   console.log("O‘rtacha");
// }else if(price <=50){
//   console.log("Arzon");
// }

// misol.20
// Yosh = 16
// 0–6 → Bog‘cha
// 7–17 → Maktab
// 18+ → Ish

// let yosh = prompt("Yoshingizni kiriting ?");

// if (yosh >= 0 && yosh <= 6) {
//   console.log("Bog‘cha");
// } else if (yosh >= 7 && yosh <= 17) {
//   console.log("maktab oquvchisi");
// } else if (yosh >= 18) {
//   console.log("Ish");
// } else {
//   console.log("Juda katta yosh");
// }

//  misol 21
// Ball = 87
// Agar ball:

// 90 va undan yuqori → A

// 70–89 → B

// 69 va past → C

// let age = 87;

// if (age >= 90) {
//   console.log("A");
// } else if (age >= 70 && age <= 89) {
//   console.log("B");
// } else if (age <= 69) {
//   console.log("C");
// } else {
//   console.log("Juda past ball");
// }

// Soat = 15

// 6–11 → Ertalab

// 12–17 → Kunduz

// Boshqa vaqtda → Kech

// let soat = 15;
// if (soat >= 6 && soat <= 11) {
//   console.log("Ertalab");
// } else if (soat >= 12 && soat <= 17) {
//   console.log("Kunduz");
// } else {
//   console.log("Kech");
// }

// Tezlik = 70 km/soat

// 0–30 → Sekin

// 31–70 → Normal

// 71+ → Tez

// misol === tezlik

// let tezlik = 70;

// if (tezlik >= 0 && tezlik <= 30) {
//   console.log("Sekin");
// } else if (tezlik >= 31 && tezlik <= 70) {
//   console.log("Normal");
// } else {
//   console.log("tez");
// }

// dam olish kunlari

// Kun = "shanba"

// shanba / yakshanba → Dam olish kuni

// boshqa kunlar → Ish kuni

// let kun = "shanba";

// if (kun == "shanba" || kun == "yakshanba") {
//   console.log("dam olish kuni");
// } else {
//   console.log("Ish kunlari");
// }

// Harorat = 5°C

// 0 va past → Muz

// 1–15 → Sovuq

// 16+ → Iliq

//  harorat

let harorat = 5;

if (harorat <= 0) {
  console.log("Muz 🥶");
} else if (harorat >= 1 && harorat <= 15) {
  console.log("sovuq");
} else {
  console.log("Iliq");
}
