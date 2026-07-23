import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMenuOpen = false;
  isScrolled = false;
  showScroll = false;
  currentYear = new Date().getFullYear();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.showScroll = window.scrollY > 300;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Navigation Items
  navItems = [
    { name: 'मुख्यपृष्ठ', link: '#home' },
    { name: 'सेवा', link: '#services' },
    { name: 'आमच्याबद्दल', link: '#about' },
    { name: 'रुग्णांचे मत', link: '#testimonials' },
    { name: 'संपर्क', link: '#contact' }
  ];

  // About Cards
  aboutCards = [
    { icon: 'fas fa-flag', title: 'आमचे ध्येय', text: 'प्रत्येक रुग्णाला वेदनामुक्त, सक्रिय आणि निरोगी जीवन जगण्यासाठी सर्वोत्तम फिजिओथेरपी सेवा प्रदान करणे.' },
    { icon: 'fas fa-eye', title: 'आमची दृष्टी', text: 'उच्च दर्जाची, परिणामकारक आणि विश्वासार्ह फिजिओथेरपी सेवा देऊन समाजातील आरोग्य आणि जीवनमानात सकारात्मक बदल घडवणे.' },
    { icon: 'fas fa-handshake', title: 'आमचे वचन', text: 'तुमचे आरोग्य, तुमचा विश्वास आणि तुमचे समाधान हेच आमचे सर्वात मोठे यश आहे.' }
  ];

  // Services
  services = [
    { name: 'पाठदुखी व मानदुखी', icon: 'fas fa-spine', desc: 'तज्ज्ञ फिजिओथेरपीद्वारे पाठ आणि मानेच्या वेदनांवर प्रभावी उपचार.', gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)' },
    { name: 'सांधेदुखी उपचार', icon: 'fas fa-joint', desc: 'सांधेदुखीवर आधुनिक उपचार पद्धती आणि व्यायाम थेरपी.', gradient: 'linear-gradient(135deg, #4ECDC4, #6EDDD6)' },
    { name: 'ऑर्थोपेडिक थेरपी', icon: 'fas fa-bone', desc: 'हाडे, स्नायू आणि सांधे यांच्या समस्यांवर वैज्ञानिक उपचार.', gradient: 'linear-gradient(135deg, #45B7D1, #6EC8E0)' },
    { name: 'न्यूरोलॉजिकल थेरपी', icon: 'fas fa-brain', desc: 'मज्जासंस्थेशी संबंधित विकारांवर विशेष उपचार योजना.', gradient: 'linear-gradient(135deg, #96CEB4, #B8DFC9)' },
    { name: 'स्पोर्ट्स पुनर्वसन', icon: 'fas fa-running', desc: 'खेळातील दुखापतींचे पुनर्वसन आणि कार्यक्षमता पुनर्प्राप्ती.', gradient: 'linear-gradient(135deg, #DDA0DD, #E8C0E8)' },
    { name: 'शस्त्रक्रियेनंतर पुनर्वसन', icon: 'fas fa-procedures', desc: 'शस्त्रक्रियेनंतर जलद पुनर्प्राप्तीसाठी वैयक्तिक कार्यक्रम.', gradient: 'linear-gradient(135deg, #F7DC6F, #FAE894)' }
  ];

  // Why Choose Us
  reasons = [
    { icon: 'fas fa-user-md', text: 'अनुभवी व कुशल फिजिओथेरपिस्ट' },
    { icon: 'fas fa-user-edit', text: 'वैयक्तिक उपचार योजना' },
    { icon: 'fas fa-microscope', text: 'आधुनिक उपकरणे व पद्धती' },
    { icon: 'fas fa-shield-alt', text: 'स्वच्छ व सुरक्षित वातावरण' },
    { icon: 'fas fa-rupee-sign', text: 'वाजवी शुल्क' },
    { icon: 'fas fa-hand-holding-heart', text: 'रुग्णकेंद्रित सेवा' }
  ];

  // Testimonials
  testimonials = [
    { name: 'रमेश पाटील', text: 'पाठदुखीच्या त्रासातून मुक्ती मिळाली. नदाफ क्लिनिकच्या उपचारांनी माझे जीवन सुधारले.', rating: 5, location: 'कोल्हापूर' },
    { name: 'स्नेहा जोशी', text: 'गुडघेदुखीवर खूप प्रभावी उपचार. खूप आभारी आहे.', rating: 5, location: 'शिरोळ' },
    { name: 'अनिल देशमुख', text: 'व्यावसायिक आणि आदरयुक्त वातावरण. उपचारांचे परिणाम उत्कृष्ट.', rating: 5, location: 'नांदणी' },
    { name: 'मीना कुलकर्णी', text: 'माझ्या आईला झालेल्या अपघातानंतर उत्तम पुनर्वसन.', rating: 5, location: 'कोल्हापूर' }
  ];

  // Stats
  stats = [
    { number: '1000+', label: 'समाधानी रुग्ण', icon: 'fas fa-users' },
    { number: '98%', label: 'यशस्वी उपचार', icon: 'fas fa-percent' },
    { number: '7+', label: 'वर्षे अनुभव', icon: 'fas fa-calendar-alt' },
    { number: '24/7', label: 'सेवा उपलब्धता', icon: 'fas fa-clock' }
  ];

  // Contact Items
  contactItems = [
  { icon: 'fas fa-phone-alt', title: 'फोन', value: '+91 86691 03497', link: 'tel:+918669103497' },
  { icon: 'fas fa-envelope', title: 'ई-मेल', value: 'nadafgroup.in&#64;gmail.com', link: 'mailto:nadafgroup.in&#64;gmail.com' },
  { icon: 'fas fa-map-marker-alt', title: 'पत्ता', value: 'नांदणी, ता. शिरोळ, जि. कोल्हापूर', link: '' }
];

  // Working Hours
  workingHours = [
    { day: 'सोमवार - शनिवार', hours: 'संध्याकाळी 5:00 - रात्री 10:00' },
    { day: 'रविवार', hours: 'सकाळी 10:00 - दुपारी 2:00' }
  ];

  // Pediatric Specialties
  pediatricSpecialties = [
    { icon: 'fas fa-child', title: 'बाल पुनर्वसन', desc: 'Pediatric Rehabilitation' },
    { icon: 'fas fa-brain', title: 'न्यूरोडेव्हलपमेंटल थेरपी', desc: 'Neurodevelopmental Therapy' },
    { icon: 'fas fa-hand-holding-heart', title: 'लवकर हस्तक्षेप', desc: 'Early Intervention' },
    { icon: 'fas fa-clock', title: 'विकासातील उशीर व्यवस्थापन', desc: 'Developmental Delay Management' }
  ];

  // Treatment Methods
  treatmentMethods = [
    { icon: 'fas fa-dumbbell', name: 'व्यायाम थेरपी' },
    { icon: 'fas fa-hand-holding-heart', name: 'मॅन्युअल थेरपी' },
    { icon: 'fas fa-brain', name: 'न्यूरोडेव्हलपमेंटल ट्रीटमेंट (NDT)' },
    { icon: 'fas fa-running', name: 'स्नायू बळकटीकरण व स्ट्रेचिंग' },
    { icon: 'fas fa-balance-scale', name: 'संतुलन व चाल प्रशिक्षण' },
    { icon: 'fas fa-bolt', name: 'इलेक्ट्रोथेरपी (IFT, TENS, अल्ट्रासाऊंड)' },
    { icon: 'fas fa-user-check', name: 'पोस्चर सुधारणा व एर्गोनॉमिक्स' },
    { icon: 'fas fa-home', name: 'घरगुती व्यायाम योजना' }
  ];

  // Pediatric Quote
  pediatricQuote = {
    text: '"प्रत्येक उशिरा पडलेले पाऊल आशेने भरलेले असते—आणि आम्ही त्या आशेला प्रगतीत बदलण्यासाठी सोबत आहोत."',
    author: 'नदाफ फिजिओ क्लिनिक'
  };
}