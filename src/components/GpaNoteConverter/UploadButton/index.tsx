import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import React, { FC, useEffect, useState } from 'react';
import useGpaFromGradesFile from 'src/hooks/useGpaFromGradesFile';
import translate from 'src/translate';

interface Props {
  handleOnChangeNotes: (dirtyText: string) => void;
}

const UploadNotesButton: FC<Props> = (props: Props) => {
  const { handleOnChangeNotes } = props;
  const [file, setFile] = useState<UploadFile | undefined>();
  const [uploading, setUploading] = useState(false);
  const { getGpaFromGrades, notes, error } = useGpaFromGradesFile();
  const showSelectFilesButton = !file;

  const uploadProps: UploadProps = {
    onRemove: () => {
      setFile(undefined);
    },
    beforeUpload: (uploadFile: UploadFile) => {
      setFile(uploadFile);

      return false;
    },
    fileList: file ? [file] : [],
  };

  const handleUpload = async () => {
    setUploading(true);
    const castedFile = file as RcFile;
    const grades = await getGpaFromGrades(castedFile);
    handleOnChangeNotes(grades.join(';'));
    setUploading(false);
    setFile(undefined);
  };

  if (showSelectFilesButton) {
    return (
      <Upload {...uploadProps}>
        <Button icon={<UploadOutlined />}>{translate('home.selectUploadFile')}</Button>
      </Upload>
    );
  }

  return (
    <Button type="primary" onClick={handleUpload} loading={uploading}>
      {uploading ? translate('home.uploading') : translate('home.uploadFile')}
    </Button>
  );
};

export default UploadNotesButton;
