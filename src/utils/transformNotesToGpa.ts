import mapChileanNoteToGpa from './mapChileanNoteToGpa';

const noteToGpaReducer = (accGpas: number, note: number): number => {
  const gpa = mapChileanNoteToGpa(note);
  return gpa + accGpas;
};

const transformNotesToGpa = (notes: number[]): number => {
  const accGpa = notes.reduce(
    (accNotes: number, note: number) => noteToGpaReducer(accNotes, note),
    0
  );
  return accGpa / notes.length;
};

export default transformNotesToGpa;
