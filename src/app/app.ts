import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { WhatsAppContact } from './components/whatsapp-contact/whatsapp-contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsAppContact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
