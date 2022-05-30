const messages = {
  en: {
    validation: {
      required({ name }: string): string {
        return `Please fill out the ${name} field.`;
      }
    }
  }
};

export default messages;
