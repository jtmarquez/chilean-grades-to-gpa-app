import { Button, Col, Input, Row } from 'antd';
import React, { ChangeEvent, useMemo, useState } from 'react';
import useCachedNotes from 'src/hooks/useCachedNotes';
import translate from 'src/translate';
import parseNotes from 'src/utils/parseNotes';
import transformNotesToGpa from 'src/utils/transformNotesToGpa';
import CachedNotesMenu from './CachedNotesMenu';
import styles from './GpaNoteConverter.module.scss';
import MyGpaMenu from './MyGpaMenu';
import UploadNotesButton from './UploadButton';

const { TextArea } = Input;

const GpaNoteConverter = () => {
  const [notes, setNotes] = useState<string | undefined>();
  const [gpa, setGpa] = useState<number | undefined>();
  const { cachedNotes, handleSetCachedNotes, handleClearCachedNotes } = useCachedNotes();
  const prettiefiedNotes = useMemo(() => parseNotes(notes)?.join(', '), [notes]);

  const handleClearGrades = (options?: { clearGpa?: boolean; clearNotes?: boolean }) => {
    const { clearGpa, clearNotes } = options || {};
    if (clearGpa) {
      setGpa(undefined);
    }
    if (clearNotes) {
      setNotes(undefined);
    }
    handleClearCachedNotes();
  };

  const handleClearGpa = () => {
    handleClearGrades({ clearGpa: true });
  };

  const handleClearNotes = () => {
    handleClearGrades({ clearNotes: true });
  };

  const handleCalculateGpa = () => {
    calculateGpa(notes);
  };

  const calculateGpa = (grades: string) => {
    if (grades) {
      handleSetCachedNotes(grades);
      const cleanNotes = parseNotes(grades);
      const avgGpa = transformNotesToGpa(cleanNotes);
      setGpa(avgGpa);
    }
  };

  const handleUpdateNotesFromCache = () => {
    if (cachedNotes) {
      setNotes(cachedNotes);
      calculateGpa(cachedNotes);
    }
  };

  const handleOnChangeNotes = (dirtyText: string) => {
    const cleanedCharacters = dirtyText.replace(/[^0-9.;\n\s]/g, '');
    setNotes(cleanedCharacters);
  };

  if (typeof gpa === 'number') {
    return (
      <MyGpaMenu
        prettiefiedNotes={prettiefiedNotes}
        gpa={gpa}
        handleClearGpa={handleClearGpa}
      />
    );
  }

  if (cachedNotes) {
    return (
      <CachedNotesMenu
        handleClearNotes={handleClearNotes}
        handleUpdateNotesFromCache={handleUpdateNotesFromCache}
      />
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <TextArea
        placeholder={translate('home.textAreaPlaceHolder')}
        value={notes}
        onChange={(e) => handleOnChangeNotes(e.target.value)}
      />
      <Row className={styles.CalculateGpaActionButton} justify="start" gutter={[24, 24]}>
        <Col>
          <Button type="primary" onClick={handleCalculateGpa}>
            {translate('home.calculateGpaAction')}
          </Button>
        </Col>
        <Col>
          <UploadNotesButton handleOnChangeNotes={handleOnChangeNotes} />
        </Col>
      </Row>
    </div>
  );
};

export default GpaNoteConverter;
