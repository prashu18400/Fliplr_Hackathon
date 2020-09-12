import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Dos = ["Stay at home", "Wear mask", "Use Sanitizer", "Disinfect your home", "Wash your hands", "Frequent self-isolation"];
  Donts = ["Infected people",
    "Animals",
    "Handshaking",
    "Infected surfaces",
    "Touch your face",
    "Droplets"];
  Symptoms = [["https://colorlib.com/preview/theme/covid/images/symptom_high-fever.png", "High Fever", "Rest and drink plenty of fluids. Medication isn't needed. Call the doctor if the fever is accompanied by a severe headache, stiff neck, shortness of breath, or other unusual signs or symptoms"],
  ["https://colorlib.com/preview/theme/covid/images/symptom_cough.png", "Cough", "A persistent dry cough is rarely a sign of a medical emergency. But see a healthcare provider right away if you have  chest pain, or trouble breathing.Otherwise, make an appointment with your doctor if your cough seems to worsen over time."],
  ["https://colorlib.com/preview/theme/covid/images/symptom_sore-troath.png", "Sore Throat", "Sore throats, also known as pharyngitis, can be acute, lasting only a few days, or chronic, lingering on until their underlying cause is addressed. Most sore throats are the result of common viruses and resolve on their own within 3 to 10 days."],
  ["https://colorlib.com/preview/theme/covid/images/symptom_headache.png", "Head Ache", "You should seek immediate medical attention if you: have a sudden, very severe headache, and it's the first time it's happened. are experiencing any of the signs of stroke including a dropped face on one side;"]];
}
