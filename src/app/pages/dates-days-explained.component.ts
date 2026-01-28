import { Component, computed } from '@angular/core';
import { NOUNS } from '../words/nouns';

@Component({
  selector: 'app-dates-days-explained',
  imports: [],
  template: `

    <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-8">
      Dates & Days Explained
    </h1>
    
    <!-- Introduction -->
    <div class="mb-10 prose max-w-none">
      <p class="text-lg text-base-content/80 leading-relaxed">
        Many Spanish words for days and months come from Latin, often named after Roman gods, emperors, or natural phenomena. 
        Understanding these origins can help you remember the words and make connections between Spanish and other Romance languages. 
        Notice how the Latin roots evolved into the modern Spanish words we use today!
      </p>
    </div>
    
    <!-- Days of the Week -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Days of the Week</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (day of daysOfWeek(); track day.word) {
          <div class="mb-4">
            <h3 class="text-2xl font-semibold mb-1">
              <span class="text-primary">{{ day.word }}</span> - {{ day.definition }}
            </h3>
            <p class="text-base-content/70 italic">{{ day.origin }}</p>
          </div>
        }
      </div>
    </div>
    
    <!-- Months -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Months of the Year</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (month of months(); track month.word) {
          <div class="mb-4">
            <h3 class="text-2xl font-semibold mb-1">
              <span class="text-primary">{{ month.word }}</span> - {{ month.definition }}
            </h3>
            <p class="text-base-content/70 italic">{{ month.origin }}</p>
          </div>
        }
      </div>
    </div>
    
    <!-- Writing Dates -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Writing Dates in Spanish</h2>
      
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-3">Date Format</h3>
        <p class="text-base-content/80 mb-4">
          In Spanish, dates are written in the format: <strong>day + de + month + de + year</strong>
        </p>
      </div>
      
      <div class="mb-6">
        <h4 class="font-bold text-lg mb-3">Examples:</h4>
        <div class="space-y-3 ml-4">
          <div>
            <p class="font-semibold text-lg">5 de enero de 2024</p>
            <p class="text-base-content/70">January 5, 2024</p>
          </div>
          <div>
            <p class="font-semibold text-lg">15 de marzo de 2025</p>
            <p class="text-base-content/70">March 15, 2025</p>
          </div>
          <div>
            <p class="font-semibold text-lg">31 de diciembre de 2023</p>
            <p class="text-base-content/70">December 31, 2023</p>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="font-bold text-lg mb-3">Important Notes:</h4>
        <ul class="list-disc list-inside space-y-2 ml-4 text-base-content/80">
          <li>Days of the week and months are NOT capitalized in Spanish</li>
          <li>Use cardinal numbers (1, 2, 3...) for all days EXCEPT the first day of the month</li>
          <li>The first day of the month uses "el primero" (the first)</li>
          <li>When writing just the day and month, you can omit "de": <em>5 enero</em></li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h4 class="font-bold text-lg mb-3">Special Case - First of the Month:</h4>
        <div class="space-y-3 ml-4">
          <div>
            <p class="font-semibold text-lg">el primero de mayo</p>
            <p class="text-base-content/70">May 1st / the first of May</p>
          </div>
          <div>
            <p class="font-semibold text-lg">el 1 de mayo</p>
            <p class="text-base-content/70">May 1st (abbreviated form)</p>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="font-bold text-lg mb-3">Asking and Saying the Date:</h4>
        <div class="space-y-3 ml-4">
          <div>
            <p class="font-semibold text-lg">¿Qué fecha es hoy?</p>
            <p class="text-base-content/70">What is today's date?</p>
          </div>
          <div>
            <p class="font-semibold text-lg">¿Cuál es la fecha?</p>
            <p class="text-base-content/70">What is the date?</p>
          </div>
          <div>
            <p class="font-semibold text-lg">Hoy es el 15 de marzo.</p>
            <p class="text-base-content/70">Today is March 15th.</p>
          </div>
        </div>
      </div>
    </div>

  `
})
export class DatesAndDaysExplainedComponent {
  daysOfWeek = computed(() => 
    NOUNS.filter(noun => noun.tags?.includes('day-of-week'))
  );
  
  months = computed(() => 
    NOUNS.filter(noun => noun.tags?.includes('month'))
  );
}
