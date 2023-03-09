const parseNotes = (notes: string | undefined) => {
  const parsedNotes = notes?.split(/;|\n|\s/g);
  const cleanNotes = parsedNotes?.map((note) => parseFloat(note));

  return cleanNotes;
};

export default parseNotes;
