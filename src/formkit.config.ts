import { createInput, type DefaultConfigOptions } from '@formkit/vue';
import { de, fr, en, it } from '@formkit/i18n';
import { generateClasses } from '@formkit/tailwindcss';
import pctTheme from './assets/property-captain-theme.js';
import FormButton from './components/FormButton.vue';
import FormToggle from './components/FormToggle.vue';
import FormInputPill from './components/FormInputPill.vue';
import FormInputCounter from './components/FormInputCounter.vue';

const messages = {
  en: {
    validation: {
      required({ name }: any): string {
        return `Please enter ${name}`;
      },
      alpha({ name }: any): string {
        return `${name} may only contain alphabetic characters`;
      },
      email({ name }: any): string {
        return 'Please enter a valid email address';
      },
      between({ name, args }: any): string {
        return `The ${name} must be between ${args[0]} and ${args[1]}`;
      },
      max({ name, args }: any): string {
        return `${name} must be maximum ${args[0]}`;
      },
      select({ name }: any): string {
        return `Please select ${name}`;
      },
      isValidPhone(): string {
        return 'Please enter a valid telephone number';
      },
      tos(): string {
        return 'Please accept the terms and conditions';
      }
    }
  },
  de: {
    validation: {
      required({ name }: any): string {
        return `Bitte ${name} eingeben`;
      },
      alpha({ name }: any): string {
        return `${name} darf nur alphabetische Zeichen enthalten`;
      },
      email(): string {
        return 'Bitte gültige E-Mail eingeben';
      },
      between({ name, args }: any): string {
        return `Das ${name} muss zwischen ${args[0]} und ${args[1]} liegen`;
      },
      max({ name, args }: any): string {
        return `${name} darf maximal ${args[0]} sein`;
      },
      select({ name }: any): string {
        return `Bitte wähle ${name}`;
      },
      isValidPhone(): string {
        return 'Bitte gültige Telefonnummer eingeben';
      },
      tos(): string {
        return 'Bitte akzeptieren Sie die Allgemeinen Geschäftsbedingungen';
      }
    }
  },
  it: {
    validation: {
      required({ name }: any): string {
        return `Inserire il ${name}`;
      },
      alpha({ name }: any): string {
        return `${name} può contenere solo caratteri alfabetici`;
      },
      email(): string {
        return `Inserire un’e-mail corretta`;
      },
      between({ name, args }: any): string {
        return `${name} deve essere massimo ${args[0]} e ${args[1]}`;
      },
      max({ name, args }: any): string {
        return `${name} must be maximum ${args[0]}`;
      },
      select({ name }: any): string {
        return `Selezionare la ${name}`;
      },
      isValidPhone(): string {
        return 'Inserire un numero di telefono valido';
      },
      tos(): string {
        return 'Accetta i termini e le condizioni';
      }
    }
  },
  fr: {
    validation: {
      required({ name }: any): string {
        return `Veuillez saisir un ${name}`;
      },
      alpha({ name }: any): string {
        return `${name} ne peut contenir que des caractères alphabétiques`;
      },
      email(): string {
        return 'Veuillez saisir une adresse e-mail valide';
      },
      between({ name, args }: any): string {
        return `L'${name} doit être comprise entre ${args[0]} et ${args[1]}`;
      },
      max({ name, args }: any): string {
        return `${name} doit être au maximum ${args[0]}`;
      },
      select({ name }: any): string {
        return `Veuillez sélectionner votre ${name}`;
      },
      isValidPhone(): string {
        return 'Veuillez saisir un numéro de téléphone valide';
      },
      tos(): string {
        return 'Veuillez accepter les termes et conditions';
      }
    }
  }
};

const formkitConfig: DefaultConfigOptions = {
  locales: { de, fr, it, en },
  locale: 'en',
  config: {
    classes: generateClasses(pctTheme)
  },
  inputs: {
    button: {
      type: 'input',
      component: FormButton
    },
    toggle: createInput(FormToggle),
    pill: {
      type: 'input',
      component: FormInputPill
    },
    counter: {
      type: 'input',
      component: FormInputCounter
    }
  },
  messages: messages
};
export default formkitConfig;