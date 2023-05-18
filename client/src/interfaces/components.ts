import React from 'react';

export interface Column {
  id: string;
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  minWidth?: number;
  borderRadius?: string;
  render?: (value: any) => React.ReactNode;
}

export interface Row {
  id: string;
  [key: string]: any;
}

export interface Option {
  value: string;
  label: string;
}

export interface CreateAnalysisFormProps {
  setOpenModal: (open: boolean) => void;
  openModal: boolean;
}
