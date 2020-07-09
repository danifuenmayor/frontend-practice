export const findSpanishError = (err: any) => {
  const spanishError = err.response.data.error.errors[0].messages.es;
  if (spanishError) return spanishError;
  return err;
};
