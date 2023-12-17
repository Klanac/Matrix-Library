# 📚 Matrix Library

Library je stvoren za potrebe razvoja web stranica i za brže i jednostavne izračune s matricama i brojevima. Matrica je sposobna za sve operacije, a upute detaljno opisuju što koja radi i kako radi.

# 📄 Licenca

Ovaj library je dostupan pod MIT licencom.

# 📖 KAKO SE KORISTI

## IMPORTING LIBRARY

import { mul, sum, sub, sumNum, subNum, mulNum, trans, det } from "path";

**Preuzmite i raspakirajte ZIP!** Zalijepite kod na početak datoteke u kojoj namjeravate koristiti funkcije. Umjesto path napišite gdje se nalazi glavna datoteka matrix.js.

## FUNKCIJE

- **mul(a,b)** -> Množi matrice redoslijedom a * b. (eng. multiplication)
- **sum(a,b)** -> Zbraja matrice a + b. (eng. summing)
- **sub(a,b)** -> Oduzima matrice a - b. (eng. subtraction)
- **mulNum(number,matrix,order)** -> Množi broj sa svakim elementom matrice. (eng. **_mul_**tiplying a **_Num_**ber with matrix)
- **sumNum(number,matrix)** -> Pretvara broj u matricu istog reda i stupca kao i unesena matrica i zbraja ju unesenoj matrici. (eng. **_sum_**ming a **_Num_**ber with matrix)
- **subNum(number,matrix,order)** -> Pretvara broj u matricu i oduzima ga od matrice. Varijabla order (hrv. redoslijed) određuje redoslijed množenja. (eng. **_sub_**tracting a **_Num_**ber with matrix)
  - order = 0 -> A(broj) - B(matrica)
  - order = 1 -> B(matrica) - A(broj)
- **trans(matrix)** -> Transponira matricu. (eng. transpose)
- **det(matrix)** -> Određuje determinantu matrice. (eng. determinant)

# ❗**VAŽNO**❗

Sve funkcije vraćaju array u kojem svaki element predstavlja svoj red matrice, osim funkcije det(), koja vraća samo broj.

# Hvala što koristite Matrix Library!
