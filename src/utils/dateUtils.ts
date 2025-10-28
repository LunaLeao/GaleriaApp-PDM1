export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString + 'T00:00:00');
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('pt-BR', options);
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return dateString;
  }
};