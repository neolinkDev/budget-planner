

export const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  return newDate.toLocaleDateString('es-ES', options);
};
