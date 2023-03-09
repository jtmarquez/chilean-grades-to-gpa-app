const mapChileanNoteToGpa = (note: number): number => {
  if (note >= 6.5) {
    return 4;
  }
  if (note >= 6) {
    return 3.7;
  }
  if (note >= 5.5) {
    return 3.3;
  }
  if (note >= 5) {
    return 3;
  }
  if (note >= 4.5) {
    return 2.7;
  }
  if (note >= 4) {
    return 2;
  }
  return 0;
};

export default mapChileanNoteToGpa;
