function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  //deklarasi panjang data array(cars)
  const len = result.length;

  //loop untuk mengatur jumlah iterasi
  for (let i = 0; i < len - 1; i++) {
    //loop untuk mengatur pertukaran posisi atau swap
    for (let j = 0; j < len - 1 - i; j++) {
      //bandingkan element saat ini dengan element setelahnya
      if (result[j].year < result[j + 1].year) {
        //jika elemen saat ini lebih besar dari pada element setelahnya,maka posisi ditukar
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
      console.log(result);
    }
  }
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
