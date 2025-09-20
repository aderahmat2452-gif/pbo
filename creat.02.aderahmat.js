class Mobil{
  //konstruktor untuk inisialisasi objek
constructor(merek,model,tahun) {
  this.merek = merek; //properti objek 
  this.model = model;
  this.tahun = tahun;
  }
  // metode untuk menampilkan inpormasi mobil 
  displayinfo() {
  console.log('Mobil:${this.merek}${this.model}(${this.tahun})');
   }
   }
// instansiaasi objek dari kelas mobil
const mobil1 = new Mobil('Toyota','Corolla',2020);
//membuat objek mobil1
const mobil2= new Mobil('honda', 'civic', 2021); 
//Membuat objek Mobil2
// memanggil metode untuk menampilkan informasi
mobil1.displayinfo();//Output:Mobil:Toyota Corola(2020)
mobil2.displayinfo();//Output:Mobil:Honda Civic (2021)
