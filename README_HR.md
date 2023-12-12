# 📚 Matrix Library
Library je stvoren za potrebe razvoja web stranica i za brže i jednostavne izračune s matricama i brojevima. Matrica je sposobna za sve operacije, a upute detaljno opisuju što koja radi i kako radi.

# 📄 Licenca
Ovaj library je dostupan pod MIT licencom.

# 📖 KAKO SE KORISTI
## IMPORTING LIBRARY
var { mul, sum, sub, sumNum, subNum, mulNum, trans, det } = require('path');

Zalijepite kod na početak datoteke u kojoj namjeravate koristiti funkcije. Umjesto path napišite gdje se nalazi glavna datoteka matrix.js.

## FUNKCIJE
- **mul(a,b)** -> Množi matrice redoslijedom a * b. (eng. multiplication)
- **sum(a,b)** -> Zbraja matrice a + b. (eng. summing)
- **sub(a,b)** -> Oduzima matrice a - b. (eng. subtraction)
- **mulNum(number,matrix,order)** -> Pretvara broj u matricu tako da se može pomnožiti s matricom. Budući da množenje matrica nije komutativno, order (eng. redoslijed) određuje redoslijed množenja. (eng. ***mul***tiplying a ***Num***ber with matrix)
  - order = 0 -> A(na početku broj) * B(matrica)
  - order = 1 -> B(matrica) * A(na početku broj)
- **sumNum(number,matrix)** -> Pretvara broj u matricu istog reda i stupca kao i unesena matrica i zbraja ju unesenoj matrici. (eng. ***sum***ming a ***Num***ber with matrix)
- **subNum(number,matrix,order)** -> Pretvara broj u matricu i oduzima ga od matrice. Varijabla order je redoslijed i primjenjuje se ista sintaksa kao za mulNum(). (eng. ***sub***tracting a ***Num***ber with matrix)
- **trans(matrix)** -> Transponira matricu. (eng. transpose)
- **det(matrix)** -> Određuje determinantu matrice. (eng. determinant)

# ❗**VAŽNO**❗
Sve funkcije vraćaju array u kojem svaki element predstavlja svoj red matrice, osim funkcije det(), koja vraća samo broj.

# Hvala što koristite Matrix Library!
